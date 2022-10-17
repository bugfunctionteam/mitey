import { NextApiRequest, NextApiResponse } from 'next';
import { constructHandlers } from '~/utils/api';

export const slackEvent = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.body.challenge) {
    console.log(req.body);
    return res.send(req.body.challenge);
  }
};

export const handlers = constructHandlers({
  POST: slackEvent,
});
