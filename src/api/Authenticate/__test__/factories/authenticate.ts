import casual from 'casual';
import { Factory } from '~/types/tests';
import { ApiErrorResponse } from '~/utils/api';
import { ERROR_CODES } from '~/utils/errors';

export const authenticateFactory: Factory<object | ApiErrorResponse> = (obj) => {
  if (obj && 'error' in obj) {
    return {
      error: ERROR_CODES.INVALID_CLIENT,
      error_description: 'Invalid Client',
      ...obj,
    };
  }
  return {
    expires_in: 7200,
    access_token: casual.string,
    token_type: 'bearer',
    refresh_token: casual.string,
    scope: 'users.admin internal.app',
    jti: '09f2cr3f-26e7-4346-9037-34f5531af8d4',
    ...obj,
  };
};
