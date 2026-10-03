const express = require('express');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/User');
const router = express.Router();

// 1. FORGOT - user enters email
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Email not found" });

    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    user.resetTokenExpiry = Date.now() + 15 * 60 * 1000; // 15 min
    await user.save();

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    await transporter.sendMail({
      to: email,
      subject: "POP THE LOOK - Reset Password",
      html: `<p>Click <a href="${resetUrl}">here</a> to reset your password. Link expires in 15 min.</p>`
    });

    res.json({ message: "Reset link sent to email" });
  } catch (err) { res.status(500).json({ message: err.message }) }
});

// 2. RESET - user clicks link, enters new + confirm
router.post('/reset-password/:token', async (req, res) => {
  try {
    const hashed = crypto.createHash('sha256').update(req.params.token).digest('hex');
    const user = await User.findOne({ 
      resetToken: hashed, 
      resetTokenExpiry: { $gt: Date.now() } 
    });
    if (!user) return res.status(400).json({ message: "Invalid or expired link" });

    const { password, confirmPassword } = req.body;
    if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match" });

    user.password = password; // will be hashed by your pre('save')
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.json({ message: "Password reset successful, now sign in" });
  } catch (err) { res.status(500).json({ message: err.message }) }
});

module.exports = router;
