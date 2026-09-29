const express = require('express');
const router = express.Router();
const { register, verifyEmail, login, completeProfile, forgotPassword, resetPassword } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

router.post('/register', register);
router.get('/verify', verifyEmail); // Email link clicks here
router.post('/login', login);
router.post('/complete-profile', auth, completeProfile);
router.post('/forgot', forgotPassword);
router.post('/reset', resetPassword);

module.exports = router;
