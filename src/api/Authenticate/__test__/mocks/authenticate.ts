import { MockRestConfigForFetch } from '~/api/__test__/backend';
import * as Kong from '~/types/swagger/kong';
import { authenticateFactory } from '~/api/Authenticate/__test__/factories/authenticate';
import { ApiErrorResponse } from '~/utils/api';

export const getTokenMock: MockRestConfigForFetch<
Kong.Idp.GetAuthenticationUsingPost.RequestBody,
Kong.Idp.GetAuthenticationUsingPost.ResponseBody | ApiErrorResponse,
Kong.Idp.GetAuthenticationUsingPost.RequestParams
> = {
  method: 'post',
  path: `${process.env.KONG_HTTPS_API}/idp/oauth/token`,
  forFetch(override?: OverrideWithStatus<Partial<Kong.Authenticate> | Partial<ApiErrorResponse>>) {
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
Kong.Idp.GetTokenInfoUsingGet.RequestBody,
Kong.Idp.GetTokenInfoUsingGet.ResponseBody,
Kong.Idp.GetTokenInfoUsingGet.RequestParams
> = {
  method: 'get',
  path: `${process.env.KONG_HTTPS_API}/idp/oauth2/token/introspect`,
  forFetch(override?: OverrideWithStatus<Partial<Kong.TokenInfo>>) {
    return {
      method: this.method,
      path: this.path,
      handler: jest.fn((_, res, ctx) => res(
        ctx.status(override?.statusCode || 200), ctx.json(({ message: 'OK', ...override })),
      )),
    };
  },
};
