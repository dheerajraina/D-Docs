import * as express from 'express';
import {Request, Response} from 'express';
import MongoConfig from './modules/storage/config/mongo.config';
import {Route} from './utils/route.interface';
import DocumentOperationRoutes from './modules/document_operations/routes/document_operations.routes';

class App {
  private app: express.Application;
  private port: string | number;
  private mongoConfig = new MongoConfig();

  constructor(routes: Route[]) {
    this.app = express();
    this.app.use(express.json());
    this.port = process.env.PORT || 3000;
    this.initializeRoutes(routes);
    this.connectToDatabase();
    this.app.listen(this.port, () => {
      console.log(`Express Server Listening At Port ${this.port}`);
    });
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello World!!');
    });
  }

  connectToDatabase() {
    this.mongoConfig.mongoConnect();
  }
  private initializeRoutes(routes: Route[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }
}

new App([new DocumentOperationRoutes()]);
