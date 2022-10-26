import { MockRestConfigForFetch } from '~/api/__test__/backend';
import { authenticateFactory } from '~/api/Authenticate/__test__/factories/authenticate';
import { ApiErrorResponse } from '~/utils/api';

export const getTokenMock: MockRestConfigForFetch<
object,
object | ApiErrorResponse,
{ [x: string]: string }
> = {
  method: 'post',
  path: `${process.env.KONG_HTTPS_API}/idp/oauth/token`,
  forFetch(override?: OverrideWithStatus<Partial<object> | Partial<ApiErrorResponse>>) {
    return {
      method: this.method,
      path: this.path,
      handler: jest.fn((_, res, ctx) => res(
        ctx.status(override?.statusCode || 200), ctx.json(authenticateFactory(override)),
      )),
    };
  },
};

export const getTokenInfoMock: MockRestConfigForFetch<
object,
object,
{ [x: string]: string }
> = {
  method: 'get',
  path: `${process.env.KONG_HTTPS_API}/idp/oauth2/token/introspect`,
  forFetch(override?: OverrideWithStatus<Partial<object>>) {
    return {
      method: this.method,
      path: this.path,
      handler: jest.fn((_, res, ctx) => res(
        ctx.status(override?.statusCode || 200), ctx.json(({ message: 'OK', ...override })),
      )),
    };
  },
};
