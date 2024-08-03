import express, { Express } from 'express';

export class Server {
  private app: Express;

  constructor() {
    this.app = express();
  }

  private setupServerRoutes() {
    this.app.get('/', (req, res) => {
      res.send('hello there!');
    });
  }

  public start() {
    this.app.listen(3000, () => {
      console.log('server: server running at port 3000');
    });
  }
}
