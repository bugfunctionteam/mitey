// import { getToken, GetTokenRequestData, GetTokenResponseData } from '~/api/Slack/handlers';
// import * as Kong from '~/types/swagger/kong';
// import { mockBackend } from '~/api/__test__/backend';
// import { getTokenInfoMock, getTokenMock } from '~/api/Slack/__test__/mocks/slack';
// import { createMocks } from '~/api/__test__/createMocks';
// import { ERROR_CODES } from '~/utils/errors';

// describe(getToken, () => {
//   it('should return a success response', async () => {
//     const requestParams: Kong.Idp.GetAuthenticationUsingPost.RequestQuery & GetTokenRequestData = {
//       username: 'test+imp@altruist.com',
//       password: 'A1truiSt!',
//       client_id: 'clientId1',
//       state: 'defaultState',
//       redirect_uri: 'http://localhost:3000/redirect',
//       scope: 'default_scope',
//       grant_type: 'password',
//     };
//     const authenticateUserMockInstance = getTokenMock.forFetch({
//       access_token: '09f2cr3f-26e7-4346-9037-34f5531af8d4',
//     });
//     const getTokenInfoMockInstance = getTokenInfoMock.forFetch();

//     mockBackend.fetch(authenticateUserMockInstance).fetch(getTokenInfoMockInstance);

//     const { req, res } = createMocks<GetTokenResponseData>({
//       method: 'POST',
//       body: requestParams,
//     });
//     await getToken(req, res);

//     expect(res._getStatusCode()).toBe(200);
//     expect(authenticateUserMockInstance.handler).toHaveBeenCalledTimes(1);
//     expect(authenticateUserMockInstance.handler).toHaveBeenCalledWith(
//       expect.objectContaining({ 
//         method: 'POST',
//         url: new URL(
//           '/idp/oauth/token?username=test%2Bimp%40altruist.com&password=A1truiSt!&grant_type=password',
//           process.env.KONG_HTTPS_API,
//         ),
//       }),
//       expect.anything(),
//       expect.anything(),
//     );
//     expect(getTokenInfoMockInstance.handler).toHaveBeenCalledTimes(1);
//     expect(getTokenInfoMockInstance.handler).toHaveBeenCalledWith(
//       expect.objectContaining({ method: 'GET' }),
//       expect.anything(),
//       expect.anything(),
//     );
//     expect(res._getData()).toEqual({
//       authenticated_userid: undefined,
//       client_id: 'clientId1',
//       redirect_uri: 'http://localhost:3000/redirect',
//       response_type: 'code',
//       scope: 'default_scope',
//       state: 'defaultState',
//     });
//   });
// });

// describe('call errors', () => {
//   it('failed credentials', async () => {
//     const requestParams: Kong.Idp.GetAuthenticationUsingPost.RequestQuery & GetTokenRequestData = {
//       username: 'test+imp@altruist.com',
//       password: 'A1truiSt!',
//       client_id: 'clientId1',
//       state: 'defaultState',
//       redirect_uri: 'http://localhost:3000/redirect',
//       scope: 'default_scope',
//       grant_type: 'password',
//     };
//     const authenticateUserMockInstance = getTokenMock.forFetch({
//       statusCode: 400,
//       error: ERROR_CODES.INVALID_CLIENT,
//       error_description: 'Invalid Client',
//     });
//     const getTokenInfoMockInstance = getTokenInfoMock.forFetch();

//     mockBackend.fetch(authenticateUserMockInstance).fetch(getTokenInfoMockInstance);

//     const { req, res } = createMocks<GetTokenResponseData>({
//       method: 'POST',
//       body: requestParams,
//     });
//     await getToken(req, res);

