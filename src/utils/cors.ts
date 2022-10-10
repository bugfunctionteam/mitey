import Cors, { CorsOptions } from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

export const cors = async (req: NextApiRequest, res: NextApiResponse, options?: CorsOptions) => {
  const corsInit = Cors(options);
  await corsInit(req, res, (err) => {
    if (err) {
      console.log('ERROR, ', err);
    }
  });
};
