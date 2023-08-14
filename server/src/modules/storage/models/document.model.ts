import * as mongoose from 'mongoose';
import {DocumentInterface} from '../interfaces/document.interface';
const Schema = mongoose.Schema;

const documentSchema = new mongoose.Schema(
  {
    created_by: {type: Schema.Types.ObjectId, ref: 'User'},
    name: {type: Schema.Types.String, default: 'Untitled Document'},
    content: {type: Schema.Types.String, default: ''},
  },
  {timestamps: true}
);

const documentModel = mongoose.model<DocumentInterface & mongoose.Document>(
  'Document',
  documentSchema
);

export default documentModel;
