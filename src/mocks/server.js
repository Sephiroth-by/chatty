import { authHandlers } from '@mocks/handlers/auth';
import { notificationHandlers } from '@mocks/handlers/notification';
import { userHandlers } from '@mocks/handlers//user';
import { setupServer } from 'msw/node';
import { giphyHandlers } from './handlers/giphy';
import { postsHandlers } from './handlers/post';

// Setup requests interception using the given handlers
export const server = setupServer(
  ...authHandlers,
  ...notificationHandlers,
  ...userHandlers,
  ...giphyHandlers,
  ...postsHandlers
);
