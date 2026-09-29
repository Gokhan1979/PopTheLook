const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

exports.sendConfirmEmail = async (email, token) => {
  const link = `${process.env.FRONTEND_URL}/verify?token=${token}`;
  await transporter.sendMail({
    from: 'POP THE LOOK <noreply@popthelook.com>',
    to: email,
    subject: 'Confirm your POP THE LOOK account',
    html: `<h1>Welcome to POP THE LOOK</h1><p>Click <a href="${link}">HERE</a> to confirm your email and complete your profile.</p><p>Link: ${link}</p>`
  });
};

exports.sendResetEmail = async (email, token) => {
  const link = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
  await transporter.sendMail({
    from: 'POP THE LOOK <noreply@popthelook.com>',
    to: email,
    subject: 'Reset your password',
    html: `<p>Click <a href="${link}">HERE</a> to reset password.</p><p>Link: ${link}</p><p>Expires in 1 hour</p>`
  });
};
