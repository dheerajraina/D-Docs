import * as mongoose from 'mongoose';
import {UserInterface} from '../interfaces/user.interface';
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    _id: {type: Schema.Types.ObjectId},
    name: {type: Schema.Types.String, default: ''},
    username: {type: Schema.Types.String},
    password: {type: Schema.Types.String},
  },
  {timestamps: true}
);

const userModel = mongoose.model<UserInterface & mongoose.Document>(
  'User',
  userSchema
);

export default userModel;
