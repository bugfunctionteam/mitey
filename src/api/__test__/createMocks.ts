import { NextApiRequest, NextApiResponse } from 'next';
import { ApiError } from '~/utils/api';
import { createMocks as nmhCreateMocks } from 'node-mocks-http';

type CreateMocksParams = Parameters<typeof nmhCreateMocks>

export const createMocks = <T>(...args: CreateMocksParams) => (
  nmhCreateMocks<NextApiRequest, NextApiResponse<T | ApiError>>(...args)
);