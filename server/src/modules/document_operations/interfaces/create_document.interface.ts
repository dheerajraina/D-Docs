import mongoose from 'mongoose';

export interface CreateDocumentInterface {
  _id?: mongoose.Types.ObjectId;
  created_by: mongoose.Types.ObjectId | string;
}
