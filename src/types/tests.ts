import { DefaultBodyType, PathParams, ResponseResolver, RestContext, RestRequest } from 'msw';
import { MockRestConfig } from '~/api/__test__/backend';

export type DefaultReq = DefaultBodyType;
export type DefaultRes = DefaultBodyType;
export type DefaultParams = PathParams;

export type RestResolver<
  Req extends DefaultBodyType = DefaultReq,
  Res extends DefaultBodyType = DefaultRes,
  Params extends DefaultParams = DefaultParams,
> = ResponseResolver<RestRequest<Req, Params>, RestContext, Res>;

export type MockRestResolver<
  Req extends DefaultBodyType = DefaultReq,
  Res extends DefaultBodyType = DefaultRes,
  Params extends DefaultParams = DefaultParams,
> = jest.Mock<
  ReturnType<RestResolver<Req, Res, Params>>,
  Parameters<RestResolver<Req, Res, Params>>
>;

export type Factory<T> = (props?: DeepPartial<T>) => T;

export interface APIMock<Req extends DefaultBodyType, Res extends DefaultBodyType, Params extends DefaultParams> extends MockRestConfig<Req, Res, Params> {
  factory: Factory<ArrayItemType<Res>>;
  handler: MockRestResolver<Req, Res, Params>;
  reset: () => void;
  mock: (data?: ArrayItemType<Res> | ArrayItemType<Res>[] | RestResolver<Req, Res, Params>) => void;
}
