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

export interface Address {
  addr1?: string;
  addr2?: string;
  addr3?: string;
  addressType?: "BUSINESS" | "MAILING" | "EMPLOYER";
  city?: string;
  country?: string;
  createdBy?: string;

  /** @format uuid */
  id?: string;
  state?: string;
  status?: string;
  updatedBy?: string;
  zipCode?: string;
}

export interface ChangeContactEmailRequest {
  email?: string;
}

export interface FinancialAccountDetailsResponse {
  accountNickname?: string;
  accountNumber?: string;

  /** @format uuid */
  financialAccountId?: string;
}

export interface FinancialAccountInfo {
  accountNickname?: string;
  accountNumber?: string;

  /** @format date-time */
  created?: string;
  createdBy?: string;

  /** @format uuid */
  id?: string;
  origin?: string;
  status?: string;

  /** @format date-time */
  updated?: string;
  updatedBy?: string;
}

export interface FinancialAccountNumberLookup {
  accountNumber?: string;
}

export interface FinancialAdvisorAvatar {
  /** @format uuid */
  avatarId?: string;
  url?: string;
}

export interface FinancialAdvisorProfile {
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;

  /** @format uuid */
  profileId?: string;
}

export interface FinancialAdvisorProfileReponse {
  financialAdvisorAvatars?: FinancialAdvisorAvatar[];
  financialAdvisorProfiles?: FinancialAdvisorProfile[];
}

export interface FinancialAdvisorProfileRequest {
  avatarIds?: string[];
  profileIds?: string[];
}

export interface IdDto {
  /** @format uuid */
  id?: string;
}

export type JsonNode = object;

export interface OrganizationAddressPut {
  address?: Address;

  /** @format uuid */
  id?: string;
}

export interface OrganizationAddressResponse {
  address?: Address;

  /** @format uuid */
  id?: string;
}

export interface ProfileAddress {
  addresses?: Address[];
  firstName?: string;
  lastFourDigitSSN?: string;
  lastName?: string;

  /** @format uuid */
  profileId?: string;
}

export interface ProfileAddressPut {
  address?: Address;

  /** @format uuid */
  id?: string;
}

export interface ProfileAddressResponse {
  address?: Address;

  /** @format uuid */
  id?: string;
}

export interface ProfilePost {
  additionalInfo?: JsonNode;
  allowEmailDuplication?: boolean;
  annualIncome?: string;
  brokerDealerAffiliation?: boolean;
  citizenShip?: string;
  companyLegalName?: string;
  companyName?: string;
  companyTaxId?: string;
  countryOfBirth?: string;
  customerAgreementDisclosure?: boolean;

  /** @format date-time */
  dateOfBirth?: string;
  directorStockOwner?: boolean;
  email?: string;
  employer?: string;
  employmentIndustry?: string;
  employmentPosition?: string;
  employmentStatus?: string;
  findersFeeDisclosure?: boolean;
  firstName?: string;
  gender?: string;

  /** @format uuid */
  id?: string;
  investmentExperience?: string;
  investmentObjective?: string;
  investmentRiskTolerance?: string;
  language?: string;
  lastName?: string;
  liquidNetworth?: string;
  maritalStatus?: string;
  marketDataAgreementDisclosure?: boolean;
  optInLendingProgram?: boolean;
  permanentResident?: boolean;
  phone?: string;
  politicallyExposed?: boolean;
  profileType?:
    | "BENEFICIARY"
    | "BENEFICIARY_ENTITY"
    | "TRUSTED_CONTACT"
    | "ENTITY"
    | "ENTITY_CONTACT"
    | "ADVISOR"
    | "CLIENT"
    | "MINOR"
    | "CORPORATION_MEMBER"
    | "EMPLOYER";
  rule14bDisclosure?: boolean;
  signedBy?: string;
  ssnTaxId?: string;
  status?: string;
  taxPayer?: boolean;
  termsOfUseDisclosure?: boolean;
  totalNetworth?: string;

  /** @format date-time */
  visaExpirationDate?: string;
  visaType?: "E1" | "E2" | "E3" | "F1" | "H1B" | "L1" | "O1" | "TN1" | "G4" | "OTHER";
}

export interface ResponseEntity {
  body?: object;
  statusCode?:
    | "100 CONTINUE"
    | "101 SWITCHING_PROTOCOLS"
    | "102 PROCESSING"
    | "103 CHECKPOINT"
    | "200 OK"
    | "201 CREATED"
    | "202 ACCEPTED"
    | "203 NON_AUTHORITATIVE_INFORMATION"
    | "204 NO_CONTENT"
    | "205 RESET_CONTENT"
    | "206 PARTIAL_CONTENT"
    | "207 MULTI_STATUS"
    | "208 ALREADY_REPORTED"
    | "226 IM_USED"
    | "300 MULTIPLE_CHOICES"
    | "301 MOVED_PERMANENTLY"
    | "302 FOUND"
    | "302 MOVED_TEMPORARILY"
    | "303 SEE_OTHER"
    | "304 NOT_MODIFIED"
    | "305 USE_PROXY"
    | "307 TEMPORARY_REDIRECT"
    | "308 PERMANENT_REDIRECT"
    | "400 BAD_REQUEST"
    | "401 UNAUTHORIZED"
    | "402 PAYMENT_REQUIRED"
    | "403 FORBIDDEN"
    | "404 NOT_FOUND"
    | "405 METHOD_NOT_ALLOWED"
    | "406 NOT_ACCEPTABLE"
    | "407 PROXY_AUTHENTICATION_REQUIRED"
    | "408 REQUEST_TIMEOUT"
    | "409 CONFLICT"
    | "410 GONE"
    | "411 LENGTH_REQUIRED"
    | "412 PRECONDITION_FAILED"
    | "413 PAYLOAD_TOO_LARGE"
    | "413 REQUEST_ENTITY_TOO_LARGE"
    | "414 URI_TOO_LONG"
    | "414 REQUEST_URI_TOO_LONG"
    | "415 UNSUPPORTED_MEDIA_TYPE"
    | "416 REQUESTED_RANGE_NOT_SATISFIABLE"
    | "417 EXPECTATION_FAILED"
    | "418 I_AM_A_TEAPOT"
    | "419 INSUFFICIENT_SPACE_ON_RESOURCE"
    | "420 METHOD_FAILURE"
    | "421 DESTINATION_LOCKED"
    | "422 UNPROCESSABLE_ENTITY"
    | "423 LOCKED"
    | "424 FAILED_DEPENDENCY"
    | "425 TOO_EARLY"
    | "426 UPGRADE_REQUIRED"
    | "428 PRECONDITION_REQUIRED"
    | "429 TOO_MANY_REQUESTS"
    | "431 REQUEST_HEADER_FIELDS_TOO_LARGE"
    | "451 UNAVAILABLE_FOR_LEGAL_REASONS"
    | "500 INTERNAL_SERVER_ERROR"
    | "501 NOT_IMPLEMENTED"
    | "502 BAD_GATEWAY"
    | "503 SERVICE_UNAVAILABLE"
    | "504 GATEWAY_TIMEOUT"
    | "505 HTTP_VERSION_NOT_SUPPORTED"
    | "506 VARIANT_ALSO_NEGOTIATES"
    | "507 INSUFFICIENT_STORAGE"
    | "508 LOOP_DETECTED"
    | "509 BANDWIDTH_LIMIT_EXCEEDED"
    | "510 NOT_EXTENDED"
    | "511 NETWORK_AUTHENTICATION_REQUIRED";

