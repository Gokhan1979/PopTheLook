import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  verifyToken: String,
  resetToken: String,
  resetTokenExpiry: Date,
  name: String,
  surname: String,
  address: {
    street: String,
    city: String,
    country: String,
    postcode: String
  },
  profileCompleted: { type: Boolean, default: false }
}, { timestamps: true });

userSchema.pre('save', async function(next){
  if(!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model('User', userSchema);
export default User;
