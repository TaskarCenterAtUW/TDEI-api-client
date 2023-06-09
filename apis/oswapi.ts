/* tslint:disable */
/* eslint-disable */
/**
 * TDEI Gateway API
 * This is an API for publishing data to the Transportation Data Equity Initiative (TDEI) data system. This API is intended for applications producing data for and consuming data from the TDEI system. This API supports publishing of GTFS-Pathways, GTFS-Flex v2 and OpenSidewalks data to the TDEI.
 *
 * OpenAPI spec version: v0.1
 * Contact: placeholder_support@transequity.cs.washington.edu
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
import { OswDownload } from '../models';
import { OswUpload } from '../models';
import { VersionList } from '../models';
/**
 * OSWApi - axios parameter creator
 * @export
 */
export const OSWApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * returns a specific osw file identified by the tdei_record_id
         * @summary returns a geojson osw file
         * @param {string} tdei_record_id tdei_record_id for a file, represented as a uuid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOswFile: async (tdei_record_id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tdei_record_id' is not null or undefined
            if (tdei_record_id === null || tdei_record_id === undefined) {
                throw new RequiredError('tdei_record_id','Required parameter tdei_record_id was null or undefined when calling getOswFile.');
            }
            const localVarPath = `/api/v1/osw/{tdei_record_id}`
                .replace(`{${"tdei_record_id"}}`, encodeURIComponent(String(tdei_record_id)));
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
         * This endpoint returns a list of url to gzip'd geojson files with osw data that meet the specified criteria. Criteria that can be specified include: a polygon (bounding box), minimum confidence level and osw version. This endpoint can be used by an application developer to obtain a list of osw files in the TDEI system meeting the specified criteria.
         * @summary List osw files meeting criteria.
         * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
         * @param {string} [osw_schema_version] version name of the osw schema version that the application requests. list of versions can be found with /api/v1/osw/versions.
         * @param {string} [_tdei_org_id] tdei-assigned organization id. Represented as a UUID.
         * @param {string} [date_time] date-time for which the caller is interested in obtaining files. all files that are valid at the specified date-time and meet the other criteria will be returned.
         * @param {string} [tdei_record_id] tdei_record_id, unique id represents file.
         * @param {number} [page_no] Integer, defaults to 1.
         * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listOswFiles: async (bbox?: Array<number>, osw_schema_version?: string, _tdei_org_id?: string, date_time?: string, tdei_record_id?: string, page_no?: number, page_size?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/osw`;
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

            if (bbox) {
                localVarQueryParameter['bbox'] = bbox;
            }

            if (osw_schema_version !== undefined) {
                localVarQueryParameter['osw_schema_version'] = osw_schema_version;
            }

            if (_tdei_org_id !== undefined) {
                localVarQueryParameter[' tdei_org_id'] = _tdei_org_id;
            }

            if (date_time !== undefined) {
                localVarQueryParameter['date_time'] = date_time;
            }

            if (tdei_record_id !== undefined) {
                localVarQueryParameter['tdei_record_id'] = tdei_record_id;
            }

            if (page_no !== undefined) {
                localVarQueryParameter['page_no'] = page_no;
            }

            if (page_size !== undefined) {
                localVarQueryParameter['page_size'] = page_size;
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
         * Lists the versions of OSW data which are supported by TDEI.
         * @summary List available OSW versions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listOswVersions: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/osw/versions`;
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
         * This path allows a user to upload or create a new osw file. The caller must provide metadata about the file - includes information about how and when the data was collected and valid dates of the file. Returns the tdei_record_id of the uploaded file.
         * @summary Path used to upload/create a new osw data file.
         * @param {OswUpload} meta 
         * @param {Blob} file 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadOswFileForm: async (meta: OswUpload, file: Blob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'meta' is not null or undefined
            if (meta === null || meta === undefined) {
                throw new RequiredError('meta','Required parameter meta was null or undefined when calling uploadOswFileForm.');
            }
            // verify required parameter 'file' is not null or undefined
            if (file === null || file === undefined) {
                throw new RequiredError('file','Required parameter file was null or undefined when calling uploadOswFileForm.');
            }
            const localVarPath = `/api/v1/osw`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication AuthorizationToken required


            if (meta !== undefined) { 
                localVarFormParams.append('meta', meta as any);
            }

            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OSWApi - functional programming interface
 * @export
 */
export const OSWApiFp = function(configuration?: Configuration) {
    return {
        /**
         * returns a specific osw file identified by the tdei_record_id
         * @summary returns a geojson osw file
         * @param {string} tdei_record_id tdei_record_id for a file, represented as a uuid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOswFile(tdei_record_id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await OSWApiAxiosParamCreator(configuration).getOswFile(tdei_record_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint returns a list of url to gzip'd geojson files with osw data that meet the specified criteria. Criteria that can be specified include: a polygon (bounding box), minimum confidence level and osw version. This endpoint can be used by an application developer to obtain a list of osw files in the TDEI system meeting the specified criteria.
         * @summary List osw files meeting criteria.
         * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
         * @param {string} [osw_schema_version] version name of the osw schema version that the application requests. list of versions can be found with /api/v1/osw/versions.
         * @param {string} [_tdei_org_id] tdei-assigned organization id. Represented as a UUID.
         * @param {string} [date_time] date-time for which the caller is interested in obtaining files. all files that are valid at the specified date-time and meet the other criteria will be returned.
         * @param {string} [tdei_record_id] tdei_record_id, unique id represents file.
         * @param {number} [page_no] Integer, defaults to 1.
         * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listOswFiles(bbox?: Array<number>, osw_schema_version?: string, _tdei_org_id?: string, date_time?: string, tdei_record_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<OswDownload>>>> {
            const localVarAxiosArgs = await OSWApiAxiosParamCreator(configuration).listOswFiles(bbox, osw_schema_version, _tdei_org_id, date_time, tdei_record_id, page_no, page_size, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Lists the versions of OSW data which are supported by TDEI.
         * @summary List available OSW versions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listOswVersions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<VersionList>>> {
            const localVarAxiosArgs = await OSWApiAxiosParamCreator(configuration).listOswVersions(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This path allows a user to upload or create a new osw file. The caller must provide metadata about the file - includes information about how and when the data was collected and valid dates of the file. Returns the tdei_record_id of the uploaded file.
         * @summary Path used to upload/create a new osw data file.
         * @param {OswUpload} meta 
         * @param {Blob} file 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadOswFileForm(meta: OswUpload, file: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>> {
            const localVarAxiosArgs = await OSWApiAxiosParamCreator(configuration).uploadOswFileForm(meta, file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * OSWApi - factory interface
 * @export
 */
export const OSWApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * returns a specific osw file identified by the tdei_record_id
         * @summary returns a geojson osw file
         * @param {string} tdei_record_id tdei_record_id for a file, represented as a uuid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOswFile(tdei_record_id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return OSWApiFp(configuration).getOswFile(tdei_record_id, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint returns a list of url to gzip'd geojson files with osw data that meet the specified criteria. Criteria that can be specified include: a polygon (bounding box), minimum confidence level and osw version. This endpoint can be used by an application developer to obtain a list of osw files in the TDEI system meeting the specified criteria.
         * @summary List osw files meeting criteria.
         * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
         * @param {string} [osw_schema_version] version name of the osw schema version that the application requests. list of versions can be found with /api/v1/osw/versions.
         * @param {string} [_tdei_org_id] tdei-assigned organization id. Represented as a UUID.
         * @param {string} [date_time] date-time for which the caller is interested in obtaining files. all files that are valid at the specified date-time and meet the other criteria will be returned.
         * @param {string} [tdei_record_id] tdei_record_id, unique id represents file.
         * @param {number} [page_no] Integer, defaults to 1.
         * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listOswFiles(bbox?: Array<number>, osw_schema_version?: string, _tdei_org_id?: string, date_time?: string, tdei_record_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<OswDownload>>> {
            return OSWApiFp(configuration).listOswFiles(bbox, osw_schema_version, _tdei_org_id, date_time, tdei_record_id, page_no, page_size, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the versions of OSW data which are supported by TDEI.
         * @summary List available OSW versions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listOswVersions(options?: AxiosRequestConfig): Promise<AxiosResponse<VersionList>> {
            return OSWApiFp(configuration).listOswVersions(options).then((request) => request(axios, basePath));
        },
        /**
         * This path allows a user to upload or create a new osw file. The caller must provide metadata about the file - includes information about how and when the data was collected and valid dates of the file. Returns the tdei_record_id of the uploaded file.
         * @summary Path used to upload/create a new osw data file.
         * @param {OswUpload} meta 
         * @param {Blob} file 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadOswFileForm(meta: OswUpload, file: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<string>> {
            return OSWApiFp(configuration).uploadOswFileForm(meta, file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OSWApi - object-oriented interface
 * @export
 * @class OSWApi
 * @extends {BaseAPI}
 */
export class OSWApi extends BaseAPI {
    /**
     * returns a specific osw file identified by the tdei_record_id
     * @summary returns a geojson osw file
     * @param {string} tdei_record_id tdei_record_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSWApi
     */
    public async getOswFile(tdei_record_id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return OSWApiFp(this.configuration).getOswFile(tdei_record_id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This endpoint returns a list of url to gzip'd geojson files with osw data that meet the specified criteria. Criteria that can be specified include: a polygon (bounding box), minimum confidence level and osw version. This endpoint can be used by an application developer to obtain a list of osw files in the TDEI system meeting the specified criteria.
     * @summary List osw files meeting criteria.
     * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
     * @param {string} [osw_schema_version] version name of the osw schema version that the application requests. list of versions can be found with /api/v1/osw/versions.
     * @param {string} [_tdei_org_id] tdei-assigned organization id. Represented as a UUID.
     * @param {string} [date_time] date-time for which the caller is interested in obtaining files. all files that are valid at the specified date-time and meet the other criteria will be returned.
     * @param {string} [tdei_record_id] tdei_record_id, unique id represents file.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSWApi
     */
    public async listOswFiles(bbox?: Array<number>, osw_schema_version?: string, _tdei_org_id?: string, date_time?: string, tdei_record_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<OswDownload>>> {
        return OSWApiFp(this.configuration).listOswFiles(bbox, osw_schema_version, _tdei_org_id, date_time, tdei_record_id, page_no, page_size, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Lists the versions of OSW data which are supported by TDEI.
     * @summary List available OSW versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSWApi
     */
    public async listOswVersions(options?: AxiosRequestConfig) : Promise<AxiosResponse<VersionList>> {
        return OSWApiFp(this.configuration).listOswVersions(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This path allows a user to upload or create a new osw file. The caller must provide metadata about the file - includes information about how and when the data was collected and valid dates of the file. Returns the tdei_record_id of the uploaded file.
     * @summary Path used to upload/create a new osw data file.
     * @param {OswUpload} meta 
     * @param {Blob} file 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OSWApi
     */
    public async uploadOswFileForm(meta: OswUpload, file: Blob, options?: AxiosRequestConfig) : Promise<AxiosResponse<string>> {
        return OSWApiFp(this.configuration).uploadOswFileForm(meta, file, options).then((request) => request(this.axios, this.basePath));
    }
}
