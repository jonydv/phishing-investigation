import { Schema, model } from 'mongoose';
import { UserInterface } from '../interfaces/user';

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: [true, 'E-mail is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
});

const User = model<UserInterface>('User', userSchema);

export default User;
