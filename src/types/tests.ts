import { DefaultBodyType, PathParams, ResponseResolver, RestContext, RestRequest } from 'msw';
import { MockRestConfig } from '~/api/__test__/backend';

export type DefaultReq = DefaultBodyType;
export type DefaultRes = unknown;
export type DefaultParams = PathParams;

export type RestResolver<
  Req = DefaultReq,
  Res = DefaultRes,
  Params extends DefaultParams = DefaultParams,
> = ResponseResolver<RestRequest<Req, Params>, RestContext, Res>;

export type MockRestResolver<
  Req = DefaultReq,
  Res = DefaultRes,
  Params extends DefaultParams = DefaultParams,
> = jest.Mock<
  ReturnType<RestResolver<Req, Res, Params>>,
  Parameters<RestResolver<Req, Res, Params>>
>;

export type Factory<T> = (props?: DeepPartial<T>) => T;

export interface APIMock<Req, Res, Params extends DefaultParams> extends MockRestConfig<Req, Res, Params> {
  factory: Factory<ArrayItemType<Res>>;
  handler: MockRestResolver<Req, Res, Params>;
  reset: () => void;
  mock: (data?: ArrayItemType<Res> | ArrayItemType<Res>[] | RestResolver<Req, Res, Params>) => void;
}
