import { Server } from '../server/server';

export const runExpressServer = () => {
  const server = new Server();
  server.start();
};

runExpressServer();
