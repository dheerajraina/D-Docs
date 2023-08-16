import {Request, Response} from 'express';
import CreateDocumentService from '../services/create_document.service';
import mongoose from 'mongoose';

class DocumentOperationsController {
  public async createNewDocument(req: Request, res: Response) {
    const createDocumentService = new CreateDocumentService();

    try {
      const userId: string = req.body.userId;

      const createdDoc = await createDocumentService.createNewDocument({
        created_by: new mongoose.Types.ObjectId(userId),
      });
      return res.status(200).json({
        document: createdDoc,
        message: 'New Document Created',
        status: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: `${error}`,
        status: false,
      });
    }
  }
}

export default DocumentOperationsController;
