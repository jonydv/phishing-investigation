import express from 'express';
import cors from 'cors';
import { dbConnection } from '../database/config';
import userRoutes from '../routes/users';

export default class Server {
  public app: express.Application;
  public port: number;
  public paths = {
    user: '/api/users',
  };
  constructor() {
    this.app = express();
    this.port = Number(process.env.PORT);

    this.connectDb();

    this.middlewares();

    this.routes();
  }

  async connectDb() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // body parser
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.user, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running in port:  ${this.port}`);
    });
  }
}
