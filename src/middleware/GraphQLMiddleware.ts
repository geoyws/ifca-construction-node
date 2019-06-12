import Main from '@IFCANodeModules/main';
import { IncomingMessage, ServerResponse } from 'http';

export default class GraphQLMiddleware {
  constructor(main: Main, request: IncomingMessage, response: ServerResponse) {}
}