  /** @format int32 */
  statusCodeValue?: number;
}

export interface TrustDetailsDto {
  address?: string;
  city?: string;

  /** @format date-time */
  dateEstablished?: string;

  /** @format uuid */
  financialAccountId?: string;

  /** @format uuid */
  id?: string;
  name?: string;
  state?: string;
  stateEstablished?: string;
  supportedChecked?: boolean;
  taxIdentificationNumber?: string;
  trustRevocability?: "REVOCABLE" | "IRREVOCABLE";
  zipCode?: string;
}

export interface UnassignedAccount {
  accountCategory?: string;
  accountClassification?: string;
  accountNumber?: string;
  accountType?: string;
  addresses?: Address[];
  externalRef?: string;

  /** @format uuid */
  financialAccountId?: string;

  /** @format uuid */
  financialAccountInfoId?: string;
  firstName?: string;
  lastFourDigitSSN?: string;
  lastName?: string;

  /** @format uuid */
  userId?: string;
}

export interface UpdateAccountNicknameRequest {
  /**
   * Nickname of an account to set OR empty value to reset it
   * @example Amanda's savings account | empty | null
   */
  accountNickname?: string;

  /**
   * Designates financial account information object that's going to be renamed
   * @format uuid
   * @example 78cac88a-a581-4aaf-ae45-5c0af458adb9
   */
  financialAccountId: string;
}

export interface UrlDto {
  url?: string;
}

export interface UserProfile {
  additionalInfo?: JsonNode;
  annualIncome?: string;
  anotherPartyHasTradeAuthorization?: boolean;
  brokerDealerAffiliation?: boolean;
  citizenShip?: string;
  companyEmail?: string;
  companyLegalName?: string;
  companyName?: string;
  companyPhone?: string;
  companyTaxId?: string;
  companyWebsite?: string;
  countryOfBirth?: string;

  /** @format date-time */
  created?: string;
  createdBy?: string;
  customerAgreementDisclosure?: boolean;

  /** @format date-time */
  dateOfBirth?: string;
  directorStockOwner?: boolean;
  email?: string;
  employer?: string;
  employmentIndustry?: string;
  employmentPosition?: string;
  employmentStatus?: string;
  entityNature?:
    | "AGRICULTURE_FORESTRY_FISHING"
    | "MINING"
    | "CONSTRUCTION"
    | "MANUFACTURING"
    | "TRANSPORTATION_COMMUNICATIONS_ELECTRIC_GAS_SANITARY_SERVICES"
    | "WHOLESALE_TRADE"
    | "RETAIL_TRADE"
    | "FINANCE_INSURANCE_REAL_ESTATE"
    | "SERVICES"
    | "PUBLIC_ADMINISTRATION";
  entityTaxId?: string;
  exemptLegalCustomer?: boolean;
  externalRef?: string;
  findersFeeDisclosure?: boolean;
  firstName?: string;
  foreignBank?: boolean;
  fundingSource?: "CORPORATE_INCOME" | "INVESTMENT_CAPITAL" | "OTHER";
  fundingSourceClarification?: string;
  gender?: string;

  /** @format uuid */
  id?: string;
  initialDepositSource?: string;
  investmentExperience?: string;
  investmentObjective?: string;
  investmentRiskTolerance?: string;
  issueBearerShares?: boolean;
  language?: string;
  lastName?: string;
  liquidNetWorth?: string;
  liquidityNeeds?: "VERY_IMPORTANT" | "SOMEWHAT_IMPORTANT" | "NOT_IMPORTANT";
  maintainedForForeignFinancialInstitution?: boolean;
  maritalStatus?: string;
  marketDataAgreementDisclosure?: boolean;
  negativeInformation?: boolean;
  negativeNewsInformation?: string;
  occupation?: string;
  optInLendingProgram?: boolean;
  pabAccount?: boolean;
  permanentResident?: boolean;
  phone?: string;
  politicallyExposed?: boolean;
  primaryActivity?: "ACTIVE_TRADING" | "SHORT_TERM_INVESTING" | "LONG_TERM_INVESTING";
  profileType?:
    | "BENEFICIARY"
    | "BENEFICIARY_ENTITY"
    | "TRUSTED_CONTACT"
    | "ENTITY"
    | "ENTITY_CONTACT"
    | "ADVISOR"
    | "CLIENT"
    | "MINOR"
    | "CORPORATION_MEMBER"
    | "EMPLOYER";
  relatedAccountNumbers?: string;
  relatedAccounts?: boolean;

  /** @format date-time */
  resolutionAdoptedDate?: string;
  rule14bDisclosure?: boolean;
  scopeOfBusiness?: "COMMERCIAL_RETAIL_BUSINESS" | "FINANCIAL_SERVICES_BUSINESS" | "OTHER";
  scopeOfBusinessClarification?: string;
  signedBy?: string;
  ssnTaxId?: string;
  stateOfOrigin?: string;
  status?: string;
  taxPayer?: boolean;
  termsOfUseDisclosure?: boolean;
  timeHorizon?: "SHORT" | "AVERAGE" | "LONGEST";
  totalNetWorth?: string;
  transactForeignBonds?: boolean;
  transactLowPricedSecurities?: boolean;

  /** @format date-time */
  updated?: string;
  updatedBy?: string;

  /** @format date-time */
  visaExpirationDate?: string;
  visaType?: "E1" | "E2" | "E3" | "F1" | "H1B" | "L1" | "O1" | "TN1" | "G4" | "OTHER";
  withdrawalFrequency?: "FREQUENT" | "OCCASIONAL" | "WITHDRAWAL";
}

export interface UserProfileBulkRequest {
  /** @format int32 */
  page?: number;
  profileIds?: string[];

  /** @format int32 */
  size?: number;
}

export interface UserProfileDto {
  additionalInfo?: JsonNode;
  allowEmailDuplication?: boolean;
  annualIncome?: string;
  anotherPartyHasTradeAuthorization?: boolean;
  brokerDealerAffiliation?: boolean;
  citizenShip?: string;
  companyEmail?: string;
  companyLegalName?: string;
  companyName?: string;
  companyPhone?: string;
  companyTaxId?: string;
  companyWebsite?: string;
  countryOfBirth?: string;
  customerAgreementDisclosure?: boolean;

  /** @format date-time */
  dateOfBirth?: string;
  directorStockOwner?: boolean;
  email?: string;
  employer?: string;
  employmentIndustry?: string;
  employmentPosition?: string;
  employmentStatus?: string;
  entityNature?:
    | "AGRICULTURE_FORESTRY_FISHING"
    | "MINING"
    | "CONSTRUCTION"
    | "MANUFACTURING"
    | "TRANSPORTATION_COMMUNICATIONS_ELECTRIC_GAS_SANITARY_SERVICES"
    | "WHOLESALE_TRADE"
    | "RETAIL_TRADE"
    | "FINANCE_INSURANCE_REAL_ESTATE"
    | "SERVICES"
    | "PUBLIC_ADMINISTRATION";
  entityTaxId?: string;
  exemptLegalCustomer?: boolean;
  findersFeeDisclosure?: boolean;
  firstName?: string;
  foreignBank?: boolean;
  fundingSource?: "CORPORATE_INCOME" | "INVESTMENT_CAPITAL" | "OTHER";
  fundingSourceClarification?: string;
  gender?: string;

