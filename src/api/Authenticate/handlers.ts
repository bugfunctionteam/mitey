import { NextApiRequest, NextApiResponse } from 'next';
import { ApiError, constructHandlers, validateRequired } from '~/utils/api';
import { ERROR_CODES, errorMapper } from '~/utils/errors';
import axios from 'axios';

export interface GetTokenRequestData {
  client_id?: string;
  scope?: string;
  redirect_uri?: string;
  state?: string;
}

export interface GetTokenResponseData extends GetTokenRequestData {
  response_type: string;
  authenticated_userid?: string;
}

export const getToken = async (
  req: NextApiRequest,
  res: NextApiResponse<GetTokenResponseData | ApiError>,
) => {
  const body = validateRequired<
  object & GetTokenRequestData
  >(res, req.body, [
    'username',
    'password',
    'client_id',
    'state',
    'redirect_uri',
    'scope',
    'grant_type',
  ]);
  if (!body) { return; }

  // TODO: remove once we have kong on dev1
  // TOUSE: if local and recieving self-signed certificate error
  // const agent = new https.Agent({
  //   rejectUnauthorized: false,
  // });

  try {
    // const resp = await Api.idp.getAuthenticationUsingPost(
    //   { username, password, grant_type },
    //   {
    //     headers: {
    //       Authorization: `Basic ${Buffer.from(
    //         `${process.env.HATCH_CLIENT_ID}:${process.env.HATCH_CLIENT_SECRET}`,
    //       ).toString('base64')}`,
    //     },
    //     // httpsAgent: agent,
    //   },
    // );

    // const accessToken = resp.data.access_token;
    // let tokenInfo: Kong.TokenInfo;

    // try {
    //   const tokenResp = await Api.idp.getTokenInfoUsingGet({
    //     headers: { Authorization: `Bearer ${accessToken}` },
    //     // httpsAgent: agent,
    //   });
    //   tokenInfo = tokenResp.data;
    // } catch (err) {
    //   return errorMapper(res, {
    //     code: ERROR_CODES.INVALID_CREDENTIALS,
    //     description: String(err),
    //     noRedirect: true,
    //   });
    // }

    return res.send({
      client_id: body.client_id || '',
      response_type: 'code',
      scope: body.scope || '',
      redirect_uri: body.redirect_uri,
      state: body.state,
      authenticated_userid: '',
    });
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return errorMapper(res, {
        code: ERROR_CODES.INVALID_CREDENTIALS,
        description: 'Invlid redentials',
      });
    } else {
      return errorMapper(res, {
        description: err,
        noRedirect: true,
      });
    }
  }
};

export const handlers = constructHandlers({
  POST: getToken,
}, {
  csrf: true,
  cors: true,
});
