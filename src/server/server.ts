import express, { Express } from 'express';

export class Server {
  private app: Express;

  constructor() {
    this.app = express();
  }

  public start() {
    this.app.get('/test', (req, res) => {
      res.send('hello there!');
    });

    this.app.listen(3000, () => {
      console.log('server: server running at port 3000');
    });
  }
}
