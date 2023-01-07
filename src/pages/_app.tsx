import { SessionProvider } from 'next-auth/react';
import type { AppContext, AppProps } from 'next/app';

import { GlobalStyle } from 'src/styles/GlobalStyle';
import { ServerResponse } from 'http';
import { Session } from 'next-auth';
import App from 'next/app';

export type ServerResponseWithLocals = ServerResponse & { locals?: {[x: string]: unknown} }

export function reportWebVitals(metric: unknown) {
  console.log(metric);
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session | null | undefined }>) {
  return (
    <>
      <SessionProvider session={session}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

// // Only uncomment this method if you have blocking data requirements for
// // every single page in your application. This disables the ability to
// // perform automatic static optimization, causing every page in your app to
// // be server-side rendered.
// //
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // keep track of route, used for sending to Datadog APM
//   const res: ServerResponseWithLocals | undefined = appContext.ctx.res;
//   if (res?.locals) {
//     res.locals.route = appContext.ctx.pathname;
//   }

//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default MyApp;
