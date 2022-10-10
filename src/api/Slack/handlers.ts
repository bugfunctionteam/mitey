import { NextApiRequest, NextApiResponse } from 'next';
import { constructHandlers } from '~/utils/api';

export const getToken = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.body.challenge) {
    return res.send(req.body.challenge);
  }
};

export const handlers = constructHandlers({
  POST: getToken,
});
