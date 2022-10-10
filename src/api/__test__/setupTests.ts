import { backend } from '~/api/__test__/backend';

beforeAll(() => backend.listen({
  onUnhandledRequest: 'warn',
}));
afterEach(() => backend.resetHandlers());
afterAll(() => backend.close());
