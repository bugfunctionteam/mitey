import { rest } from 'msw';
import { GetTokenResponseData } from '~/api/Authenticate/handlers';
import { authenticateMockResponse } from '~/mocks/queryResponseMocks';

export const handlers = [
  rest.post<GetTokenResponseData>(
    '*/api/oauth2/authenticate',
    (req, res, ctx) => {
      return res(ctx.json(authenticateMockResponse));
    },
  ),
];
