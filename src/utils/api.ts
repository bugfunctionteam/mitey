import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { ERROR_CODES } from '~/utils/errors';
import { csrf } from '~/utils/csrf';
import { cors } from '~/utils/cors';


export interface HatchMethodHandlers {
  GET?: NextApiHandler;
  POST?: NextApiHandler;
  PUT?: NextApiHandler;
  DELETE?: NextApiHandler;
}

export interface HandlerOptions {
  middlewares?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
  csrf?: boolean
  cors?: boolean
}

export interface ApiErrorObj {
  code?: ERROR_CODES;
  description: unknown;
  noRedirect?: boolean;
}

export interface ApiErrorResponse {
  error?: ERROR_CODES;
  error_description: string;
}

/**
 * @deprecated 
 * FIXME: Use separation of concerns for error handling.
*/
export interface ApiError {
  error: ERROR_CODES;
  error_description: unknown;
}

export const validateRequired = <ParamType = Record<string | number, unknown>>(
  response: NextApiResponse,
  params: Partial<ParamType>,
  toBeChecked: Array<string | number>,
) => {
  const missing = toBeChecked.reduce<Array<string | number>>((bank, val) => {
    if (!(val in params)) {
      return [...bank, val];
    }
    return bank;
  }, []);

  if (missing.length) {
    response
      .status(400)
      .send({
        error: `Missing/Invalid values for param(s): ${missing.join(', ')}`,
      });
    return;
  }
  return params;
};

export const toQueryParams = (params: Record<string | number, unknown>) => {
  const keys = Object.keys(params);
  if (keys.length) {
    return `?${keys
      .map((v) => (params[v] === undefined ? '' : `${v}=${params[v]}`))
      .filter((s) => s)
      .join('&')}`;
  }
  return '';
};

export const constructHandlers = (handlers: HatchMethodHandlers, options?: HandlerOptions) => {
  const createdHandlers = async (req: NextApiRequest, res: NextApiResponse<unknown>) => {
    const method = req.method as keyof HatchMethodHandlers | undefined;
    const handler = handlers[method as keyof HatchMethodHandlers];
    if (handler) {
      if (options?.cors) {        
        await cors(req, res);
      }
      if (options?.middlewares) {
        await options.middlewares(req, res);
      }
      return await handler(req, res);
    } else {
      res.statusCode = 404;
      return res.send(`Method ${req.method} not enabled.`);
    }
  };
  return options?.csrf ? csrf(createdHandlers) : createdHandlers;
};
