import { NextApiResponse } from 'next';
import { ApiError, ApiErrorObj, toQueryParams } from '~/utils/api';

export enum ERROR_CODES {
  UNKNOWN_ERROR = 'unknown_error',
  INVALID_CLIENT = 'invalid_client',
  INVALID_CREDENTIALS = 'invalid_credentials',
}

export const errorMapper = (res: NextApiResponse<ApiError>, err: ApiErrorObj) => {
  if (err.noRedirect) {
    return res.status(401).send({
      error: err.code || ERROR_CODES.UNKNOWN_ERROR,
      error_description: err.description,
    });
  } else {
    return res.redirect(
      `/login${toQueryParams({
        error: err.code || ERROR_CODES.UNKNOWN_ERROR,
        error_description: String(err.description),
      })}`,
    );
  }
};