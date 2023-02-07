import { rest } from 'msw';
const BASE_URL = `${process.env.REACT_APP_BASE_ENDPOINT}/socket.io`;

export const socketIOMock = rest.get(`${BASE_URL}`, (req, res, ctx) => {
  const result = { message: 'Websocket connected successfully' };
  return res(ctx.json(result));
});

export const socketHandlers = [socketIOMock];