  /** @format uuid */
  id?: string;
  initialDepositSource?: string;
  investmentExperience?: string;
  investmentObjective?: string;
  investmentRiskTolerance?: string;
  issueBearerShares?: boolean;
  language?: string;
  lastName?: string;
  liquidNetWorth?: string;
  liquidityNeeds?: "VERY_IMPORTANT" | "SOMEWHAT_IMPORTANT" | "NOT_IMPORTANT";
  maintainedForForeignFinancialInstitution?: boolean;
  maritalStatus?: string;
  marketDataAgreementDisclosure?: boolean;
  negativeInformation?: boolean;
  negativeNewsInformation?: string;
  occupation?: string;
  optInLendingProgram?: boolean;
  pabAccount?: boolean;
  permanentResident?: boolean;
  phone?: string;
  politicallyExposed?: boolean;
  primaryActivity?: "ACTIVE_TRADING" | "SHORT_TERM_INVESTING" | "LONG_TERM_INVESTING";
  profileType?:
    | "BENEFICIARY"
    | "BENEFICIARY_ENTITY"
    | "TRUSTED_CONTACT"
    | "ENTITY"
    | "ENTITY_CONTACT"
    | "ADVISOR"
    | "CLIENT"
    | "MINOR"
    | "CORPORATION_MEMBER"
    | "EMPLOYER";
  relatedAccountNumbers?: string;
  relatedAccounts?: boolean;

  /** @format date-time */
  resolutionAdoptedDate?: string;
  rule14bDisclosure?: boolean;
  scopeOfBusiness?: "COMMERCIAL_RETAIL_BUSINESS" | "FINANCIAL_SERVICES_BUSINESS" | "OTHER";
  scopeOfBusinessClarification?: string;
  signedBy?: string;
  ssnTaxId?: string;
  stateOfOrigin?: string;
  status?: string;
  taxPayer?: boolean;
  termsOfUseDisclosure?: boolean;
  timeHorizon?: "SHORT" | "AVERAGE" | "LONGEST";
  totalNetWorth?: string;
  transactForeignBonds?: boolean;
  transactLowPricedSecurities?: boolean;

  /** @format uuid */
  userId?: string;

  /** @format date-time */
  visaExpirationDate?: string;
  visaType?: "E1" | "E2" | "E3" | "F1" | "H1B" | "L1" | "O1" | "TN1" | "G4" | "OTHER";
  withdrawalFrequency?: "FREQUENT" | "OCCASIONAL" | "WITHDRAWAL";
}

export interface PageResponseUserProfileDto {
  items?: UserProfileDto[];

  /** @format int32 */
  page?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  total?: number;
}

