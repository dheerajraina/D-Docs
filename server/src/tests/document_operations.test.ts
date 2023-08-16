import mongoose from 'mongoose';
import CreateDocumentService from '../modules/document_operations/services/create_document.service';
import MongoConfig from '../modules/storage/config/mongo.config';
const mongoConfig = new MongoConfig();

describe('Document Operations', () => {
  const createDocumentService = new CreateDocumentService();
  it('create new document', async () => {
    await mongoConfig.mongoConnect();
    const result = await createDocumentService.createNewDocument({
      created_by: new mongoose.Types.ObjectId('64dc651531c81edc4ae8ce45'),
    });
    expect(result).resolves;
  }, 20000);
});
