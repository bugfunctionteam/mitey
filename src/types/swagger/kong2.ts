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

export interface Authorize {
  next?: string | null;
  data: AuthorizeData[];
}

export interface AuthorizeData {
  id: string;
  name: string;
  redirect_uris: string[];
  consumer: { id: string };
  tags?: string[] | null;
  client_secret: string;
  client_id: string;
  hash_secret: boolean;
  client_type: string;
  created_at: number;
}

export interface Authenticate {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  jti: string;
}

export interface AuthenticateRequestBody {
  /** @format uuid */
  user_id: string;
  password: string;
}

export interface AuthorizeRequestBody {
  /** @format uuid */
  client_id?: string;
  scope?: string;

  /** @format uri */
  redirect_uri?: string;
  state?: string;
}

export interface TokenInfo {
  user_name?: string;

  /** @format uuid */
  orgId?: string;
  scope?: string;
  message: string;
}

export interface DefaultError {
  error?: string;
  error_description?: string;
}

export namespace Integrationmanagement {
  /**
   * No description
   * @tags authorize-controller
   * @name GetAuthorizationByClientIdUsingGet
   * @summary getAuthorizationByClientId
   * @request GET:integrationmanagement/oauth2
   */
  export namespace GetAuthorizationByClientIdUsingGet {
    export type RequestParams = {};
    export type RequestQuery = { client_id?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Authorize;
  }
  /**
   * No description
   * @tags authorize-controller
   * @name GetAuthorizationByClientIdUsingPost
   * @summary getAuthorizationByClientId
   * @request POST:integrationmanagement/oauth2
   */
  export namespace GetAuthorizationByClientIdUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AuthorizeRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Authorize;
  }
}

export namespace Idp {
  /**
   * No description
   * @tags authenticate-controller
   * @name GetAuthenticationUsingPost
   * @summary getAuthentication
   * @request POST:/idp/oauth/token
   */
  export namespace GetAuthenticationUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AuthenticateRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = Authenticate;
  }
  /**
   * No description
   * @tags authenticate-controller
   * @name GetTokenInfoUsingGet
   * @summary getAuthentication
   * @request GET:/idp/oauth2/token/introspect
   */
  export namespace GetTokenInfoUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = { Authorization: string };
    export type ResponseBody = TokenInfo;
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
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://localhost:8001" });
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
 * @title Oauth2 Kong Spec
 * @version 1.0.0
 * @license Apache 2.0 (http://www.apache.org/licenses/LICENSE-2.0.html)
 * @baseUrl http://localhost:8001
 * @contact NAME <kyle.williams+swagger@altruist.com>
 *
 * Oauth2 Kong Spec
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  integrationmanagement = {
    /**
     * No description
     *
     * @tags authorize-controller
     * @name GetAuthorizationByClientIdUsingGet
     * @summary getAuthorizationByClientId
     * @request GET:integrationmanagement/oauth2
     */
    getAuthorizationByClientIdUsingGet: (query?: { client_id?: string }, params: RequestParams = {}) =>
      this.request<Authorize, void>({
        path: `integrationmanagement/oauth2`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags authorize-controller
     * @name GetAuthorizationByClientIdUsingPost
     * @summary getAuthorizationByClientId
     * @request POST:integrationmanagement/oauth2
     */
    getAuthorizationByClientIdUsingPost: (body: AuthorizeRequestBody, params: RequestParams = {}) =>
      this.request<Authorize, void>({
        path: `integrationmanagement/oauth2`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        ...params,
      }),
  };
  idp = {
    /**
     * No description
     *
     * @tags authenticate-controller
     * @name GetAuthenticationUsingPost
     * @summary getAuthentication
     * @request POST:/idp/oauth/token
     */
    getAuthenticationUsingPost: (body: AuthenticateRequestBody, params: RequestParams = {}) =>
      this.request<Authenticate, void>({
        path: `/idp/oauth/token`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags authenticate-controller
     * @name GetTokenInfoUsingGet
     * @summary getAuthentication
     * @request GET:/idp/oauth2/token/introspect
     */
    getTokenInfoUsingGet: (params: RequestParams = {}) =>
      this.request<TokenInfo, DefaultError | void>({
        path: `/idp/oauth2/token/introspect`,
        method: "GET",
        ...params,
      }),
  };
}