export namespace Api {
  /**
   * No description
   * @tags profile-address-controller
   * @name GetAddressByProfileIdUsingGet
   * @summary getAddressByProfileId
   * @request GET:/api/address/{profileId}
   */
  export namespace GetAddressByProfileIdUsingGet {
    export type RequestParams = { profileId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Address[];
  }
  /**
   * No description
   * @tags user-profile-controller
   * @name UpdateBeneficiaryProfileUsingPut
   * @summary updateBeneficiaryProfile
   * @request PUT:/api/beneficiary/profile/{profileId}
   * @deprecated
   */
  export namespace UpdateBeneficiaryProfileUsingPut {
    export type RequestParams = { profileId: string };
    export type RequestQuery = { name?: string; patch?: boolean };
    export type RequestBody = ProfilePost;
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile;
  }
  /**
   * No description
   * @tags media-controller
   * @name UploadContentUsingPost
   * @summary uploadContent
   * @request POST:/api/content
   */
  export namespace UploadContentUsingPost {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = { file: File };
    export type RequestHeaders = {};
    export type ResponseBody = IdDto;
  }
  /**
   * No description
   * @tags media-controller
   * @name RemoveContentUsingDelete
   * @summary removeContent
   * @request DELETE:/api/content/{contentId}
   */
  export namespace RemoveContentUsingDelete {
    export type RequestParams = { contentId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags media-controller
   * @name GetMediaUsingGet
   * @summary getMedia
   * @request GET:/api/content/{id}
   */
  export namespace GetMediaUsingGet {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags financial-account-info-controller
   * @name AddFinancialAccountInfoUsingPost
   * @summary addFinancialAccountInfo
   * @request POST:/api/financial-account-info
   */
  export namespace AddFinancialAccountInfoUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FinancialAccountInfo;
    export type RequestHeaders = {};
    export type ResponseBody = FinancialAccountInfo;
  }
  /**
   * No description
   * @tags financial-account-info-controller
   * @name GetOptionalFinancialAccountInfoByAccountNumberUsingGet
   * @summary getOptionalFinancialAccountInfoByAccountNumber
   * @request GET:/api/financial-account-info/account-number
   */
  export namespace GetOptionalFinancialAccountInfoByAccountNumberUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FinancialAccountNumberLookup;
    export type RequestHeaders = {};
    export type ResponseBody = FinancialAccountInfo;
  }
  /**
   * No description
   * @tags financial-account-info-controller
   * @name FetchFinancialAccountDetailsByFinAccountIdsUsingPost
   * @summary fetchFinancialAccountDetailsByFinAccountIds
   * @request POST:/api/financial-account-info/by-account-ids
   */
  export namespace FetchFinancialAccountDetailsByFinAccountIdsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = string[];
    export type RequestHeaders = {};
    export type ResponseBody = FinancialAccountDetailsResponse[];
  }
  /**
   * No description
   * @tags financial-account-info-controller
   * @name GetFinancialAccountInfoByIdsUsingPost
   * @summary getFinancialAccountInfoByIds
   * @request POST:/api/financial-account-info/by-ids
   */
  export namespace GetFinancialAccountInfoByIdsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = string[];
    export type RequestHeaders = {};
    export type ResponseBody = FinancialAccountInfo[];
  }
  /**
   * No description
   * @tags financial-account-info-controller
   * @name GetFinancialAccountInfoByAccountNumberUsingPost
   * @summary getFinancialAccountInfoByAccountNumber
   * @request POST:/api/financial-account-info/by-number
   */
  export namespace GetFinancialAccountInfoByAccountNumberUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FinancialAccountNumberLookup;
    export type RequestHeaders = {};
    export type ResponseBody = FinancialAccountInfo;
  }
  /**
   * No description
   * @tags financial-account-info-controller
   * @name SetNicknameUsingPut
   * @summary Sets or resets nickname for a given financial account
   * @request PUT:/api/financial-account-info/rename
   */
  export namespace SetNicknameUsingPut {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateAccountNicknameRequest;
    export type RequestHeaders = {};
    export type ResponseBody = FinancialAccountInfo;
  }
  /**
   * No description
   * @tags user-profile-controller
   * @name GetFinancialAdvisorInfoUsingPost
   * @summary getFinancialAdvisorInfo
   * @request POST:/api/financial-advisor-info
   */
  export namespace GetFinancialAdvisorInfoUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FinancialAdvisorProfileRequest;
    export type RequestHeaders = {};
    export type ResponseBody = FinancialAdvisorProfileReponse;
  }
  /**
   * No description
   * @tags help-controller
   * @name HelpUsingGet
   * @summary help
   * @request GET:/api/help
   */
  export namespace HelpUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ResponseEntity;
  }
  /**
   * No description
   * @tags organization-address-controller
   * @name SaveAddressUsingPut
   * @summary saveAddress
   * @request PUT:/api/organization-address
   */
  export namespace SaveAddressUsingPut {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = OrganizationAddressPut;
    export type RequestHeaders = {};
    export type ResponseBody = OrganizationAddressResponse;
  }
  /**
   * No description
   * @tags organization-address-controller
   * @name GetAddressUsingGet
   * @summary getAddress
   * @request GET:/api/organization-address/{id}
   */
  export namespace GetAddressUsingGet {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Address;
  }
  /**
   * No description
   * @tags user-profile-controller-v-2
   * @name GetProfileAddressUsingPost1
   * @summary getProfileAddress
   * @request POST:/api/orgs/{orgId}/user-profiles/profile-addresses
   */
  export namespace GetProfileAddressUsingPost1 {
    export type RequestParams = { orgId: string };
    export type RequestQuery = {};
    export type RequestBody = string[];
    export type RequestHeaders = {};
    export type ResponseBody = ProfileAddress[];
  }
  /**
   * No description
   * @tags ping-controller
   * @name PingUsingGet
   * @summary ping
   * @request GET:/api/ping
   */
  export namespace PingUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @tags profile-address-controller
   * @name SaveAddressUsingPut1
   * @summary saveAddress
   * @request PUT:/api/profile-address
   */
  export namespace SaveAddressUsingPut1 {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = ProfileAddressPut;
    export type RequestHeaders = {};
    export type ResponseBody = ProfileAddressResponse;
  }
  /**
   * No description
   * @tags profile-address-controller
   * @name GetAddressUsingGet1
   * @summary getAddress
   * @request GET:/api/profile-address/{id}
   */
  export namespace GetAddressUsingGet1 {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Address;
  }
  /**
   * No description
   * @tags profile-address-controller
   * @name SaveProfileAddressUsingPost
   * @summary saveProfileAddress
   * @request POST:/api/profile-address/{profileId}
   */
  export namespace SaveProfileAddressUsingPost {
    export type RequestParams = { profileId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = Address;
    export type RequestHeaders = {};
    export type ResponseBody = ProfileAddressResponse;
  }
  /**
   * No description
   * @tags profile-address-controller
   * @name UpdateAddressByProfileIdAndAddressTypeUsingPut
   * @summary updateAddressByProfileIdAndAddressType
   * @request PUT:/api/profile-address/{profileId}
   */
  export namespace UpdateAddressByProfileIdAndAddressTypeUsingPut {
    export type RequestParams = { profileId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = Address;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-profile-controller
   * @name UploadAvatarUsingPost
   * @summary uploadAvatar
   * @request POST:/api/profile-images
   */
  export namespace UploadAvatarUsingPost {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = { file: File };
    export type RequestHeaders = {};
    export type ResponseBody = IdDto;
  }
  /**
   * No description
   * @tags user-profile-controller
   * @name GetProfileImageUrlUsingGet
   * @summary getProfileImageUrl
   * @request GET:/api/profile-images/{imageId}
   */
  export namespace GetProfileImageUrlUsingGet {
    export type RequestParams = { imageId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UrlDto;
  }
  /**
   * No description
   * @tags user-profile-controller
   * @name RemoveAvatarUsingDelete
   * @summary removeAvatar
   * @request DELETE:/api/profile-images/{imageId}
   */
  export namespace RemoveAvatarUsingDelete {
    export type RequestParams = { imageId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags trust-details-controller
   * @name CreateTrustDetailsUsingPost
   * @summary createTrustDetails
   * @request POST:/api/trust-details
   */
  export namespace CreateTrustDetailsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TrustDetailsDto;
    export type RequestHeaders = {};
    export type ResponseBody = TrustDetailsDto;
  }
  /**
   * No description
   * @tags trust-details-controller
   * @name UpdateTrustDetailsUsingPut
   * @summary updateTrustDetails
   * @request PUT:/api/trust-details
   */
  export namespace UpdateTrustDetailsUsingPut {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TrustDetailsDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags trust-details-controller
   * @name GetTrustDetailsUsingGet
   * @summary getTrustDetails
   * @request GET:/api/trust-details/{id}
   */
  export namespace GetTrustDetailsUsingGet {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TrustDetailsDto;
  }
  /**
   * No description
   * @tags user-profile-controller
   * @name AddNewUserProfileUsingPost
   * @summary addNewUserProfile
   * @request POST:/api/user-profiles
   */
  export namespace AddNewUserProfileUsingPost {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = ProfilePost;
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile;
  }
  /**
   * No description
   * @tags user-profile-controller
   * @name GetUserProfileByIdUsingPost
   * @summary getUserProfileById
   * @request POST:/api/user-profiles-by-ids
   */
  export namespace GetUserProfileByIdUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = string[];
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile[];
  }
  /**
   * No description
   * @tags user-profile-controller
   * @name UpdateContactEmailUserProfileUsingPut
   * @summary updateContactEmailUserProfile
   * @request PUT:/api/user-profiles/contact-email/{profileId}
   */
  export namespace UpdateContactEmailUserProfileUsingPut {
    export type RequestParams = { profileId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = ChangeContactEmailRequest;
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile;
  }
  /**
   * No description
   * @tags user-profile-controller
   * @name GetProfileAddressUsingPost
   * @summary getProfileAddress
   * @request POST:/api/user-profiles/profile-addresses
   */
  export namespace GetProfileAddressUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = string[];
    export type RequestHeaders = {};
    export type ResponseBody = ProfileAddress[];
  }
  /**
   * No description
   * @tags user-profile-controller
   * @name GetUnassignedUsersUsingPost
   * @summary getUnassignedUsers
   * @request POST:/api/user-profiles/unassigned-users
   */
  export namespace GetUnassignedUsersUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = string[];
    export type RequestHeaders = {};
    export type ResponseBody = UnassignedAccount[];
  }
  /**
   * No description
   * @tags user-profile-controller
   * @name GetUserProfileByIdUsingGet
   * @summary getUserProfileById
   * @request GET:/api/user-profiles/{profileId}
   */
  export namespace GetUserProfileByIdUsingGet {
    export type RequestParams = { profileId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile;
  }
  /**
   * No description
   * @tags user-profile-controller
   * @name UpdateUserProfileUsingPut
   * @summary updateUserProfile
   * @request PUT:/api/user-profiles/{profileId}
   */
  export namespace UpdateUserProfileUsingPut {
    export type RequestParams = { profileId: string };
    export type RequestQuery = { name?: string; patch?: boolean };
    export type RequestBody = ProfilePost;
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile;
  }
  /**
   * No description
   * @tags user-profile-controller
   * @name GetUserProfileAddressUsingGet
   * @summary getUserProfileAddress
   * @request GET:/api/user-profiles/{profileId}/address
   */
  export namespace GetUserProfileAddressUsingGet {
    export type RequestParams = { profileId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Address;
  }
  /**
   * No description
   * @tags user-profile-controller
   * @name UpdateUserProfileAddressUsingPut
   * @summary updateUserProfileAddress
   * @request PUT:/api/user-profiles/{profileId}/address
   */
  export namespace UpdateUserProfileAddressUsingPut {
    export type RequestParams = { profileId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = Address;
    export type RequestHeaders = {};
    export type ResponseBody = Address;
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name UpdateBeneficiaryProfileUsingPut1
   * @summary updateBeneficiaryProfile
   * @request PUT:/api/v2/beneficiary/profile/{profileId}
   * @deprecated
   */
  export namespace UpdateBeneficiaryProfileUsingPut1 {
    export type RequestParams = { profileId: string };
    export type RequestQuery = { name?: string; patch?: boolean };
    export type RequestBody = UserProfileDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile;
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name UpdateBrokerageAccountProfileUsingPut
   * @summary updateBrokerageAccountProfile
   * @request PUT:/api/v2/brokerage-account/profile/{profileId}
   */
  export namespace UpdateBrokerageAccountProfileUsingPut {
    export type RequestParams = { profileId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = UserProfileDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile;
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name GetFinancialAdvisorInfoUsingPost1
   * @summary getFinancialAdvisorInfo
   * @request POST:/api/v2/financial-advisor-info
   */
  export namespace GetFinancialAdvisorInfoUsingPost1 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FinancialAdvisorProfileRequest;
    export type RequestHeaders = {};
    export type ResponseBody = FinancialAdvisorProfileReponse;
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name UploadAvatarUsingPost1
   * @summary uploadAvatar
   * @request POST:/api/v2/profile-images
   */
  export namespace UploadAvatarUsingPost1 {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = { file: File };
    export type RequestHeaders = {};
    export type ResponseBody = IdDto;
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name GetProfileImageUrlUsingGet1
   * @summary getProfileImageUrl
   * @request GET:/api/v2/profile-images/{imageId}
   */
  export namespace GetProfileImageUrlUsingGet1 {
    export type RequestParams = { imageId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UrlDto;
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name RemoveAvatarUsingDelete1
   * @summary removeAvatar
   * @request DELETE:/api/v2/profile-images/{imageId}
   */
  export namespace RemoveAvatarUsingDelete1 {
    export type RequestParams = { imageId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name GetOriginalProfilesWithSpacesUsingGet
   * @summary getOriginalProfilesWithSpaces
   * @request GET:/api/v2/user-profile/getOriginalProfilesWithSpaces
   */
  export namespace GetOriginalProfilesWithSpacesUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile[];
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name UpdateFirstAndLastNamesRemoveSpacesUsingPut
   * @summary updateFirstAndLastNamesRemoveSpaces
   * @request PUT:/api/v2/user-profile/remove/spaces
   */
  export namespace UpdateFirstAndLastNamesRemoveSpacesUsingPut {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile[];
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name RollbackRemoveSpacesSpacesUsingPut
   * @summary rollbackRemoveSpacesSpaces
   * @request PUT:/api/v2/user-profile/rollback/spaces
   */
  export namespace RollbackRemoveSpacesSpacesUsingPut {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserProfile[];
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile[];
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name GetUserProfilesByEmailAndProfileTypeUsingGet
   * @summary getUserProfilesByEmailAndProfileType
   * @request GET:/api/v2/user-profiles
   */
  export namespace GetUserProfilesByEmailAndProfileTypeUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {
      email: string;
      profileType:
        | "BENEFICIARY"
        | "BENEFICIARY_ENTITY"
        | "TRUSTED_CONTACT"
        | "ENTITY"
        | "ENTITY_CONTACT"
        | "ADVISOR"
        | "CLIENT"
        | "MINOR"
        | "CORPORATION_MEMBER"
        | "EMPLOYER";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile[];
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name AddNewUserProfileUsingPost1
   * @summary addNewUserProfile
   * @request POST:/api/v2/user-profiles
   */
  export namespace AddNewUserProfileUsingPost1 {
    export type RequestParams = {};
    export type RequestQuery = { name?: string };
    export type RequestBody = UserProfileDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile;
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name GetUserProfilesByEmailUsingGet
   * @summary getUserProfilesByEmail
   * @request GET:/api/v2/user-profiles-by-email
   */
  export namespace GetUserProfilesByEmailUsingGet {
    export type RequestParams = {};
    export type RequestQuery = { email: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile[];
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name GetUserProfileByIdUsingPost1
   * @summary getUserProfileById
   * @request POST:/api/v2/user-profiles-by-ids
   */
  export namespace GetUserProfileByIdUsingPost1 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = string[];
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile[];
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name GetUserProfilesByProfileIdsUsingPost
   * @summary getUserProfilesByProfileIds
   * @request POST:/api/v2/user-profiles/_search
   */
  export namespace GetUserProfilesByProfileIdsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserProfileBulkRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PageResponseUserProfileDto;
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name GetProfileAddressUsingPost2
   * @summary getProfileAddress
   * @request POST:/api/v2/user-profiles/profile-addresses
   */
  export namespace GetProfileAddressUsingPost2 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = string[];
    export type RequestHeaders = {};
    export type ResponseBody = ProfileAddress[];
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name GetUnassignedUsersUsingPost1
   * @summary getUnassignedUsers
   * @request POST:/api/v2/user-profiles/unassigned-users
   */
  export namespace GetUnassignedUsersUsingPost1 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = string[];
    export type RequestHeaders = {};
    export type ResponseBody = UnassignedAccount[];
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name GetUserProfileByIdUsingGet1
   * @summary getUserProfileById
   * @request GET:/api/v2/user-profiles/{profileId}
   */
  export namespace GetUserProfileByIdUsingGet1 {
    export type RequestParams = { profileId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile;
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name UpdateUserProfileUsingPut1
   * @summary updateUserProfile
   * @request PUT:/api/v2/user-profiles/{profileId}
   */
  export namespace UpdateUserProfileUsingPut1 {
    export type RequestParams = { profileId: string };
    export type RequestQuery = { name?: string; patch?: boolean };
    export type RequestBody = UserProfileDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserProfile;
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name DeleteUserProfileUsingDelete
   * @summary Deletes the given team-member / advisor by profile id
   * @request DELETE:/api/v2/user-profiles/{profileId}
   */
  export namespace DeleteUserProfileUsingDelete {
    export type RequestParams = { profileId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name GetUserProfileAddressUsingGet1
   * @summary getUserProfileAddress
   * @request GET:/api/v2/user-profiles/{profileId}/address
   */
  export namespace GetUserProfileAddressUsingGet1 {
    export type RequestParams = { profileId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Address;
  }
  /**
   * No description
   * @tags user-profile-ctrl
   * @name UpdateUserProfileAddressUsingPut1
   * @summary updateUserProfileAddress
   * @request PUT:/api/v2/user-profiles/{profileId}/address
   */
  export namespace UpdateUserProfileAddressUsingPut1 {
    export type RequestParams = { profileId: string };
    export type RequestQuery = { name?: string };
    export type RequestBody = Address;
    export type RequestHeaders = {};
    export type ResponseBody = Address;
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
     * @tags profile-address-controller
     * @name GetAddressByProfileIdUsingGet
     * @summary getAddressByProfileId
     * @request GET:/api/address/{profileId}
     */
    getAddressByProfileIdUsingGet: (profileId: string, params: RequestParams = {}) =>
      this.request<Address[], void>({
        path: `/api/address/${profileId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-controller
     * @name UpdateBeneficiaryProfileUsingPut
     * @summary updateBeneficiaryProfile
     * @request PUT:/api/beneficiary/profile/{profileId}
     * @deprecated
     */
    updateBeneficiaryProfileUsingPut: (
      profileId: string,
      input: ProfilePost,
      query?: { name?: string; patch?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<UserProfile, void>({
        path: `/api/beneficiary/profile/${profileId}`,
        method: "PUT",
        query: query,
        body: input,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags media-controller
     * @name UploadContentUsingPost
     * @summary uploadContent
     * @request POST:/api/content
     */
    uploadContentUsingPost: (data: { file: File }, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<IdDto, void>({
        path: `/api/content`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags media-controller
     * @name RemoveContentUsingDelete
     * @summary removeContent
     * @request DELETE:/api/content/{contentId}
     */
    removeContentUsingDelete: (contentId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/content/${contentId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags media-controller
     * @name GetMediaUsingGet
     * @summary getMedia
     * @request GET:/api/content/{id}
     */
    getMediaUsingGet: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/content/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags financial-account-info-controller
     * @name AddFinancialAccountInfoUsingPost
     * @summary addFinancialAccountInfo
     * @request POST:/api/financial-account-info
     */
    addFinancialAccountInfoUsingPost: (financialAccountInfo: FinancialAccountInfo, params: RequestParams = {}) =>
      this.request<FinancialAccountInfo, void>({
        path: `/api/financial-account-info`,
        method: "POST",
        body: financialAccountInfo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags financial-account-info-controller
     * @name GetOptionalFinancialAccountInfoByAccountNumberUsingGet
     * @summary getOptionalFinancialAccountInfoByAccountNumber
     * @request GET:/api/financial-account-info/account-number
     */
    getOptionalFinancialAccountInfoByAccountNumberUsingGet: (
      financialAccountNumberLookup: FinancialAccountNumberLookup,
      params: RequestParams = {},
    ) =>
      this.request<FinancialAccountInfo, void>({
        path: `/api/financial-account-info/account-number`,
        method: "GET",
        body: financialAccountNumberLookup,
        ...params,
      }),

    /**
     * No description
     *
     * @tags financial-account-info-controller
     * @name FetchFinancialAccountDetailsByFinAccountIdsUsingPost
     * @summary fetchFinancialAccountDetailsByFinAccountIds
     * @request POST:/api/financial-account-info/by-account-ids
     */
    fetchFinancialAccountDetailsByFinAccountIdsUsingPost: (finAccountIds: string[], params: RequestParams = {}) =>
      this.request<FinancialAccountDetailsResponse[], void>({
        path: `/api/financial-account-info/by-account-ids`,
        method: "POST",
        body: finAccountIds,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags financial-account-info-controller
     * @name GetFinancialAccountInfoByIdsUsingPost
     * @summary getFinancialAccountInfoByIds
     * @request POST:/api/financial-account-info/by-ids
     */
    getFinancialAccountInfoByIdsUsingPost: (finAccountInfoIds: string[], params: RequestParams = {}) =>
      this.request<FinancialAccountInfo[], void>({
        path: `/api/financial-account-info/by-ids`,
        method: "POST",
        body: finAccountInfoIds,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags financial-account-info-controller
     * @name GetFinancialAccountInfoByAccountNumberUsingPost
     * @summary getFinancialAccountInfoByAccountNumber
     * @request POST:/api/financial-account-info/by-number
     */
    getFinancialAccountInfoByAccountNumberUsingPost: (
      financialAccountNumberLookup: FinancialAccountNumberLookup,
      params: RequestParams = {},
    ) =>
      this.request<FinancialAccountInfo, void>({
        path: `/api/financial-account-info/by-number`,
        method: "POST",
        body: financialAccountNumberLookup,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags financial-account-info-controller
     * @name SetNicknameUsingPut
     * @summary Sets or resets nickname for a given financial account
     * @request PUT:/api/financial-account-info/rename
     */
    setNicknameUsingPut: (request: UpdateAccountNicknameRequest, params: RequestParams = {}) =>
      this.request<FinancialAccountInfo, void>({
        path: `/api/financial-account-info/rename`,
        method: "PUT",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-controller
     * @name GetFinancialAdvisorInfoUsingPost
     * @summary getFinancialAdvisorInfo
     * @request POST:/api/financial-advisor-info
     */
    getFinancialAdvisorInfoUsingPost: (
      financialAdvisorProfileRequest: FinancialAdvisorProfileRequest,
      params: RequestParams = {},
    ) =>
      this.request<FinancialAdvisorProfileReponse, void>({
        path: `/api/financial-advisor-info`,
        method: "POST",
        body: financialAdvisorProfileRequest,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags help-controller
     * @name HelpUsingGet
     * @summary help
     * @request GET:/api/help
     */
    helpUsingGet: (params: RequestParams = {}) =>
      this.request<ResponseEntity, void>({
        path: `/api/help`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization-address-controller
     * @name SaveAddressUsingPut
     * @summary saveAddress
     * @request PUT:/api/organization-address
     */
    saveAddressUsingPut: (input: OrganizationAddressPut, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<OrganizationAddressResponse, void>({
        path: `/api/organization-address`,
        method: "PUT",
        query: query,
        body: input,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags organization-address-controller
     * @name GetAddressUsingGet
     * @summary getAddress
     * @request GET:/api/organization-address/{id}
     */
    getAddressUsingGet: (id: string, params: RequestParams = {}) =>
      this.request<Address, void>({
        path: `/api/organization-address/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-controller-v-2
     * @name GetProfileAddressUsingPost1
     * @summary getProfileAddress
     * @request POST:/api/orgs/{orgId}/user-profiles/profile-addresses
     */
    getProfileAddressUsingPost1: (orgId: string, ids: string[], params: RequestParams = {}) =>
      this.request<ProfileAddress[], void>({
        path: `/api/orgs/${orgId}/user-profiles/profile-addresses`,
        method: "POST",
        body: ids,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ping-controller
     * @name PingUsingGet
     * @summary ping
     * @request GET:/api/ping
     */
    pingUsingGet: (params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/api/ping`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-address-controller
     * @name SaveAddressUsingPut1
     * @summary saveAddress
     * @request PUT:/api/profile-address
     */
    saveAddressUsingPut1: (input: ProfileAddressPut, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<ProfileAddressResponse, void>({
        path: `/api/profile-address`,
        method: "PUT",
        query: query,
        body: input,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-address-controller
     * @name GetAddressUsingGet1
     * @summary getAddress
     * @request GET:/api/profile-address/{id}
     */
    getAddressUsingGet1: (id: string, params: RequestParams = {}) =>
      this.request<Address, void>({
        path: `/api/profile-address/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-address-controller
     * @name SaveProfileAddressUsingPost
     * @summary saveProfileAddress
     * @request POST:/api/profile-address/{profileId}
     */
    saveProfileAddressUsingPost: (
      profileId: string,
      address: Address,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<ProfileAddressResponse, void>({
        path: `/api/profile-address/${profileId}`,
        method: "POST",
        query: query,
        body: address,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags profile-address-controller
     * @name UpdateAddressByProfileIdAndAddressTypeUsingPut
     * @summary updateAddressByProfileIdAndAddressType
     * @request PUT:/api/profile-address/{profileId}
     */
    updateAddressByProfileIdAndAddressTypeUsingPut: (
      profileId: string,
      address: Address,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/profile-address/${profileId}`,
        method: "PUT",
        query: query,
        body: address,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-controller
     * @name UploadAvatarUsingPost
     * @summary uploadAvatar
     * @request POST:/api/profile-images
     */
    uploadAvatarUsingPost: (data: { file: File }, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<IdDto, void>({
        path: `/api/profile-images`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-controller
     * @name GetProfileImageUrlUsingGet
     * @summary getProfileImageUrl
     * @request GET:/api/profile-images/{imageId}
     */
    getProfileImageUrlUsingGet: (imageId: string, params: RequestParams = {}) =>
      this.request<UrlDto, void>({
        path: `/api/profile-images/${imageId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-controller
     * @name RemoveAvatarUsingDelete
     * @summary removeAvatar
     * @request DELETE:/api/profile-images/{imageId}
     */
    removeAvatarUsingDelete: (imageId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/profile-images/${imageId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags trust-details-controller
     * @name CreateTrustDetailsUsingPost
     * @summary createTrustDetails
     * @request POST:/api/trust-details
     */
    createTrustDetailsUsingPost: (trustDetailsDto: TrustDetailsDto, params: RequestParams = {}) =>
      this.request<TrustDetailsDto, void>({
        path: `/api/trust-details`,
        method: "POST",
        body: trustDetailsDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trust-details-controller
     * @name UpdateTrustDetailsUsingPut
     * @summary updateTrustDetails
     * @request PUT:/api/trust-details
     */
    updateTrustDetailsUsingPut: (trustDetailsDto: TrustDetailsDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/trust-details`,
        method: "PUT",
        body: trustDetailsDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trust-details-controller
     * @name GetTrustDetailsUsingGet
     * @summary getTrustDetails
     * @request GET:/api/trust-details/{id}
     */
    getTrustDetailsUsingGet: (id: string, params: RequestParams = {}) =>
      this.request<TrustDetailsDto, void>({
        path: `/api/trust-details/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-controller
     * @name AddNewUserProfileUsingPost
     * @summary addNewUserProfile
     * @request POST:/api/user-profiles
     */
    addNewUserProfileUsingPost: (input: ProfilePost, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<UserProfile, void>({
        path: `/api/user-profiles`,
        method: "POST",
        query: query,
        body: input,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-controller
     * @name GetUserProfileByIdUsingPost
     * @summary getUserProfileById
     * @request POST:/api/user-profiles-by-ids
     */
    getUserProfileByIdUsingPost: (ids: string[], params: RequestParams = {}) =>
      this.request<UserProfile[], void>({
        path: `/api/user-profiles-by-ids`,
        method: "POST",
        body: ids,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-controller
     * @name UpdateContactEmailUserProfileUsingPut
     * @summary updateContactEmailUserProfile
     * @request PUT:/api/user-profiles/contact-email/{profileId}
     */
    updateContactEmailUserProfileUsingPut: (
      profileId: string,
      input: ChangeContactEmailRequest,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<UserProfile, void>({
        path: `/api/user-profiles/contact-email/${profileId}`,
        method: "PUT",
        query: query,
        body: input,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-controller
     * @name GetProfileAddressUsingPost
     * @summary getProfileAddress
     * @request POST:/api/user-profiles/profile-addresses
     */
    getProfileAddressUsingPost: (ids: string[], params: RequestParams = {}) =>
      this.request<ProfileAddress[], void>({
        path: `/api/user-profiles/profile-addresses`,
        method: "POST",
        body: ids,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-controller
     * @name GetUnassignedUsersUsingPost
     * @summary getUnassignedUsers
     * @request POST:/api/user-profiles/unassigned-users
     */
    getUnassignedUsersUsingPost: (ids: string[], params: RequestParams = {}) =>
      this.request<UnassignedAccount[], void>({
        path: `/api/user-profiles/unassigned-users`,
        method: "POST",
        body: ids,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-controller
     * @name GetUserProfileByIdUsingGet
     * @summary getUserProfileById
     * @request GET:/api/user-profiles/{profileId}
     */
    getUserProfileByIdUsingGet: (profileId: string, params: RequestParams = {}) =>
      this.request<UserProfile, void>({
        path: `/api/user-profiles/${profileId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-controller
     * @name UpdateUserProfileUsingPut
     * @summary updateUserProfile
     * @request PUT:/api/user-profiles/{profileId}
     */
    updateUserProfileUsingPut: (
      profileId: string,
      input: ProfilePost,
      query?: { name?: string; patch?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<UserProfile, void>({
        path: `/api/user-profiles/${profileId}`,
        method: "PUT",
        query: query,
        body: input,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-controller
     * @name GetUserProfileAddressUsingGet
     * @summary getUserProfileAddress
     * @request GET:/api/user-profiles/{profileId}/address
     */
    getUserProfileAddressUsingGet: (profileId: string, params: RequestParams = {}) =>
      this.request<Address, void>({
        path: `/api/user-profiles/${profileId}/address`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-controller
     * @name UpdateUserProfileAddressUsingPut
     * @summary updateUserProfileAddress
     * @request PUT:/api/user-profiles/{profileId}/address
     */
    updateUserProfileAddressUsingPut: (
      profileId: string,
      address: Address,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<Address, void>({
        path: `/api/user-profiles/${profileId}/address`,
        method: "PUT",
        query: query,
        body: address,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name UpdateBeneficiaryProfileUsingPut1
     * @summary updateBeneficiaryProfile
     * @request PUT:/api/v2/beneficiary/profile/{profileId}
     * @deprecated
     */
    updateBeneficiaryProfileUsingPut1: (
      profileId: string,
      dto: UserProfileDto,
      query?: { name?: string; patch?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<UserProfile, void>({
        path: `/api/v2/beneficiary/profile/${profileId}`,
        method: "PUT",
        query: query,
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name UpdateBrokerageAccountProfileUsingPut
     * @summary updateBrokerageAccountProfile
     * @request PUT:/api/v2/brokerage-account/profile/{profileId}
     */
    updateBrokerageAccountProfileUsingPut: (
      profileId: string,
      dto: UserProfileDto,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<UserProfile, void>({
        path: `/api/v2/brokerage-account/profile/${profileId}`,
        method: "PUT",
        query: query,
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name GetFinancialAdvisorInfoUsingPost1
     * @summary getFinancialAdvisorInfo
     * @request POST:/api/v2/financial-advisor-info
     */
    getFinancialAdvisorInfoUsingPost1: (
      financialAdvisorProfileRequest: FinancialAdvisorProfileRequest,
      params: RequestParams = {},
    ) =>
      this.request<FinancialAdvisorProfileReponse, void>({
        path: `/api/v2/financial-advisor-info`,
        method: "POST",
        body: financialAdvisorProfileRequest,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name UploadAvatarUsingPost1
     * @summary uploadAvatar
     * @request POST:/api/v2/profile-images
     */
    uploadAvatarUsingPost1: (data: { file: File }, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<IdDto, void>({
        path: `/api/v2/profile-images`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name GetProfileImageUrlUsingGet1
     * @summary getProfileImageUrl
     * @request GET:/api/v2/profile-images/{imageId}
     */
    getProfileImageUrlUsingGet1: (imageId: string, params: RequestParams = {}) =>
      this.request<UrlDto, void>({
        path: `/api/v2/profile-images/${imageId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name RemoveAvatarUsingDelete1
     * @summary removeAvatar
     * @request DELETE:/api/v2/profile-images/{imageId}
     */
    removeAvatarUsingDelete1: (imageId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/v2/profile-images/${imageId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name GetOriginalProfilesWithSpacesUsingGet
     * @summary getOriginalProfilesWithSpaces
     * @request GET:/api/v2/user-profile/getOriginalProfilesWithSpaces
     */
    getOriginalProfilesWithSpacesUsingGet: (params: RequestParams = {}) =>
      this.request<UserProfile[], void>({
        path: `/api/v2/user-profile/getOriginalProfilesWithSpaces`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name UpdateFirstAndLastNamesRemoveSpacesUsingPut
     * @summary updateFirstAndLastNamesRemoveSpaces
     * @request PUT:/api/v2/user-profile/remove/spaces
     */
    updateFirstAndLastNamesRemoveSpacesUsingPut: (params: RequestParams = {}) =>
      this.request<UserProfile[], void>({
        path: `/api/v2/user-profile/remove/spaces`,
        method: "PUT",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name RollbackRemoveSpacesSpacesUsingPut
     * @summary rollbackRemoveSpacesSpaces
     * @request PUT:/api/v2/user-profile/rollback/spaces
     */
    rollbackRemoveSpacesSpacesUsingPut: (originalProfiles: UserProfile[], params: RequestParams = {}) =>
      this.request<UserProfile[], void>({
        path: `/api/v2/user-profile/rollback/spaces`,
        method: "PUT",
        body: originalProfiles,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name GetUserProfilesByEmailAndProfileTypeUsingGet
     * @summary getUserProfilesByEmailAndProfileType
     * @request GET:/api/v2/user-profiles
     */
    getUserProfilesByEmailAndProfileTypeUsingGet: (
      query: {
        email: string;
        profileType:
          | "BENEFICIARY"
          | "BENEFICIARY_ENTITY"
          | "TRUSTED_CONTACT"
          | "ENTITY"
          | "ENTITY_CONTACT"
          | "ADVISOR"
          | "CLIENT"
          | "MINOR"
          | "CORPORATION_MEMBER"
          | "EMPLOYER";
      },
      params: RequestParams = {},
    ) =>
      this.request<UserProfile[], void>({
        path: `/api/v2/user-profiles`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name AddNewUserProfileUsingPost1
     * @summary addNewUserProfile
     * @request POST:/api/v2/user-profiles
     */
    addNewUserProfileUsingPost1: (dto: UserProfileDto, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<UserProfile, void>({
        path: `/api/v2/user-profiles`,
        method: "POST",
        query: query,
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name GetUserProfilesByEmailUsingGet
     * @summary getUserProfilesByEmail
     * @request GET:/api/v2/user-profiles-by-email
     */
    getUserProfilesByEmailUsingGet: (query: { email: string }, params: RequestParams = {}) =>
      this.request<UserProfile[], void>({
        path: `/api/v2/user-profiles-by-email`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name GetUserProfileByIdUsingPost1
     * @summary getUserProfileById
     * @request POST:/api/v2/user-profiles-by-ids
     */
    getUserProfileByIdUsingPost1: (ids: string[], params: RequestParams = {}) =>
      this.request<UserProfile[], void>({
        path: `/api/v2/user-profiles-by-ids`,
        method: "POST",
        body: ids,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name GetUserProfilesByProfileIdsUsingPost
     * @summary getUserProfilesByProfileIds
     * @request POST:/api/v2/user-profiles/_search
     */
    getUserProfilesByProfileIdsUsingPost: (
      userProfileBulkRequest: UserProfileBulkRequest,
      params: RequestParams = {},
    ) =>
      this.request<PageResponseUserProfileDto, void>({
        path: `/api/v2/user-profiles/_search`,
        method: "POST",
        body: userProfileBulkRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name GetProfileAddressUsingPost2
     * @summary getProfileAddress
     * @request POST:/api/v2/user-profiles/profile-addresses
     */
    getProfileAddressUsingPost2: (ids: string[], params: RequestParams = {}) =>
      this.request<ProfileAddress[], void>({
        path: `/api/v2/user-profiles/profile-addresses`,
        method: "POST",
        body: ids,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name GetUnassignedUsersUsingPost1
     * @summary getUnassignedUsers
     * @request POST:/api/v2/user-profiles/unassigned-users
     */
    getUnassignedUsersUsingPost1: (ids: string[], params: RequestParams = {}) =>
      this.request<UnassignedAccount[], void>({
        path: `/api/v2/user-profiles/unassigned-users`,
        method: "POST",
        body: ids,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name GetUserProfileByIdUsingGet1
     * @summary getUserProfileById
     * @request GET:/api/v2/user-profiles/{profileId}
     */
    getUserProfileByIdUsingGet1: (profileId: string, params: RequestParams = {}) =>
      this.request<UserProfile, void>({
        path: `/api/v2/user-profiles/${profileId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name UpdateUserProfileUsingPut1
     * @summary updateUserProfile
     * @request PUT:/api/v2/user-profiles/{profileId}
     */
    updateUserProfileUsingPut1: (
      profileId: string,
      dto: UserProfileDto,
      query?: { name?: string; patch?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<UserProfile, void>({
        path: `/api/v2/user-profiles/${profileId}`,
        method: "PUT",
        query: query,
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name DeleteUserProfileUsingDelete
     * @summary Deletes the given team-member / advisor by profile id
     * @request DELETE:/api/v2/user-profiles/{profileId}
     */
    deleteUserProfileUsingDelete: (profileId: string, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/v2/user-profiles/${profileId}`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name GetUserProfileAddressUsingGet1
     * @summary getUserProfileAddress
     * @request GET:/api/v2/user-profiles/{profileId}/address
     */
    getUserProfileAddressUsingGet1: (profileId: string, params: RequestParams = {}) =>
      this.request<Address, void>({
        path: `/api/v2/user-profiles/${profileId}/address`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-profile-ctrl
     * @name UpdateUserProfileAddressUsingPut1
     * @summary updateUserProfileAddress
     * @request PUT:/api/v2/user-profiles/{profileId}/address
     */
    updateUserProfileAddressUsingPut1: (
      profileId: string,
      address: Address,
      query?: { name?: string },
      params: RequestParams = {},
    ) =>
      this.request<Address, void>({
        path: `/api/v2/user-profiles/${profileId}/address`,
        method: "PUT",
        query: query,
        body: address,
        type: ContentType.Json,
        ...params,
      }),
  };
}
