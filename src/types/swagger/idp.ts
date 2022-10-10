/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AddDeviceRequest {
  deviceType?: string;
  fingerprintHash?: string;
  ip?: string;
  location?: string;
}

export interface DFAUserDto {
  email?: string;

  /** @format uuid */
  userId?: string;
}

export interface EmailPost {
  email?: string;
}

export interface GetOnboardStatusResponse {
  onboardStatus: string;
}

export interface IarName {
  firstName?: string;
  lastName?: string;
}

export interface ImpersonateAuditTrailResponse {
  data?: ImpersonationAuditTrailDto[];
  pagination?: Pagination;
}

export interface ImpersonationAuditTrailDto {
  /** @format date-time */
  created?: string;
  externalUser?: string;
  externalUserArchetype?: string;

  /** @format uuid */
  id?: string;
  internalUser?: string;
  internalUserIp?: string;

  /** @format int64 */
  timeLimitMillisecond?: number;
}

export interface InviteCodeCreationRequest {
  /** @format int32 */
  numOfNewCodes?: number;
}

export interface InviteEmailUpdate {
  email?: string;
  firstname?: string;
  lastname?: string;
}

export interface InviteRequest {
  /**
   * advisorId
   * @format uuid
   * @example ba536480-7546-485c-b754-8d50d0ec2d46
   */
  advisorId?: string;

  /**
   * email
   * @example hello@altruist.com
   */
  email: string;

  /**
   * firstName
   * @example Karl
   */
  firstName?: string;

  /**
   * invitedFor
   * @example Either BROKERAGE or PAS
   */
  invitedFor: string;

  /**
   * lastName
   * @example Marx
   */
  lastName?: string;

  /**
   * personalNote
   * @example Just a note that advisor may put about the client
   */
  personalNote?: string;

  /**
   * role
   * @example Either CLIENT or ADVISOR
   */
  role: string;

  /**
   * userId
   * @format uuid
   * @example ba536480-7546-485c-b754-8d50d0ec2d46
   */
  userId?: string;

  /**
   * checkForDuplicateEmails
   * @example true
   */
  validationEmailDuplicated?: boolean;
}

export interface InviteResponse {
  code?: string;
}

export interface InviteStatusRequest {
  userIds?: string[];
}

export interface InvitedUser {
  /** @format date-time */
  created?: string;
  createdBy?: string;
  email?: string;

  /** @format date-time */
  expiration?: string;
  firstName?: string;
  inviteCode?: string;

  /** @format uuid */
  invitedBy?: string;
  invitedFor?: "PAS" | "BROKERAGE" | "UNKNOWN";

  /** @format uuid */
  inviteeId?: string;
  lastName?: string;
  onboardStatus?:
    | "INACTIVE"
    | "UNVERIFIED"
    | "UNREGISTERED"
    | "BROKERAGE_APPLYING"
    | "BROKERAGE_PENDING"
    | "BROKERAGE_REJECTED"
    | "BROKERAGE_ACCEPTED"
    | "PAYMENT_ADDED"
    | "UNKNOWN";

  /** @format uuid */
  organizationId?: string;
  personalNote?: string;

  /** @format uuid */
  recordId?: string;
  updatedBy?: string;
  userRole?: "CLIENT" | "ADVISOR" | "STAFF" | "ADMIN" | "UNKNOWN" | "OWNER";
  validatingEmailDuplicated?: boolean;
}

export interface InvitedUserSettingsDto {
  email?: string;
  expiration?: string;
  firstName?: string;
  invites?: InvitedUserSettingsDto[];
  lastName?: string;
  role?: "CLIENT" | "ADVISOR" | "STAFF" | "ADMIN" | "UNKNOWN" | "OWNER";
  status?: string;
  updated?: string;

  /** @format uuid */
  userId?: string;
}

export interface InvitedUserStatusResponse {
  expiredTimestamp?: string;
  status?: string;

  /** @format uuid */
  userId?: string;
}

export interface JwtDto {
  jwt?: string;
}

export interface LoginHistoryDto {
  archetype?: string;
  browser?: string;

  /** @format date-time */
  created?: string;
  deviceType?: string;
  email?: string;
  ip?: string;
  userAgent?: string;

  /** @format uuid */
  userId?: string;
}

export interface LoginHistoryListResponse {
  data?: LoginHistoryDto[];
  pagination?: Pagination;
}

export interface LoginName {
  createdBy?: string;

  /** @format uuid */
  id?: string;

  /** @format date-time */
  lastAccess?: string;

  /** @format uuid */
  loginId?: string;

  /** @format date-time */
  loginLockedEnd?: string;
  status?: "ACTIVE" | "INACTIVE" | "PENDING" | "EXPIRED" | "CLOSED";
  type?: string;
  updatedBy?: string;
  username?: string;
}

export interface OauthClient {
  /** @format int32 */
  accessTokenValidity?: number;
  clientId?: string;
  clientSecret?: string;

  /** @format date-time */
  created?: string;
  createdBy?: string;

  /** @format uuid */
  id?: string;
  name?: string;
  oauthScopes?: string;

  /** @format int32 */
  refreshTokenValidity?: number;

  /** @format date-time */
  updated?: string;
  updatedBy?: string;
}

export interface OauthClientPost {
  /** @format int32 */
  accessTokenValidity?: number;
  clientId?: string;
  clientSecret?: string;
  name?: string;
  oauthScopes?: string;

  /** @format int32 */
  refreshTokenValidity?: number;
}

export interface OrganizationDto {
  affiliatedOrEmployedFinra?: boolean;

  /** @format uuid */
  assetStoreId?: string;
  clearingPlatform?: "APEX" | "ALTRUIST_CLEARING";

  /** @format date-time */
  created?: string;
  createdBy?: string;
  disciplinaryDescription?: string;
  disciplinaryEvents?: boolean;
  iarNames?: IarName[];
  iardCrd?: string;

  /** @format uuid */
  id?: string;
  individualIardCrd?: string;
  individualRegisteredBy?: "SEC" | "STATE";
  name?: string;
  registeredBy?: "SEC" | "STATE";
  status?: string;

  /** @format int32 */
  teamsVersion?: number;

  /** @format date-time */
  updated?: string;
  updatedBy?: string;
}

export interface Pagination {
  /** @format int64 */
  totalElements?: number;
}

export interface PasswordPost {
  password?: string;
}

export interface PendingUsername {
  code?: string;
  nonce?: string;
  status?: "PENDING" | "CONFIRMED" | "CANCELLED" | "EXPIRED" | "UNKNOWN";

  /** @format uuid */
  userId?: string;
  username?: string;
}

export interface RegistrationRequest {
  contactId?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  registrationCode?: string;
  role?: string;
  sendVerificationEmail?: string;
  type?: string;
  username?: string;
}

/**
 * Request object to provide required details for resend invite function
 */
export interface ResendInviteRequest {
  /**
   * advisorId
   * @format uuid
   * @example ba536480-7546-485c-b754-8d50d0ec2d46
   */
  advisorId?: string;

  /** advisorName */
  advisorName?: string;

  /**
   * email
   * @example abc@altruist.com
   */
  email?: string;

  /**
   * firstName
   * @example Robert
   */
  firstName?: string;

  /**
   * invitedFor
   * @example Either 'BROKERAGE' or 'PAS'
   */
  invitedFor?: string;

  /**
   * lastName
   * @example Jones
   */
  lastName?: string;

  /**
   * role
   * @example ADVISOR
   */
  role?: string;

