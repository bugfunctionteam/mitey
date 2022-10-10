import { NextApiRequest, NextApiResponse } from 'next';

interface HealthStatus {
  health: 'OK';
}

export default function handler(_: NextApiRequest, res: NextApiResponse<HealthStatus>) {
  res.status(200).json({ health: 'OK' });
}
