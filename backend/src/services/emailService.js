const nodemailer = require('nodemailer');
exports.sendConfirmEmail = async (email, token) => {
  const link = `https://popthelook.com/verify?token=${token}`;
  // Send email with link - user clicks -> homepage -> profile form
  console.log(`Send to ${email}: Click ${link}`);
};
exports.sendResetEmail = async (email, token) => {
  const link = `https://popthelook.com/reset?token=${token}`;
  console.log(`Reset link: ${link}`);
};
