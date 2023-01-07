import { ThemeProvider } from '~/themes/ThemeProvider';
import { defaultTheme } from '~/themes';
import { ReactNode } from 'react';

import { RouterContext } from 'next/dist/shared/lib/router-context';
import { NextRouter } from 'next/router';
import { server } from './workerSetup';

export const withTheme = (ui: ReactNode) => (
  <ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>
);

export function createMockRouter(router?: Partial<NextRouter>): NextRouter {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    back: jest.fn(),
    beforePopState: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en',
    domainLocales: [],
    isPreview: false,
    ...router,
  };
}

export const withRouter = (ui: ReactNode, router: NextRouter) => {
  return <RouterContext.Provider value={router}>{ui}</RouterContext.Provider>;
};

export { server };