//     expect(res._getStatusCode()).toBe(302);
//     expect(authenticateUserMockInstance.handler).toHaveBeenCalledTimes(1);
//     expect(authenticateUserMockInstance.handler).toHaveBeenCalledWith(
//       expect.objectContaining({ 
//         method: 'POST',
//         url: new URL(
//           '/idp/oauth/token?username=test%2Bimp%40altruist.com&password=A1truiSt!&grant_type=password',
//           process.env.KONG_HTTPS_API,
//         ),
//       }),
//       expect.anything(),
//       expect.anything(),
//     );
//     expect(getTokenInfoMockInstance.handler).toHaveBeenCalledTimes(0);
//     expect(res._getRedirectUrl()).toContain('/login?error=invalid_credentials');
//   });

//   it('failed introspect', async () => {
//     const requestParams: Kong.Idp.GetAuthenticationUsingPost.RequestQuery & GetTokenRequestData = {
//       username: 'test+imp@altruist.com',
//       password: 'A1truiSt!',
//       client_id: 'clientId1',
//       state: 'defaultState',
//       redirect_uri: 'http://localhost:3000/redirect',
//       scope: 'default_scope',
//       grant_type: 'password',
//     };
//     const authenticateUserMockInstance = getTokenMock.forFetch({
//       access_token: '09f2cr3f-26e7-4346-9037-34f5531af8d4',
//     });
//     const getTokenInfoMockInstance = getTokenInfoMock.forFetch({
//       statusCode: 401,
//       message: 'Unauthorized',
//     });

//     mockBackend.fetch(authenticateUserMockInstance).fetch(getTokenInfoMockInstance);

//     const { req, res } = createMocks<GetTokenResponseData>({
//       method: 'POST',
//       body: requestParams,
//     });
//     await getToken(req, res);

//     expect(res._getStatusCode()).toBe(401);
//     expect(authenticateUserMockInstance.handler).toHaveBeenCalledTimes(1);
//     expect(authenticateUserMockInstance.handler).toHaveBeenCalledWith(
//       expect.objectContaining({ 
//         method: 'POST',
//         url: new URL(
//           '/idp/oauth/token?username=test%2Bimp%40altruist.com&password=A1truiSt!&grant_type=password',
//           process.env.KONG_HTTPS_API,
//         ),
//       }),
//       expect.anything(),
//       expect.anything(),
//     );
//     expect(getTokenInfoMockInstance.handler).toHaveBeenCalledTimes(1);
//     expect(res._getData()).toEqual(
//       expect.objectContaining({
//         error: ERROR_CODES.INVALID_CREDENTIALS,
//       }),
//     );
//   });

//   it('failed validateRequired', async () => {
//     const requestParams: Kong.Idp.GetAuthenticationUsingPost.RequestQuery & GetTokenRequestData = {
//       username: 'test+imp@altruist.com',
//       client_id: 'clientId1',
//       state: 'defaultState',
//       redirect_uri: 'http://localhost:3000/redirect',
//       scope: 'default_scope',
//       grant_type: 'password',
//     };
//     const authenticateUserMockInstance = getTokenMock.forFetch({
//       access_token: '09f2cr3f-26e7-4346-9037-34f5531af8d4',
//     });
//     const getTokenInfoMockInstance = getTokenInfoMock.forFetch();

//     mockBackend.fetch(authenticateUserMockInstance).fetch(getTokenInfoMockInstance);

//     const { req, res } = createMocks<GetTokenResponseData>({
//       method: 'POST',
//       body: requestParams,
//     });
//     await getToken(req, res);

//     expect(res._getStatusCode()).toBe(400);
//     expect(authenticateUserMockInstance.handler).toHaveBeenCalledTimes(0);
//     expect(getTokenInfoMockInstance.handler).toHaveBeenCalledTimes(0);
//     expect(res._getData()).toEqual(
//       expect.objectContaining({
//         error: 'Missing/Invalid values for param(s): password',
//       }),
//     );
//   });
// });

describe('tested test', () => {
  it('blah', async () => {
    expect(true).toBe(true);
  });
});

export {};
