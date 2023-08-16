import {Router} from 'express';
import DocumentOperationsController from '../controllers/document_operations.controller';
import {Route} from '../../../utils/route.interface';

class DocumentOperationRoutes implements Route {
  public path = '/doc-op';
  public router = Router();
  public documentOperationsController = new DocumentOperationsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}/new-doc`,
      this.documentOperationsController.createNewDocument
    );
  }
}

export default DocumentOperationRoutes;
