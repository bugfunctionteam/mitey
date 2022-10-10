import { setupServer } from 'msw/node'; // eslint-disable-line
import { DefaultBodyType, rest } from 'msw';
import { DefaultParams, DefaultReq, DefaultRes, Factory, MockRestResolver, RestResolver } from '~/types/tests';

/** Mock Service Worker to catch and mock microservice responses. */
export const backend = setupServer(...[]);

// #region Types
type MswRestMethod = keyof typeof rest;
type MswRestParameters = Parameters<typeof rest.get>;
export interface MockRestConfigForFetch<Req extends DefaultBodyType = DefaultReq, Res extends DefaultBodyType = DefaultRes, Params extends DefaultParams = DefaultParams> {
  method: MswRestMethod;
  path: MswRestParameters[0];
  forFetch: (override?: DeepPartial<OverrideWithStatus<Res>>) => MockRestConfig<Req, Res, Params>
}

export type MockRestConfig<Req extends DefaultBodyType = DefaultReq, Res extends DefaultBodyType = DefaultRes, Params extends DefaultParams = DefaultParams> = 
  Omit<MockRestConfigForFetch<Req, Res, Params>, 'forFetch'> & 
  { handler: RestResolver<Req, Res, Params> | MockRestResolver<Req, Res, Params>; }

export interface MockRestConfig2<Req extends DefaultBodyType = DefaultReq, Res extends DefaultBodyType = DefaultRes, Params extends DefaultParams = DefaultParams> {
  method: MswRestMethod;
  path: MswRestParameters[0];
  factory: Factory<unknown>;
  handlerCreator: (mock?: Partial<unknown>) => RestResolver<Req, Res, Params> | MockRestResolver<Req, Res, Params>;
}

interface MockBackend {
  rest<Req extends DefaultBodyType = DefaultReq, Res extends DefaultBodyType = DefaultRes, Params extends DefaultParams = DefaultParams>(
    config: MockRestConfig<Req, Res, Params>,
  ): MockBackend;
  fetch<Req extends DefaultBodyType = DefaultReq, Res extends DefaultBodyType = DefaultRes, Params extends DefaultParams = DefaultParams>(
    config: MockRestConfig<Req, Res, Params>,
  ): MockBackend;

  get<Req extends DefaultBodyType = DefaultReq, Res extends DefaultBodyType = DefaultRes, Params extends DefaultParams = DefaultParams>(
    path: MockRestConfig['path'],
    handler: MockRestConfig<Req, Res, Params>['handler'],
  ): MockBackend;
  post<Req extends DefaultBodyType = DefaultReq, Res extends DefaultBodyType = DefaultRes, Params extends DefaultParams = DefaultParams>(
    path: MockRestConfig['path'],
    handler: MockRestConfig<Req, Res, Params>['handler'],
  ): MockBackend;
  put<Req extends DefaultBodyType = DefaultReq, Res extends DefaultBodyType = DefaultRes, Params extends DefaultParams = DefaultParams>(
    path: MockRestConfig['path'],
    handler: MockRestConfig<Req, Res, Params>['handler'],
  ): MockBackend;
  delete<Req extends DefaultBodyType = DefaultReq, Res extends DefaultBodyType = DefaultRes, Params extends DefaultParams = DefaultParams>(
    path: MockRestConfig['path'],
    handler: MockRestConfig<Req, Res, Params>['handler'],
  ): MockBackend;
  patch<Req extends DefaultBodyType = DefaultReq, Res extends DefaultBodyType = DefaultRes, Params extends DefaultParams = DefaultParams>(
    path: MockRestConfig['path'],
    handler: MockRestConfig<Req, Res, Params>['handler'],
  ): MockBackend;
}
// #endregion Types

/**
 * Helper object to mock backend responses for tests and development.
 * ```
 * mockBackend
 *   .get('/users/:id', (req, res, ctx) => res(ctx.json(user)))
 *   .put('/users/:id', (req, res, ctx) => res(ctx.json(user)))
 *   .post('/users/:id', (req, res, ctx) => res(ctx.json(user)))
 *   .delete('/users/:id', (req, res, ctx) => res(ctx.status(200)))
 * ```
 *
 * Otherwise, use the custom way.
 * ```
 * backend.use(
 *   rest.get(`${getBaseUrl()}/path`, ...),
 *   rest.put(...),
 *   rest.post(...),
 *   rest.delete(...),
 * )
 * ```
 */
export const mockBackend: MockBackend = {
  /** Custom */
  rest({ method, path, handler }) {
    backend.use(rest[method](path, handler));
    return this;
  },

  /** Mock by conventions. */
  fetch({ method, path, handler }) {
    const url = `${path}`;
    return this.rest({ method, path: url, handler });
  },

  get(path, handler) {
    return this.fetch({
      method: 'get',
      path,
      handler,
    });
  },

  post(path, handler) {
    return this.fetch({
      method: 'post',
      path,
      handler,
    });
  },

  put(path, handler) {
    return this.fetch({
      method: 'put',
      path,
      handler,
    });
  },

  delete(path, handler) {
    return this.fetch({
      method: 'delete',
      path,
      handler,
    });
  },

  patch(path, handler) {
    return this.fetch({
      method: 'patch',
      path,
      handler,
    });
  },
};
