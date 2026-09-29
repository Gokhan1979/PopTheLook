const User = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { sendConfirmEmail, sendResetEmail } = require('../services/emailService');

// CREATE ACCOUNT -> SEND EMAIL CONFIRMATION
exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if(user) return res.status(400).json({ message: 'User exists' });

    const verifyToken = crypto.randomBytes(32).toString('hex');
    
    user = await User.create({
      email, password, verifyToken, isVerified: false
    });

    // SEND EMAIL CONFIRMATION
    await sendConfirmEmail(email, verifyToken);

    res.status(201).json({ message: 'Check your email! Confirmation sent to ' + email });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// USER CLICK LINK IN EMAIL -> VERIFY -> HOMEPAGE -> PROFILE FORM
exports.verifyEmail = async (req, res) => {
  const { token } = req.query;
  try {
    const user = await User.findOne({ verifyToken: token });
    if(!user) return res.status(400).json({ message: 'Invalid link' });

    user.isVerified = true;
    user.verifyToken = undefined;
    await user.save();

    // Create JWT so frontend knows user is verified and can open profile form
    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    // Redirect to homepage with token - frontend will immediately open profile form
    res.redirect(`https://gokhan1979.github.io/pop-the-look/?verified=true&token=${jwtToken}`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// SIGNIN PAGE
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({ message: 'Invalid credentials' });
    if(!user.isVerified) return res.status(400).json({ message: 'Please verify email first' });

    const isMatch = await require('bcryptjs').compare(password, user.password);
    if(!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user, needsProfile: !user.profileCompleted });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PROFILE FORM - Name Surname Address...
exports.completeProfile = async (req, res) => {
  const { name, surname, street, city, country, postcode } = req.body;
  try {
    const user = await User.findById(req.user.id);
    user.name = name;
    user.surname = surname;
    user.address = { street, city, country, postcode };
    user.profileCompleted = true;
    await user.save();
    res.json({ message: 'Profile saved', user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// FORGOT PASSWORD - ENTER EMAIL PAGE -> SEND RESET EMAIL
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if(!user) return res.status(404).json({ message: 'User not found' });

    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 3600000; // 1 hour
    await user.save();

    await sendResetEmail(email, resetToken);
    res.json({ message: 'Reset link sent to ' + email });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// USER CLICK RESET LINK IN EMAIL -> OPEN RESET PASSWORD PAGE
exports.resetPassword = async (req, res) => {
  const { token, newPassword, confirmPassword } = req.body;
  try {
    if(newPassword !== confirmPassword) return res.status(400).json({ message: 'Passwords dont match' });

    const user = await User.findOne({ 
      resetToken: token, 
      resetTokenExpiry: { $gt: Date.now() } 
    });
    if(!user) return res.status(400).json({ message: 'Link expired or invalid' });

    user.password = newPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.json({ message: 'Password reset! Redirecting to signin page...' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
