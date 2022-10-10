type ArrayItemType<T> = T extends ArrayLike<infer U> ? U : T;

/** Caution: May slow down TypeScript significantly. */
type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

declare module 'http' {
  interface IncomingMessage {
      path: string;
  }
}
type ValueOf<T> = T[keyof T];

type OverrideWithStatus<T> = T & { statusCode?: number }
