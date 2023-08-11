import * as express from 'express';
import {Request, Response} from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!');
});

app.listen(port, () => {
  return console.log(`Express Server Listening At Port ${port}`);
});
