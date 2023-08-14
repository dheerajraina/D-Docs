import * as dotenv from 'dotenv';
import * as path from 'path';
import * as mongoose from 'mongoose';
const dotEnvPath = path.resolve('/home/dheeraj/Documents/GitHub/D-Docs/.env');
dotenv.config({path: dotEnvPath});

class MongoConfig {
  private MONGO_USER = process.env.MONGO_USER;
  private MONGO_PASSWORD = process.env.MONGO_PASSWORD;
  private MONGO_PATH = process.env.MONGO_PATH;
  private MONGO_CONNECTION_VERB = process.env.MONGO_CONNECTION_VERB;

  public async mongoConnect() {
    const connectionUrl: string =
      this.MONGO_CONNECTION_VERB +
      '://' +
      this.MONGO_USER +
      ':' +
      this.MONGO_PASSWORD +
      this.MONGO_PATH;
    mongoose.set('strictQuery', false);
    mongoose.connect(connectionUrl);
    console.log('MONGO CONNECTED');
  }
}

export default MongoConfig;