  /**
   * userId
   * @format uuid
   * @example 883ce1e4-d791-411f-83fd-11ec028a02af
   */
  userId: string;
}

/**
 * Request object to provide required details for resend invite function
 */
export interface ResendVerificationEmailRequest {
  /**
   * email
   * @example abc@altruist.com
   */
  email: string;
}

export interface ResetPassword {
  jwt?: string;
  password?: string;
}

export interface UpdateArchetypeRequest {
  archetype: string;
}

export interface UpdateOnboardStatusRequest {
  onboardStatus: string;
}

export interface UpdateOnboardStatusResponse {
  email?: string;
  onboardStatus: string;
}

export interface UpdateOrgIdRequest {
  /** @format uuid */
  orgId?: string;
}

export interface UpdateUsernameRequest {
  type?: string;
  username?: string;
}

export interface User {
  apexEnabled?: boolean;

  /** @format uuid */
  avatarId?: string;
  contactId?: string;

  /** @format date-time */
  created?: string;
  createdBy?: string;
  driveWealthUserId?: string;

  /** @format uuid */
  id?: string;

  /** @format date-time */
  lastAccess?: string;

  /** @format date-time */
  loginLockedEnd?: string;

  /** @format uuid */
  profileId?: string;
  role?: "OWNER" | "ADMIN" | "ADVISOR" | "STAFF" | "CLIENT";
  status?: string;

  /** @format date-time */
  updated?: string;
  updatedBy?: string;
}

export interface UserIdList {
  userIds?: string[];
}

export interface UserLogin {
  archetype?: "CLIENT" | "ADVISOR" | "NOOP" | "ALTRUIST_SUPPORT";

  /** @format date-time */
  created?: string;
  createdBy?: string;
  enabled?: boolean;

  /** @format uuid */
  id?: string;
  loginNames?: LoginName[];
  nonce?: string;
  oauthScopes?: string;

  /** @format uuid */
  orgId?: string;
  password?: string;
  signupPwd?: string;
  status?: "ACTIVE" | "INACTIVE" | "PENDING" | "EXPIRED" | "CLOSED";

  /** @format date-time */
  updated?: string;
  updatedBy?: string;

  /** @format uuid */
  userId?: string;
}

export interface UserLoginDto {
  archetype?: "CLIENT" | "ADVISOR" | "NOOP" | "ALTRUIST_SUPPORT";

  /** @format date-time */
  created?: string;
  createdBy?: string;

  /** @format uuid */
  id?: string;
  oauthScopes?: string;

  /** @format uuid */
  orgId?: string;
  status?: "ACTIVE" | "INACTIVE" | "PENDING" | "EXPIRED" | "CLOSED";

  /** @format date-time */
  updated?: string;
  updatedBy?: string;

  /** @format uuid */
  userId?: string;
  userName?: string;
}

export interface UserLoginStatus {
  loginStatus?: string;

  /** @format uuid */
  userId?: string;
}

export interface UserRegistrationDetailsResponse {
  /**
   * companyName
   * @example Altruist
   */
  companyName: string;

  /**
   * email
   * @example firstname.lastname@altruist.com
   */
  email: string;

  /**
   * firstName
   * @example John
   */
  firstName?: string;

  /**
   * inviteStatus
   * @example INVITED
   */
  inviteStatus?: string;

  /**
   * invitedBy
   * @example advisor.who.invited@altruist.com
   */
  invitedBy?: string;

  /**
   * lastName
   * @example Jones
   */
  lastName?: string;

  /**
   * role
   * @example OWNER|ADMIN|ADVISOR|STAFF|CLIENT|UNKNOWN
   */
  role: string;

  /**
   * status
   * @example UNVERIFIED
   */
  status?: string;
}

export interface VerificationCheckResponse {
  contactId?: string;

  /** @format uuid */
  pendingUserId?: string;
  source?: string;
  valid?: boolean;
}

export interface VerificationRequest {
  jwt?: string;
  password?: string;
}

export interface VerificationResponse {
  organization?: OrganizationDto;
  role?: string;
  signupPassword?: string;
  user?: User;
  username?: string;
}

export interface VerificationUsernameRequest {
  token?: string;
}

export interface WelcomeEmailRequest {
  email?: string;
  firstName?: string;
  lastName?: string;
}

