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
import { DataMetrics } from '../models';
import { SystemMetrics } from '../models';
/**
 * MetricsApi - axios parameter creator
 * @export
 */
export const MetricsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint provides detailed metrics about datasets categorized by type within the TDEI platform. It includes the total number of datasets and their cumulative size in megabytes for each type, such as osw, flex, and pathways. For the osw type, additional aggregated statistics like the number of crossings, length of sidewalks in kilometers, number of edges and nodes, and the area covered by the concave hull in square kilometers are also provided.
         * @summary Gets the data metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dataMetrics: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/data-metrics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
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
         * Retrieves metrics related to the system and datasets within the TDEI platform. This endpoint provides an overview of usage statistics including the total number of users, services, and project groups, as well as a breakdown of services by type. Additionally, it gives details on dataset uploads, such as the total number of uploads and their cumulative size in megabytes.
         * @summary Gets the system metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        systemMetrics: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/system-metrics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
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
    }
};

/**
 * MetricsApi - functional programming interface
 * @export
 */
export const MetricsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * This endpoint provides detailed metrics about datasets categorized by type within the TDEI platform. It includes the total number of datasets and their cumulative size in megabytes for each type, such as osw, flex, and pathways. For the osw type, additional aggregated statistics like the number of crossings, length of sidewalks in kilometers, number of edges and nodes, and the area covered by the concave hull in square kilometers are also provided.
         * @summary Gets the data metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dataMetrics(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await MetricsApiAxiosParamCreator(configuration).dataMetrics(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieves metrics related to the system and datasets within the TDEI platform. This endpoint provides an overview of usage statistics including the total number of users, services, and project groups, as well as a breakdown of services by type. Additionally, it gives details on dataset uploads, such as the total number of uploads and their cumulative size in megabytes.
         * @summary Gets the system metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async systemMetrics(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await MetricsApiAxiosParamCreator(configuration).systemMetrics(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MetricsApi - factory interface
 * @export
 */
export const MetricsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * This endpoint provides detailed metrics about datasets categorized by type within the TDEI platform. It includes the total number of datasets and their cumulative size in megabytes for each type, such as osw, flex, and pathways. For the osw type, additional aggregated statistics like the number of crossings, length of sidewalks in kilometers, number of edges and nodes, and the area covered by the concave hull in square kilometers are also provided.
         * @summary Gets the data metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dataMetrics(options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return MetricsApiFp(configuration).dataMetrics(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves metrics related to the system and datasets within the TDEI platform. This endpoint provides an overview of usage statistics including the total number of users, services, and project groups, as well as a breakdown of services by type. Additionally, it gives details on dataset uploads, such as the total number of uploads and their cumulative size in megabytes.
         * @summary Gets the system metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async systemMetrics(options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return MetricsApiFp(configuration).systemMetrics(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MetricsApi - object-oriented interface
 * @export
 * @class MetricsApi
 * @extends {BaseAPI}
 */
export class MetricsApi extends BaseAPI {
    /**
     * This endpoint provides detailed metrics about datasets categorized by type within the TDEI platform. It includes the total number of datasets and their cumulative size in megabytes for each type, such as osw, flex, and pathways. For the osw type, additional aggregated statistics like the number of crossings, length of sidewalks in kilometers, number of edges and nodes, and the area covered by the concave hull in square kilometers are also provided.
     * @summary Gets the data metrics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetricsApi
     */
    public async dataMetrics(options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return MetricsApiFp(this.configuration).dataMetrics(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieves metrics related to the system and datasets within the TDEI platform. This endpoint provides an overview of usage statistics including the total number of users, services, and project groups, as well as a breakdown of services by type. Additionally, it gives details on dataset uploads, such as the total number of uploads and their cumulative size in megabytes.
     * @summary Gets the system metrics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetricsApi
     */
    public async systemMetrics(options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return MetricsApiFp(this.configuration).systemMetrics(options).then((request) => request(this.axios, this.basePath));
    }
}
