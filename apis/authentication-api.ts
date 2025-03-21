/* tslint:disable */
/* eslint-disable */
/**
 * TDEI Gateway Dev API
 * This is an API for interacting with the Transportation Data Equity Initiative (TDEI) system. It is intended for applications submitting data to and consuming data from the TDEI system. We currently support GTFS-Pathways, GTFS-Flex and OpenSidewalks (OSW) data schemas.
 *
 * OpenAPI spec version: v0.1
 * Contact: admin@tdei.us
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { LoginModel } from '../models';
import { TokenResponse } from '../models';
/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Authenticates the user with the TDEI system. Returns an access token, if successfully authenticated.
         * @summary Authenticates the user with the TDEI system.
         * @param {LoginModel} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authenticate: async (body: LoginModel, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling authenticate.');
            }
            const localVarPath = `/api/v1/authenticate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("x-api-key")
                    : await configuration.apiKey;
                localVarHeaderParameter["x-api-key"] = localVarApiKeyValue;
            }

            // authentication AuthorizationToken required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This request initiates a password recovery process for the specified email address. Upon submission, the system sends an email containing a link that the user can follow to reset their password. This allows users to securely update their password if they have forgotten it or wish to change it for security reasons.
         * @summary Request for password recovery
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recoverPassword: async (body: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling recoverPassword.');
            }
            const localVarPath = `/api/v1/recover-password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("x-api-key")
                    : await configuration.apiKey;
                localVarHeaderParameter["x-api-key"] = localVarApiKeyValue;
            }

            // authentication AuthorizationToken required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'text/plain';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Re-issues an access token, if a valid refresh token is sent to the server
         * @summary Re-issue an access token
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshToken: async (body: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling refreshToken.');
            }
            const localVarPath = `/api/v1/refresh-token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("x-api-key")
                    : await configuration.apiKey;
                localVarHeaderParameter["x-api-key"] = localVarApiKeyValue;
            }

            // authentication AuthorizationToken required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Regenerates the API key for the user. The old API key will be invalidated and a new API key will be generated.
         * @summary Regenerates the API key for the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        regenerateApiKey: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/regenerate-api-key`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AuthorizationToken required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This request sends an email verification link to the specified email address. The email verification link is initially sent following successful registration. If the user does not receive the initial verification email, they can request to have the verification link resent.
         * @summary Request for email verification link
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyEmail: async (body: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling verifyEmail.');
            }
            const localVarPath = `/api/v1/verify-email`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("x-api-key")
                    : await configuration.apiKey;
                localVarHeaderParameter["x-api-key"] = localVarApiKeyValue;
            }

            // authentication AuthorizationToken required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'text/plain';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Authenticates the user with the TDEI system. Returns an access token, if successfully authenticated.
         * @summary Authenticates the user with the TDEI system.
         * @param {LoginModel} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authenticate(body: LoginModel, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<TokenResponse>>> {
            const localVarAxiosArgs = await AuthenticationApiAxiosParamCreator(configuration).authenticate(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This request initiates a password recovery process for the specified email address. Upon submission, the system sends an email containing a link that the user can follow to reset their password. This allows users to securely update their password if they have forgotten it or wish to change it for security reasons.
         * @summary Request for password recovery
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async recoverPassword(body: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await AuthenticationApiAxiosParamCreator(configuration).recoverPassword(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Re-issues an access token, if a valid refresh token is sent to the server
         * @summary Re-issue an access token
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async refreshToken(body: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<TokenResponse>>> {
            const localVarAxiosArgs = await AuthenticationApiAxiosParamCreator(configuration).refreshToken(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Regenerates the API key for the user. The old API key will be invalidated and a new API key will be generated.
         * @summary Regenerates the API key for the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async regenerateApiKey(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await AuthenticationApiAxiosParamCreator(configuration).regenerateApiKey(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This request sends an email verification link to the specified email address. The email verification link is initially sent following successful registration. If the user does not receive the initial verification email, they can request to have the verification link resent.
         * @summary Request for email verification link
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyEmail(body: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await AuthenticationApiAxiosParamCreator(configuration).verifyEmail(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Authenticates the user with the TDEI system. Returns an access token, if successfully authenticated.
         * @summary Authenticates the user with the TDEI system.
         * @param {LoginModel} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authenticate(body: LoginModel, options?: AxiosRequestConfig): Promise<AxiosResponse<TokenResponse>> {
            return AuthenticationApiFp(configuration).authenticate(body, options).then((request) => request(axios, basePath));
        },
        /**
         * This request initiates a password recovery process for the specified email address. Upon submission, the system sends an email containing a link that the user can follow to reset their password. This allows users to securely update their password if they have forgotten it or wish to change it for security reasons.
         * @summary Request for password recovery
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async recoverPassword(body: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return AuthenticationApiFp(configuration).recoverPassword(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Re-issues an access token, if a valid refresh token is sent to the server
         * @summary Re-issue an access token
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async refreshToken(body: string, options?: AxiosRequestConfig): Promise<AxiosResponse<TokenResponse>> {
            return AuthenticationApiFp(configuration).refreshToken(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Regenerates the API key for the user. The old API key will be invalidated and a new API key will be generated.
         * @summary Regenerates the API key for the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async regenerateApiKey(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return AuthenticationApiFp(configuration).regenerateApiKey(options).then((request) => request(axios, basePath));
        },
        /**
         * This request sends an email verification link to the specified email address. The email verification link is initially sent following successful registration. If the user does not receive the initial verification email, they can request to have the verification link resent.
         * @summary Request for email verification link
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyEmail(body: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return AuthenticationApiFp(configuration).verifyEmail(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI {
    /**
     * Authenticates the user with the TDEI system. Returns an access token, if successfully authenticated.
     * @summary Authenticates the user with the TDEI system.
     * @param {LoginModel} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public async authenticate(body: LoginModel, options?: AxiosRequestConfig) : Promise<AxiosResponse<TokenResponse>> {
        return AuthenticationApiFp(this.configuration).authenticate(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This request initiates a password recovery process for the specified email address. Upon submission, the system sends an email containing a link that the user can follow to reset their password. This allows users to securely update their password if they have forgotten it or wish to change it for security reasons.
     * @summary Request for password recovery
     * @param {string} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public async recoverPassword(body: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return AuthenticationApiFp(this.configuration).recoverPassword(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Re-issues an access token, if a valid refresh token is sent to the server
     * @summary Re-issue an access token
     * @param {string} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public async refreshToken(body: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<TokenResponse>> {
        return AuthenticationApiFp(this.configuration).refreshToken(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Regenerates the API key for the user. The old API key will be invalidated and a new API key will be generated.
     * @summary Regenerates the API key for the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public async regenerateApiKey(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return AuthenticationApiFp(this.configuration).regenerateApiKey(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This request sends an email verification link to the specified email address. The email verification link is initially sent following successful registration. If the user does not receive the initial verification email, they can request to have the verification link resent.
     * @summary Request for email verification link
     * @param {string} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public async verifyEmail(body: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return AuthenticationApiFp(this.configuration).verifyEmail(body, options).then((request) => request(this.axios, this.basePath));
    }
}