export namespace Api {
  /**
   * No description
   * @tags device-controller
   * @name CreateUsingPost
   * @summary create
   * @request POST:/api/device
   */
  export namespace CreateUsingPost {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = AddDeviceRequest;
    export type RequestHeaders = { "User-Agent": string };
    export type ResponseBody = object;
  }
  /**
   * No description
   * @tags device-controller
   * @name GetByFingerprintHashUsingGet
   * @summary getByFingerprintHash
   * @request GET:/api/device/fingerprint-hash/{fingerprintHash}/user/{userId}
   */
  export namespace GetByFingerprintHashUsingGet {
    export type RequestParams = { fingerprintHash: string; userId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }
  /**
   * No description
   * @tags device-controller
   * @name SetTrustedDeviceUsingPut
   * @summary setTrustedDevice
   * @request PUT:/api/device/trust/{deviceId}
   */
  export namespace SetTrustedDeviceUsingPut {
    export type RequestParams = { deviceId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags device-controller
   * @name ListByUserIdUsingGet
   * @summary listByUserId
   * @request GET:/api/device/user/{userId}
   */
  export namespace ListByUserIdUsingGet {
    export type RequestParams = { userId: string };
    export type RequestQuery = { page: number; size: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }
  /**
   * No description
   * @tags device-controller
   * @name DeleteDeviceByIdUsingDelete
   * @summary deleteDeviceById
   * @request DELETE:/api/device/{deviceId}
   */
  export namespace DeleteDeviceByIdUsingDelete {
    export type RequestParams = { deviceId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-login-controller
   * @name EnableDfaForUserUsingPost
   * @summary enableDfaForUser
   * @request POST:/api/enable-dfa/user
   */
  export namespace EnableDfaForUserUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DFAUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserLogin;
  }
  /**
   * No description
   * @tags impersonation-audit-trail-controller
   * @name ListUsingGet
   * @summary List Impersonation Audit Trail
   * @request GET:/api/impersonation-audit-trail
   */
  export namespace ListUsingGet {
    export type RequestParams = {};
    export type RequestQuery = { externalUser?: string; internalUser?: string; page: number; size: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ImpersonateAuditTrailResponse;
  }
  /**
   * No description
   * @tags invite-user-controller
   * @name InviteUserUsingPost
   * @summary Sends invite to the user
   * @request POST:/api/invite-user
   */
  export namespace InviteUserUsingPost {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = InviteRequest;
    export type RequestHeaders = {};
    export type ResponseBody = InviteResponse;
  }
  /**
   * No description
   * @tags invite-user-controller
   * @name ResendInviteCodeUsingPost
   * @summary Re-sends invite to the user
   * @request POST:/api/invite-user/resend
   */
  export namespace ResendInviteCodeUsingPost {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = ResendInviteRequest;
    export type RequestHeaders = {};
    export type ResponseBody = InviteResponse;
  }
  /**
   * No description
   * @tags invite-user-controller
   * @name InviteStatusUsingPost
   * @summary Retrieves invite status for given users
   * @request POST:/api/invite-user/status
   */
  export namespace InviteStatusUsingPost {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = InviteStatusRequest;
    export type RequestHeaders = {};
    export type ResponseBody = InvitedUserStatusResponse;
  }
  /**
   * No description
   * @tags invite-user-controller-depreciated
   * @name UpdateEmailInvitedUserUsingPut
   * @summary Update Email on invited user
   * @request PUT:/api/invited-user/change-email/{invited_user_uuid}
   * @deprecated
   */
  export namespace UpdateEmailInvitedUserUsingPut {
    export type RequestParams = { invitedUserUuid: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = InviteEmailUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = InvitedUser;
  }
  /**
   * No description
   * @tags invite-user-controller
   * @name DeleteInvitedUserUsingDelete
   * @summary Deletes all active invitations that match the given email
   * @request DELETE:/api/invited-users/{email}
   */
  export namespace DeleteInvitedUserUsingDelete {
    export type RequestParams = { email: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags invite-user-controller
   * @name GetInvitedUsersForGivenOrgUsingGet
   * @summary getInvitedUsersForGivenOrg
   * @request GET:/api/invited-users/{orgId}
   */
  export namespace GetInvitedUsersForGivenOrgUsingGet {
    export type RequestParams = { orgId: string };
    export type RequestQuery = { groupedBy?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = InvitedUserSettingsDto[];
  }
  /**
   * No description
   * @tags login-history-controller
   * @name ListUsingGet1
   * @summary List Login History
   * @request GET:/api/login-history
   */
  export namespace ListUsingGet1 {
    export type RequestParams = {};
    export type RequestQuery = { endDate?: string; page: number; size?: number; startDate?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoginHistoryListResponse[];
  }
  /**
   * No description
   * @tags oauth-client-controller
   * @name ListOauthClientsUsingGet
   * @summary listOauthClients
   * @request GET:/api/oauth-clients
   */
  export namespace ListOauthClientsUsingGet {
    export type RequestParams = {};
    export type RequestQuery = { clientId?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = OauthClient[];
  }
  /**
   * No description
   * @tags oauth-client-controller
   * @name AddOauthClientUsingPost
   * @summary addOauthClient
   * @request POST:/api/oauth-clients
   */
  export namespace AddOauthClientUsingPost {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = OauthClientPost;
    export type RequestHeaders = {};
    export type ResponseBody = OauthClient;
  }
  /**
   * No description
   * @tags oauth-client-controller
   * @name UpdateOauthClientsUsingGet
   * @summary updateOauthClients
   * @request GET:/api/oauth-clients/{id}
   */
  export namespace UpdateOauthClientsUsingGet {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = OauthClient;
  }
  /**
   * No description
   * @tags oauth-client-controller
   * @name UpdateOauthClientsUsingPut
   * @summary updateOauthClients
   * @request PUT:/api/oauth-clients/{id}
   */
  export namespace UpdateOauthClientsUsingPut {
    export type RequestParams = { id: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = OauthClientPost;
    export type RequestHeaders = {};
    export type ResponseBody = OauthClient;
  }
  /**
   * No description
   * @tags oauth-client-controller
   * @name FindByUuidUsingDelete
   * @summary findByUUID
   * @request DELETE:/api/oauth-clients/{id}
   */
  export namespace FindByUuidUsingDelete {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags invite-user-controller-depreciated
   * @name InviteUserUsingPost1
   * @summary Sends invite to the user
   * @request POST:/api/orgs/{orgId}/invite-user
   * @deprecated
   */
  export namespace InviteUserUsingPost1 {
    export type RequestParams = { orgId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = InviteRequest;
    export type RequestHeaders = {};
    export type ResponseBody = InviteResponse;
  }
  /**
   * No description
   * @tags invite-user-controller-depreciated
   * @name ResendInviteCodeUsingPost1
   * @summary Re-sends invite to the user
   * @request POST:/api/orgs/{orgId}/invite-user/resend
   * @deprecated
   */
  export namespace ResendInviteCodeUsingPost1 {
    export type RequestParams = { orgId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = ResendInviteRequest;
    export type RequestHeaders = {};
    export type ResponseBody = InviteResponse;
  }
  /**
   * No description
   * @tags invite-user-controller-depreciated
   * @name InviteStatusUsingPost1
   * @summary Retrieves invite status for given users
   * @request POST:/api/orgs/{orgId}/invite-user/status
   * @deprecated
   */
  export namespace InviteStatusUsingPost1 {
    export type RequestParams = { orgId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = InviteStatusRequest;
    export type RequestHeaders = {};
    export type ResponseBody = InvitedUserStatusResponse;
  }
  /**
   * No description
   * @tags invite-user-controller-depreciated
   * @name GetInvitedUsersForGivenOrgUsingGet1
   * @summary Retrieves a list of invites showing the historical invitations done by an organization
   * @request GET:/api/orgs/{orgId}/invited-users
   * @deprecated
   */
  export namespace GetInvitedUsersForGivenOrgUsingGet1 {
    export type RequestParams = { orgId: string };
    export type RequestQuery = { groupedBy?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = InvitedUserSettingsDto[];
  }
  /**
   * No description
   * @tags invite-user-controller-depreciated
   * @name DeleteInvitedUserUsingDelete1
   * @summary Deletes all active invitations that match the given email
   * @request DELETE:/api/orgs/{orgId}/invited-users/{email}
   * @deprecated
   */
  export namespace DeleteInvitedUserUsingDelete1 {
    export type RequestParams = { email: string; orgId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-login-controller
   * @name GetLoginNameByIdUsingGet
   * @summary getLoginNameById
   * @request GET:/api/orgs/{orgId}/users/{userId}/login-names
   */
  export namespace GetLoginNameByIdUsingGet {
    export type RequestParams = { orgId: string; userId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoginName[];
  }
  /**
   * No description
   * @tags user-login-controller
   * @name ChangePasswordUsingPut
   * @summary changePassword
   * @request PUT:/api/orgs/{orgId}/users/{userId}/password
   */
  export namespace ChangePasswordUsingPut {
    export type RequestParams = { orgId: string; userId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = PasswordPost;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags pending-username-controller
   * @name GetPendingUsernameUsingGet
   * @summary Retrieves the current pending username change for a given userId
   * @request GET:/api/orgs/{orgId}/users/{userId}/pending-username
   * @deprecated
   */
  export namespace GetPendingUsernameUsingGet {
    export type RequestParams = { orgId: string; userId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PendingUsername;
  }
  /**
   * No description
   * @tags pending-username-controller
   * @name UpdatePendingUsernameUsingPut
   * @summary Updates the current pending username change for a given userId
   * @request PUT:/api/orgs/{orgId}/users/{userId}/pending-username
   * @deprecated
   */
  export namespace UpdatePendingUsernameUsingPut {
    export type RequestParams = { orgId: string; userId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = UpdateUsernameRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PendingUsername;
  }
  /**
   * No description
   * @tags pending-username-controller
   * @name DeletePendingUsernameUsingDelete
   * @summary Deletes the current pending username change for a given userId
   * @request DELETE:/api/orgs/{orgId}/users/{userId}/pending-username
   * @deprecated
   */
  export namespace DeletePendingUsernameUsingDelete {
    export type RequestParams = { orgId: string; userId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-registration-controller
   * @name SendWelcomeEmailUsingPost
   * @summary sendWelcomeEmail
   * @request POST:/api/send-welcome-email
   */
  export namespace SendWelcomeEmailUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WelcomeEmailRequest;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-registration-controller
   * @name UserAccountLockedUsingPost
   * @summary userAccountLocked
   * @request POST:/api/user-account-locked
   */
  export namespace UserAccountLockedUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = EmailPost;
    export type RequestHeaders = {};
    export type ResponseBody = JwtDto;
  }
  /**
   * No description
   * @tags user-registration-controller
   * @name UserForgetPasswordUsingPost
   * @summary userForgetPassword
   * @request POST:/api/user-forget-password
   */
  export namespace UserForgetPasswordUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = EmailPost;
    export type RequestHeaders = {};
    export type ResponseBody = JwtDto;
  }
  /**
   * No description
   * @tags user-registration-controller
   * @name UserRegistrationDetailsUsingGet
   * @summary Retrieves user details given invite code
   * @request GET:/api/user-registration-details
   */
  export namespace UserRegistrationDetailsUsingGet {
    export type RequestParams = {};
    export type RequestQuery = { code: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserRegistrationDetailsResponse;
  }
  /**
   * No description
   * @tags user-registration-controller
   * @name ResetPasswordUsingPost
   * @summary resetPassword
   * @request POST:/api/user-reset-password
   */
  export namespace ResetPasswordUsingPost {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = ResetPassword;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-registration-controller
   * @name VerifyResetPasswordTokenUsingPost
   * @summary verifyResetPasswordToken
   * @request POST:/api/user-reset-password-check
   */
  export namespace VerifyResetPasswordTokenUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = JwtDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-registration-controller
   * @name DeletePendingVerificationUsingDelete
   * @summary deletePendingVerification
   * @request DELETE:/api/user-verification/{pendingVerificationId}
   */
  export namespace DeletePendingVerificationUsingDelete {
    export type RequestParams = { pendingVerificationId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-login-controller
   * @name GetUserIdByEmailUsingGet
   * @summary getUserIdByEmail
   * @request GET:/api/user/id
   */
  export namespace GetUserIdByEmailUsingGet {
    export type RequestParams = {};
    export type RequestQuery = { email: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @tags pending-username-controller
   * @name VerifyUsernameUsingPost
   * @summary Verifies JWT from update username email that was sent
   * @request POST:/api/username-verification
   */
  export namespace VerifyUsernameUsingPost {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = VerificationUsernameRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PendingUsername;
  }
  /**
   * No description
   * @tags user-login-controller
   * @name GetUserLoginByArchetypesOrOrgIdUsingGet
   * @summary Get user login by archetype or orgId
   * @request GET:/api/users/archetypes
   */
  export namespace GetUserLoginByArchetypesOrOrgIdUsingGet {
    export type RequestParams = {};
    export type RequestQuery = { archetypes?: string[]; orgId?: string; page: string; size: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }
  /**
   * No description
   * @tags user-login-controller
   * @name GetUserLoginStatusUsingPost
   * @summary getUserLoginStatus
   * @request POST:/api/users/client-invite-status
   * @deprecated
   */
  export namespace GetUserLoginStatusUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserIdList;
    export type RequestHeaders = {};
    export type ResponseBody = UserLoginStatus[];
  }
  /**
   * No description
   * @tags user-login-controller
   * @name GetLoginNameByEmailUsingGet
   * @summary getLoginNameByEmail
   * @request GET:/api/users/usernames/{email}
   */
  export namespace GetLoginNameByEmailUsingGet {
    export type RequestParams = { email: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoginName;
  }
  /**
   * No description
   * @tags user-login-controller
   * @name DeleteLoginUsingDelete
   * @summary Deletes all logins for a given userId
   * @request DELETE:/api/users/{userId}
   */
  export namespace DeleteLoginUsingDelete {
    export type RequestParams = { userId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-login-controller
   * @name ActivateUsingPut
   * @summary activate
   * @request PUT:/api/users/{userId}/activate
   */
  export namespace ActivateUsingPut {
    export type RequestParams = { userId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-login-controller
   * @name UnmarkUserApexPathUsingPost
   * @summary unmarkUserApexPath
   * @request POST:/api/users/{userId}/apex-disable
   */
  export namespace UnmarkUserApexPathUsingPost {
    export type RequestParams = { userId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-login-controller
   * @name MarkUserApexPathUsingPost
   * @summary markUserApexPath
   * @request POST:/api/users/{userId}/apex-enable
   */
  export namespace MarkUserApexPathUsingPost {
    export type RequestParams = { userId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-login-controller
   * @name UpdateUserLoginArchetypeUsingPut
   * @summary updateUserLoginArchetype
   * @request PUT:/api/users/{userId}/archetype
   */
  export namespace UpdateUserLoginArchetypeUsingPut {
    export type RequestParams = { userId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = UpdateArchetypeRequest;
    export type RequestHeaders = {};
    export type ResponseBody = UserLoginDto;
  }
  /**
   * No description
   * @tags user-login-controller
   * @name DeactivateUsingPut
   * @summary deactivate
   * @request PUT:/api/users/{userId}/deactivate
   */
  export namespace DeactivateUsingPut {
    export type RequestParams = { userId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-login-controller
   * @name GetLoginNameByIdUsingGet1
   * @summary getLoginNameById
   * @request GET:/api/users/{userId}/login-names
   */
  export namespace GetLoginNameByIdUsingGet1 {
    export type RequestParams = { userId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoginName[];
  }
  /**
   * No description
   * @tags user-login-controller
   * @name UpdateOrgIdUsingPut
   * @summary updateOrgId
   * @request PUT:/api/users/{userId}/orgId
   */
  export namespace UpdateOrgIdUsingPut {
    export type RequestParams = { userId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = UpdateOrgIdRequest;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-login-controller
   * @name ChangePasswordUsingPut1
   * @summary changePassword
   * @request PUT:/api/users/{userId}/password
   */
  export namespace ChangePasswordUsingPut1 {
    export type RequestParams = { userId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = PasswordPost;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags pending-username-controller
   * @name GetPendingUsernameUsingGet1
   * @summary Retrieves the current pending username change for a given userId
   * @request GET:/api/users/{userId}/pending-username
   */
  export namespace GetPendingUsernameUsingGet1 {
    export type RequestParams = { userId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PendingUsername;
  }
  /**
   * No description
   * @tags pending-username-controller
   * @name UpdatePendingUsernameUsingPut1
   * @summary Updates the current pending username change for a given userId
   * @request PUT:/api/users/{userId}/pending-username
   */
  export namespace UpdatePendingUsernameUsingPut1 {
    export type RequestParams = { userId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = UpdateUsernameRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PendingUsername;
  }
  /**
   * No description
   * @tags pending-username-controller
   * @name DeletePendingUsernameUsingDelete1
   * @summary Deletes the current pending username change for a given userId
   * @request DELETE:/api/users/{userId}/pending-username
   */
  export namespace DeletePendingUsernameUsingDelete1 {
    export type RequestParams = { userId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-login-controller
   * @name UpdateUsernameUsingPut
   * @summary updateUsername
   * @request PUT:/api/users/{userId}/username
   */
  export namespace UpdateUsernameUsingPut {
    export type RequestParams = { userId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = UpdateUsernameRequest;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-onboarding-controller
   * @name CreateInviteCodesUsingPost
   * @summary Generates number of new InviteCodes
   * @request POST:/api/v2/invite-codes
   */
  export namespace CreateInviteCodesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = InviteCodeCreationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = object[];
  }
  /**
   * No description
   * @tags user-onboarding-controller
   * @name ResendVerificationEmailUsingPost
   * @summary resendVerificationEmail
   * @request POST:/api/v2/invite-user/resend-verification-email
   */
  export namespace ResendVerificationEmailUsingPost {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = ResendVerificationEmailRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ResendVerificationEmailRequest;
  }
  /**
   * No description
   * @tags user-onboarding-controller
   * @name GetOnboardStatusUsingGet1
   * @summary getOnboardStatus
   * @request GET:/api/v2/invited-user/onboard-status
   */
  export namespace GetOnboardStatusUsingGet1 {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetOnboardStatusResponse;
  }
  /**
   * No description
   * @tags user-onboarding-controller
   * @name UpdateOnboardStatusUsingPut
   * @summary updateOnboardStatus
   * @request PUT:/api/v2/invited-user/onboard-status
   */
  export namespace UpdateOnboardStatusUsingPut {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = UpdateOnboardStatusRequest;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateOnboardStatusResponse;
  }
  /**
   * No description
   * @tags user-onboarding-controller
   * @name GetOnboardStatusUsingGet
   * @summary getOnboardStatus
   * @request GET:/api/v2/invited-user/onboard-status/{email}
   */
  export namespace GetOnboardStatusUsingGet {
    export type RequestParams = { email: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetOnboardStatusResponse;
  }
  /**
   * No description
   * @tags user-onboarding-controller
   * @name ResendVerificationEmailUsingPost1
   * @summary resendVerificationEmail
   * @request POST:/api/v2/orgs/{orgId}/invite-user/resend-verification-email
   * @deprecated
   */
  export namespace ResendVerificationEmailUsingPost1 {
    export type RequestParams = { orgId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = ResendVerificationEmailRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ResendVerificationEmailRequest;
  }
  /**
   * No description
   * @tags user-onboarding-controller
   * @name GetOnboardStatusUsingGet2
   * @summary getOnboardStatus
   * @request GET:/api/v2/orgs/{orgId}/invited-user/onboard-status
   * @deprecated
   */
  export namespace GetOnboardStatusUsingGet2 {
    export type RequestParams = { orgId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetOnboardStatusResponse;
  }
  /**
   * No description
   * @tags user-onboarding-controller
   * @name UpdateOnboardStatusUsingPut1
   * @summary updateOnboardStatus
   * @request PUT:/api/v2/orgs/{orgId}/invited-user/onboard-status
   * @deprecated
   */
  export namespace UpdateOnboardStatusUsingPut1 {
    export type RequestParams = { orgId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = UpdateOnboardStatusRequest;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateOnboardStatusResponse;
  }
  /**
   * No description
   * @tags user-onboarding-controller
   * @name UserRegistrationUsingPost
   * @summary Registers user and sends verification email
   * @request POST:/api/v2/orgs/{orgId}/user-registration
   * @deprecated
   */
  export namespace UserRegistrationUsingPost {
    export type RequestParams = { orgId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = RegistrationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = JwtDto;
  }
  /**
   * No description
   * @tags user-onboarding-controller
   * @name UserVerificationUsingPost
   * @summary Verifies JWT from sent email
   * @request POST:/api/v2/orgs/{orgId}/user-verification
   * @deprecated
   */
  export namespace UserVerificationUsingPost {
    export type RequestParams = { orgId: string };
    export type RequestQuery = { createOrgOnVerificationEnabled: boolean; name?: string };
    export type RequestBody = VerificationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = VerificationResponse;
  }
  /**
   * No description
   * @tags user-onboarding-controller
   * @name UserVerificationCheckUsingPost
   * @summary userVerificationCheck
   * @request POST:/api/v2/orgs/{orgId}/user-verification-check
   * @deprecated
   */
  export namespace UserVerificationCheckUsingPost {
    export type RequestParams = { orgId: string };
    export type RequestQuery = {};
    export type RequestBody = JwtDto;
    export type RequestHeaders = {};
    export type ResponseBody = VerificationCheckResponse;
  }
  /**
   * No description
   * @tags user-onboarding-controller
   * @name TeammemberRegistrationUsingPost
   * @summary Registers user, but does not send verification email
   * @request POST:/api/v2/teammember-registration
   */
  export namespace TeammemberRegistrationUsingPost {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = RegistrationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = JwtDto;
  }
  /**
   * No description
   * @tags user-onboarding-controller
   * @name UserRegistrationUsingPost1
   * @summary Registers user and sends verification email
   * @request POST:/api/v2/user-registration
   */
  export namespace UserRegistrationUsingPost1 {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = RegistrationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = JwtDto;
  }
  /**
   * No description
   * @tags user-onboarding-controller
   * @name UserVerificationUsingPost1
   * @summary Verifies JWT from sent email
   * @request POST:/api/v2/user-verification
   */
  export namespace UserVerificationUsingPost1 {
    export type RequestParams = {};
    export type RequestQuery = { createOrgOnVerificationEnabled: boolean; name?: string };
    export type RequestBody = VerificationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = VerificationResponse;
  }
  /**
   * No description
   * @tags user-onboarding-controller
   * @name UserVerificationCheckUsingPost1
   * @summary userVerificationCheck
   * @request POST:/api/v2/user-verification-check
   */
  export namespace UserVerificationCheckUsingPost1 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = JwtDto;
    export type RequestHeaders = {};
    export type ResponseBody = VerificationCheckResponse;
  }
  /**
   * No description
   * @tags pending-username-controller
   * @name VerifyNewUsernameUsingPost
   * @summary Verifies JWT from update username email that was sent
   * @request POST:/api/{userId}/username-verification
   */
  export namespace VerifyNewUsernameUsingPost {
    export type RequestParams = { userId: string };
    export type RequestQuery = {};
    export type RequestBody = VerificationUsernameRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PendingUsername;
  }
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "//platform.dev1.altruistnet.tech",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: Iterable<any> = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Spring Boot REST API
 * @version 1.0.0
 * @license LICENSE (LICENSE)
 * @baseUrl //platform.dev1.altruistnet.tech
 * @contact NAME <EMAIL> (URL)
 *
 * Employee Management REST API
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags device-controller
     * @name CreateUsingPost
     * @summary create
     * @request POST:/api/device
     */
    createUsingPost: (addDeviceRequest: AddDeviceRequest, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/device`,
        method: "POST",
        query: query,
        body: addDeviceRequest,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags device-controller
     * @name GetByFingerprintHashUsingGet
     * @summary getByFingerprintHash
     * @request GET:/api/device/fingerprint-hash/{fingerprintHash}/user/{userId}
     */
    getByFingerprintHashUsingGet: (fingerprintHash: string, userId: string, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/device/fingerprint-hash/${fingerprintHash}/user/${userId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags device-controller
     * @name SetTrustedDeviceUsingPut
     * @summary setTrustedDevice
     * @request PUT:/api/device/trust/{deviceId}
     */
    setTrustedDeviceUsingPut: (deviceId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/device/trust/${deviceId}`,
        method: "PUT",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags device-controller
     * @name ListByUserIdUsingGet
     * @summary listByUserId
     * @request GET:/api/device/user/{userId}
     */
    listByUserIdUsingGet: (userId: string, query: { page: number; size: number }, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/device/user/${userId}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags device-controller
     * @name DeleteDeviceByIdUsingDelete
     * @summary deleteDeviceById
     * @request DELETE:/api/device/{deviceId}
     */
    deleteDeviceByIdUsingDelete: (deviceId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/device/${deviceId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name EnableDfaForUserUsingPost
     * @summary enableDfaForUser
     * @request POST:/api/enable-dfa/user
     */
    enableDfaForUserUsingPost: (userId: DFAUserDto, params: RequestParams = {}) =>
      this.request<UserLogin, void>({
        path: `/api/enable-dfa/user`,
        method: "POST",
        body: userId,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags impersonation-audit-trail-controller
     * @name ListUsingGet
     * @summary List Impersonation Audit Trail
     * @request GET:/api/impersonation-audit-trail
     */
    listUsingGet: (
      query: { externalUser?: string; internalUser?: string; page: number; size: number },
      params: RequestParams = {},
    ) =>
      this.request<ImpersonateAuditTrailResponse, void>({
        path: `/api/impersonation-audit-trail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags invite-user-controller
     * @name InviteUserUsingPost
     * @summary Sends invite to the user
     * @request POST:/api/invite-user
     */
    inviteUserUsingPost: (invite: InviteRequest, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<InviteResponse, void>({
        path: `/api/invite-user`,
        method: "POST",
        query: query,
        body: invite,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags invite-user-controller
     * @name ResendInviteCodeUsingPost
     * @summary Re-sends invite to the user
     * @request POST:/api/invite-user/resend
     */
    resendInviteCodeUsingPost: (request: ResendInviteRequest, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<InviteResponse, void>({
        path: `/api/invite-user/resend`,
        method: "POST",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags invite-user-controller
     * @name InviteStatusUsingPost
     * @summary Retrieves invite status for given users
     * @request POST:/api/invite-user/status
     */
    inviteStatusUsingPost: (request: InviteStatusRequest, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<InvitedUserStatusResponse, void>({
        path: `/api/invite-user/status`,
        method: "POST",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags invite-user-controller-depreciated
     * @name UpdateEmailInvitedUserUsingPut
     * @summary Update Email on invited user
     * @request PUT:/api/invited-user/change-email/{invited_user_uuid}
     * @deprecated
     */
    updateEmailInvitedUserUsingPut: (
      invitedUserUuid: string,
      request: InviteEmailUpdate,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<InvitedUser, void>({
        path: `/api/invited-user/change-email/${invitedUserUuid}`,
        method: "PUT",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags invite-user-controller
     * @name DeleteInvitedUserUsingDelete
     * @summary Deletes all active invitations that match the given email
     * @request DELETE:/api/invited-users/{email}
     */
    deleteInvitedUserUsingDelete: (email: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/invited-users/${email}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags invite-user-controller
     * @name GetInvitedUsersForGivenOrgUsingGet
     * @summary getInvitedUsersForGivenOrg
     * @request GET:/api/invited-users/{orgId}
     */
    getInvitedUsersForGivenOrgUsingGet: (orgId: string, query?: { groupedBy?: string }, params: RequestParams = {}) =>
      this.request<InvitedUserSettingsDto[], void>({
        path: `/api/invited-users/${orgId}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags login-history-controller
     * @name ListUsingGet1
     * @summary List Login History
     * @request GET:/api/login-history
     */
    listUsingGet1: (
      query: { endDate?: string; page: number; size?: number; startDate?: string },
      params: RequestParams = {},
    ) =>
      this.request<LoginHistoryListResponse[], void>({
        path: `/api/login-history`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags oauth-client-controller
     * @name ListOauthClientsUsingGet
     * @summary listOauthClients
     * @request GET:/api/oauth-clients
     */
    listOauthClientsUsingGet: (query?: { clientId?: string }, params: RequestParams = {}) =>
      this.request<OauthClient[], void>({
        path: `/api/oauth-clients`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags oauth-client-controller
     * @name AddOauthClientUsingPost
     * @summary addOauthClient
     * @request POST:/api/oauth-clients
     */
    addOauthClientUsingPost: (inputData: OauthClientPost, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<OauthClient, void>({
        path: `/api/oauth-clients`,
        method: "POST",
        query: query,
        body: inputData,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags oauth-client-controller
     * @name UpdateOauthClientsUsingGet
     * @summary updateOauthClients
     * @request GET:/api/oauth-clients/{id}
     */
    updateOauthClientsUsingGet: (id: string, params: RequestParams = {}) =>
      this.request<OauthClient, void>({
        path: `/api/oauth-clients/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags oauth-client-controller
     * @name UpdateOauthClientsUsingPut
     * @summary updateOauthClients
     * @request PUT:/api/oauth-clients/{id}
     */
    updateOauthClientsUsingPut: (
      id: string,
      inputData: OauthClientPost,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<OauthClient, void>({
        path: `/api/oauth-clients/${id}`,
        method: "PUT",
        query: query,
        body: inputData,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags oauth-client-controller
     * @name FindByUuidUsingDelete
     * @summary findByUUID
     * @request DELETE:/api/oauth-clients/{id}
     */
    findByUuidUsingDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/oauth-clients/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags invite-user-controller-depreciated
     * @name InviteUserUsingPost1
     * @summary Sends invite to the user
     * @request POST:/api/orgs/{orgId}/invite-user
     * @deprecated
     */
    inviteUserUsingPost1: (
      orgId: string,
      invite: InviteRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<InviteResponse, void>({
        path: `/api/orgs/${orgId}/invite-user`,
        method: "POST",
        query: query,
        body: invite,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags invite-user-controller-depreciated
     * @name ResendInviteCodeUsingPost1
     * @summary Re-sends invite to the user
     * @request POST:/api/orgs/{orgId}/invite-user/resend
     * @deprecated
     */
    resendInviteCodeUsingPost1: (
      orgId: string,
      request: ResendInviteRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<InviteResponse, void>({
        path: `/api/orgs/${orgId}/invite-user/resend`,
        method: "POST",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags invite-user-controller-depreciated
     * @name InviteStatusUsingPost1
     * @summary Retrieves invite status for given users
     * @request POST:/api/orgs/{orgId}/invite-user/status
     * @deprecated
     */
    inviteStatusUsingPost1: (
      orgId: string,
      request: InviteStatusRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<InvitedUserStatusResponse, void>({
        path: `/api/orgs/${orgId}/invite-user/status`,
        method: "POST",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags invite-user-controller-depreciated
     * @name GetInvitedUsersForGivenOrgUsingGet1
     * @summary Retrieves a list of invites showing the historical invitations done by an organization
     * @request GET:/api/orgs/{orgId}/invited-users
     * @deprecated
     */
    getInvitedUsersForGivenOrgUsingGet1: (orgId: string, query?: { groupedBy?: string }, params: RequestParams = {}) =>
      this.request<InvitedUserSettingsDto[], void>({
        path: `/api/orgs/${orgId}/invited-users`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags invite-user-controller-depreciated
     * @name DeleteInvitedUserUsingDelete1
     * @summary Deletes all active invitations that match the given email
     * @request DELETE:/api/orgs/{orgId}/invited-users/{email}
     * @deprecated
     */
    deleteInvitedUserUsingDelete1: (email: string, orgId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/orgs/${orgId}/invited-users/${email}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name GetLoginNameByIdUsingGet
     * @summary getLoginNameById
     * @request GET:/api/orgs/{orgId}/users/{userId}/login-names
     */
    getLoginNameByIdUsingGet: (orgId: string, userId: string, params: RequestParams = {}) =>
      this.request<LoginName[], void>({
        path: `/api/orgs/${orgId}/users/${userId}/login-names`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name ChangePasswordUsingPut
     * @summary changePassword
     * @request PUT:/api/orgs/{orgId}/users/{userId}/password
     */
    changePasswordUsingPut: (
      orgId: string,
      userId: string,
      passwordPost: PasswordPost,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/orgs/${orgId}/users/${userId}/password`,
        method: "PUT",
        query: query,
        body: passwordPost,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags pending-username-controller
     * @name GetPendingUsernameUsingGet
     * @summary Retrieves the current pending username change for a given userId
     * @request GET:/api/orgs/{orgId}/users/{userId}/pending-username
     * @deprecated
     */
    getPendingUsernameUsingGet: (orgId: string, userId: string, params: RequestParams = {}) =>
      this.request<PendingUsername, void>({
        path: `/api/orgs/${orgId}/users/${userId}/pending-username`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pending-username-controller
     * @name UpdatePendingUsernameUsingPut
     * @summary Updates the current pending username change for a given userId
     * @request PUT:/api/orgs/{orgId}/users/{userId}/pending-username
     * @deprecated
     */
    updatePendingUsernameUsingPut: (
      orgId: string,
      userId: string,
      request: UpdateUsernameRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<PendingUsername, void>({
        path: `/api/orgs/${orgId}/users/${userId}/pending-username`,
        method: "PUT",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags pending-username-controller
     * @name DeletePendingUsernameUsingDelete
     * @summary Deletes the current pending username change for a given userId
     * @request DELETE:/api/orgs/{orgId}/users/{userId}/pending-username
     * @deprecated
     */
    deletePendingUsernameUsingDelete: (orgId: string, userId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/orgs/${orgId}/users/${userId}/pending-username`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-registration-controller
     * @name SendWelcomeEmailUsingPost
     * @summary sendWelcomeEmail
     * @request POST:/api/send-welcome-email
     */
    sendWelcomeEmailUsingPost: (request: WelcomeEmailRequest, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/send-welcome-email`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-registration-controller
     * @name UserAccountLockedUsingPost
     * @summary userAccountLocked
     * @request POST:/api/user-account-locked
     */
    userAccountLockedUsingPost: (emailPost: EmailPost, params: RequestParams = {}) =>
      this.request<JwtDto, void>({
        path: `/api/user-account-locked`,
        method: "POST",
        body: emailPost,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-registration-controller
     * @name UserForgetPasswordUsingPost
     * @summary userForgetPassword
     * @request POST:/api/user-forget-password
     */
    userForgetPasswordUsingPost: (emailPost: EmailPost, params: RequestParams = {}) =>
      this.request<JwtDto, void>({
        path: `/api/user-forget-password`,
        method: "POST",
        body: emailPost,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-registration-controller
     * @name UserRegistrationDetailsUsingGet
     * @summary Retrieves user details given invite code
     * @request GET:/api/user-registration-details
     */
    userRegistrationDetailsUsingGet: (query: { code: string }, params: RequestParams = {}) =>
      this.request<UserRegistrationDetailsResponse, void>({
        path: `/api/user-registration-details`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-registration-controller
     * @name ResetPasswordUsingPost
     * @summary resetPassword
     * @request POST:/api/user-reset-password
     */
    resetPasswordUsingPost: (resetPassword: ResetPassword, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/user-reset-password`,
        method: "POST",
        query: query,
        body: resetPassword,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-registration-controller
     * @name VerifyResetPasswordTokenUsingPost
     * @summary verifyResetPasswordToken
     * @request POST:/api/user-reset-password-check
     */
    verifyResetPasswordTokenUsingPost: (jwtDto: JwtDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/user-reset-password-check`,
        method: "POST",
        body: jwtDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-registration-controller
     * @name DeletePendingVerificationUsingDelete
     * @summary deletePendingVerification
     * @request DELETE:/api/user-verification/{pendingVerificationId}
     */
    deletePendingVerificationUsingDelete: (pendingVerificationId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/user-verification/${pendingVerificationId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name GetUserIdByEmailUsingGet
     * @summary getUserIdByEmail
     * @request GET:/api/user/id
     */
    getUserIdByEmailUsingGet: (query: { email: string }, params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/api/user/id`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags pending-username-controller
     * @name VerifyUsernameUsingPost
     * @summary Verifies JWT from update username email that was sent
     * @request POST:/api/username-verification
     */
    verifyUsernameUsingPost: (
      request: VerificationUsernameRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<PendingUsername, void>({
        path: `/api/username-verification`,
        method: "POST",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name GetUserLoginByArchetypesOrOrgIdUsingGet
     * @summary Get user login by archetype or orgId
     * @request GET:/api/users/archetypes
     */
    getUserLoginByArchetypesOrOrgIdUsingGet: (
      query: { archetypes?: string[]; orgId?: string; page: string; size: string },
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/users/archetypes`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name GetUserLoginStatusUsingPost
     * @summary getUserLoginStatus
     * @request POST:/api/users/client-invite-status
     * @deprecated
     */
    getUserLoginStatusUsingPost: (userIdList: UserIdList, params: RequestParams = {}) =>
      this.request<UserLoginStatus[], void>({
        path: `/api/users/client-invite-status`,
        method: "POST",
        body: userIdList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name GetLoginNameByEmailUsingGet
     * @summary getLoginNameByEmail
     * @request GET:/api/users/usernames/{email}
     */
    getLoginNameByEmailUsingGet: (email: string, params: RequestParams = {}) =>
      this.request<LoginName, void>({
        path: `/api/users/usernames/${email}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name DeleteLoginUsingDelete
     * @summary Deletes all logins for a given userId
     * @request DELETE:/api/users/{userId}
     */
    deleteLoginUsingDelete: (userId: string, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/users/${userId}`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name ActivateUsingPut
     * @summary activate
     * @request PUT:/api/users/{userId}/activate
     */
    activateUsingPut: (userId: string, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/users/${userId}/activate`,
        method: "PUT",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name UnmarkUserApexPathUsingPost
     * @summary unmarkUserApexPath
     * @request POST:/api/users/{userId}/apex-disable
     */
    unmarkUserApexPathUsingPost: (userId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/users/${userId}/apex-disable`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name MarkUserApexPathUsingPost
     * @summary markUserApexPath
     * @request POST:/api/users/{userId}/apex-enable
     */
    markUserApexPathUsingPost: (userId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/users/${userId}/apex-enable`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name UpdateUserLoginArchetypeUsingPut
     * @summary updateUserLoginArchetype
     * @request PUT:/api/users/{userId}/archetype
     */
    updateUserLoginArchetypeUsingPut: (
      userId: string,
      request: UpdateArchetypeRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<UserLoginDto, void>({
        path: `/api/users/${userId}/archetype`,
        method: "PUT",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name DeactivateUsingPut
     * @summary deactivate
     * @request PUT:/api/users/{userId}/deactivate
     */
    deactivateUsingPut: (userId: string, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/users/${userId}/deactivate`,
        method: "PUT",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name GetLoginNameByIdUsingGet1
     * @summary getLoginNameById
     * @request GET:/api/users/{userId}/login-names
     */
    getLoginNameByIdUsingGet1: (userId: string, params: RequestParams = {}) =>
      this.request<LoginName[], void>({
        path: `/api/users/${userId}/login-names`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name UpdateOrgIdUsingPut
     * @summary updateOrgId
     * @request PUT:/api/users/{userId}/orgId
     */
    updateOrgIdUsingPut: (
      userId: string,
      request: UpdateOrgIdRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/users/${userId}/orgId`,
        method: "PUT",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name ChangePasswordUsingPut1
     * @summary changePassword
     * @request PUT:/api/users/{userId}/password
     */
    changePasswordUsingPut1: (
      userId: string,
      passwordPost: PasswordPost,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/users/${userId}/password`,
        method: "PUT",
        query: query,
        body: passwordPost,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags pending-username-controller
     * @name GetPendingUsernameUsingGet1
     * @summary Retrieves the current pending username change for a given userId
     * @request GET:/api/users/{userId}/pending-username
     */
    getPendingUsernameUsingGet1: (userId: string, params: RequestParams = {}) =>
      this.request<PendingUsername, void>({
        path: `/api/users/${userId}/pending-username`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pending-username-controller
     * @name UpdatePendingUsernameUsingPut1
     * @summary Updates the current pending username change for a given userId
     * @request PUT:/api/users/{userId}/pending-username
     */
    updatePendingUsernameUsingPut1: (
      userId: string,
      request: UpdateUsernameRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<PendingUsername, void>({
        path: `/api/users/${userId}/pending-username`,
        method: "PUT",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags pending-username-controller
     * @name DeletePendingUsernameUsingDelete1
     * @summary Deletes the current pending username change for a given userId
     * @request DELETE:/api/users/{userId}/pending-username
     */
    deletePendingUsernameUsingDelete1: (userId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/users/${userId}/pending-username`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-login-controller
     * @name UpdateUsernameUsingPut
     * @summary updateUsername
     * @request PUT:/api/users/{userId}/username
     */
    updateUsernameUsingPut: (
      userId: string,
      request: UpdateUsernameRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/users/${userId}/username`,
        method: "PUT",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-onboarding-controller
     * @name CreateInviteCodesUsingPost
     * @summary Generates number of new InviteCodes
     * @request POST:/api/v2/invite-codes
     */
    createInviteCodesUsingPost: (
      inviteCodeCreationRequest: InviteCodeCreationRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<object[], void>({
        path: `/api/v2/invite-codes`,
        method: "POST",
        query: query,
        body: inviteCodeCreationRequest,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-onboarding-controller
     * @name ResendVerificationEmailUsingPost
     * @summary resendVerificationEmail
     * @request POST:/api/v2/invite-user/resend-verification-email
     */
    resendVerificationEmailUsingPost: (
      request: ResendVerificationEmailRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<ResendVerificationEmailRequest, void>({
        path: `/api/v2/invite-user/resend-verification-email`,
        method: "POST",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-onboarding-controller
     * @name GetOnboardStatusUsingGet1
     * @summary getOnboardStatus
     * @request GET:/api/v2/invited-user/onboard-status
     */
    getOnboardStatusUsingGet1: (query?: { name?: string }, params: RequestParams = {}) =>
      this.request<GetOnboardStatusResponse, void>({
        path: `/api/v2/invited-user/onboard-status`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-onboarding-controller
     * @name UpdateOnboardStatusUsingPut
     * @summary updateOnboardStatus
     * @request PUT:/api/v2/invited-user/onboard-status
     */
    updateOnboardStatusUsingPut: (
      request: UpdateOnboardStatusRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<UpdateOnboardStatusResponse, void>({
        path: `/api/v2/invited-user/onboard-status`,
        method: "PUT",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-onboarding-controller
     * @name GetOnboardStatusUsingGet
     * @summary getOnboardStatus
     * @request GET:/api/v2/invited-user/onboard-status/{email}
     */
    getOnboardStatusUsingGet: (email: string, params: RequestParams = {}) =>
      this.request<GetOnboardStatusResponse, void>({
        path: `/api/v2/invited-user/onboard-status/${email}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-onboarding-controller
     * @name ResendVerificationEmailUsingPost1
     * @summary resendVerificationEmail
     * @request POST:/api/v2/orgs/{orgId}/invite-user/resend-verification-email
     * @deprecated
     */
    resendVerificationEmailUsingPost1: (
      orgId: string,
      request: ResendVerificationEmailRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<ResendVerificationEmailRequest, void>({
        path: `/api/v2/orgs/${orgId}/invite-user/resend-verification-email`,
        method: "POST",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-onboarding-controller
     * @name GetOnboardStatusUsingGet2
     * @summary getOnboardStatus
     * @request GET:/api/v2/orgs/{orgId}/invited-user/onboard-status
     * @deprecated
     */
    getOnboardStatusUsingGet2: (orgId: string, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<GetOnboardStatusResponse, void>({
        path: `/api/v2/orgs/${orgId}/invited-user/onboard-status`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-onboarding-controller
     * @name UpdateOnboardStatusUsingPut1
     * @summary updateOnboardStatus
     * @request PUT:/api/v2/orgs/{orgId}/invited-user/onboard-status
     * @deprecated
     */
    updateOnboardStatusUsingPut1: (
      orgId: string,
      request: UpdateOnboardStatusRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<UpdateOnboardStatusResponse, void>({
        path: `/api/v2/orgs/${orgId}/invited-user/onboard-status`,
        method: "PUT",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-onboarding-controller
     * @name UserRegistrationUsingPost
     * @summary Registers user and sends verification email
     * @request POST:/api/v2/orgs/{orgId}/user-registration
     * @deprecated
     */
    userRegistrationUsingPost: (
      orgId: string,
      request: RegistrationRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<JwtDto, void>({
        path: `/api/v2/orgs/${orgId}/user-registration`,
        method: "POST",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-onboarding-controller
     * @name UserVerificationUsingPost
     * @summary Verifies JWT from sent email
     * @request POST:/api/v2/orgs/{orgId}/user-verification
     * @deprecated
     */
    userVerificationUsingPost: (
      orgId: string,
      query: { createOrgOnVerificationEnabled: boolean; name?: string },
      request: VerificationRequest,
      params: RequestParams = {},
    ) =>
      this.request<VerificationResponse, void>({
        path: `/api/v2/orgs/${orgId}/user-verification`,
        method: "POST",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-onboarding-controller
     * @name UserVerificationCheckUsingPost
     * @summary userVerificationCheck
     * @request POST:/api/v2/orgs/{orgId}/user-verification-check
     * @deprecated
     */
    userVerificationCheckUsingPost: (orgId: string, request: JwtDto, params: RequestParams = {}) =>
      this.request<VerificationCheckResponse, void>({
        path: `/api/v2/orgs/${orgId}/user-verification-check`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-onboarding-controller
     * @name TeammemberRegistrationUsingPost
     * @summary Registers user, but does not send verification email
     * @request POST:/api/v2/teammember-registration
     */
    teammemberRegistrationUsingPost: (
      request: RegistrationRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<JwtDto, void>({
        path: `/api/v2/teammember-registration`,
        method: "POST",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-onboarding-controller
     * @name UserRegistrationUsingPost1
     * @summary Registers user and sends verification email
     * @request POST:/api/v2/user-registration
     */
    userRegistrationUsingPost1: (request: RegistrationRequest, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<JwtDto, void>({
        path: `/api/v2/user-registration`,
        method: "POST",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-onboarding-controller
     * @name UserVerificationUsingPost1
     * @summary Verifies JWT from sent email
     * @request POST:/api/v2/user-verification
     */
    userVerificationUsingPost1: (
      query: { createOrgOnVerificationEnabled: boolean; name?: string },
      request: VerificationRequest,
      params: RequestParams = {},
    ) =>
      this.request<VerificationResponse, void>({
        path: `/api/v2/user-verification`,
        method: "POST",
        query: query,
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-onboarding-controller
     * @name UserVerificationCheckUsingPost1
     * @summary userVerificationCheck
     * @request POST:/api/v2/user-verification-check
     */
    userVerificationCheckUsingPost1: (request: JwtDto, params: RequestParams = {}) =>
      this.request<VerificationCheckResponse, void>({
        path: `/api/v2/user-verification-check`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags pending-username-controller
     * @name VerifyNewUsernameUsingPost
     * @summary Verifies JWT from update username email that was sent
     * @request POST:/api/{userId}/username-verification
     */
    verifyNewUsernameUsingPost: (userId: string, request: VerificationUsernameRequest, params: RequestParams = {}) =>
      this.request<PendingUsername, void>({
        path: `/api/${userId}/username-verification`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),
  };
}
