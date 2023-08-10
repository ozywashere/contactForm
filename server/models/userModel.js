import mongoose from 'mongoose';
import validator from 'validator';
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, 'First name is required'],
      minLength: [3, 'First name must be at least 3 characters long'],
      maxLength: [50, 'First name must be at most 50 characters long'],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, 'Last name is required'],
      minLength: [3, 'Last name must be at least 3 characters long'],
      maxLength: [50, 'Last name must be at most 50 characters long'],
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'Email is required'],
      unique: true,
      validator: [validator.isEmail, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minLength: [6, 'Password must be at least 6 characters long'],
      maxLength: [50, 'Password must be at most 50 characters long'],
    },
    phoneNumber: {
      type: Number,
      required: [true, 'Phone number is required'],
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'pending', 'blocked', 'deleted'],
      default: 'pending',
    },
    location: {
      type: String,
      trim: true,
      default: 'Earth',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', userSchema);
