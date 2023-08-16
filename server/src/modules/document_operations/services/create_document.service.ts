import documentModel from '../../storage/models/document.model';
import {CreateDocumentInterface} from '../interfaces/create_document.interface';
import mongoose from 'mongoose';
import {DocumentInterface} from '../../storage/interfaces/document.interface';

class CreateDocumentService {
  private document = documentModel;
  public async createNewDocument(
    createDocument: CreateDocumentInterface
  ): Promise<DocumentInterface> {
    createDocument._id = new mongoose.Types.ObjectId();
    const doc = await this.document.create(createDocument);
    return doc;
  }
}

export default CreateDocumentService;
