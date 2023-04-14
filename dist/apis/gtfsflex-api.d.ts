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
import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GtfsFlexDownload } from '../models';
import { GtfsFlexServiceModel } from '../models';
import { GtfsFlexUpload } from '../models';
import { VersionList } from '../models';
/**
 * GTFSFlexApi - axios parameter creator
 * @export
 */
export declare const GTFSFlexApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * returns a specific gtfs_flex file identified by the tdei_record_id
     * @summary returns a gtfs_flex file
     * @param {string} tdei_record_id tdei_record_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFlexFile: (tdei_record_id: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This endpoint returns a json list of all gtfs flex files stored in the TDEI system that meet the specified criteria. Criteria that can be specified include: polygon (bounding box), minimum confidence level, flex version, date time and organization id.  This endpoint can be used by an application developer to obtain a list of gtfs flex files in the TDEI system meeting the specified criteria. This endpoint returns a list of file-metadata including the uris of the file, which can be used to fetch the files themselves.
     * @summary List flex files meeting specified criteria.
     * @param {string} [tdei_service_id] Id of the flex service.
     * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
     * @param {string} [flex_schema_version] version name of the flex schema version that the application requests. list of versions can be found with /api/v1/gtfs-flex/versions.
     * @param {string} [_tdei_org_id] tdei-assigned organization id. Represented as a UUID.
     * @param {string} [date_time] date-time for which the caller is interested in obtaining files. all files that are valid at the specified date-time and meet the other criteria will be returned.
     * @param {string} [tdei_record_id] if included, returns the metadata for the specified file, all other parameters will be ignored.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listFlexFiles: (tdei_service_id?: string, bbox?: Array<number>, flex_schema_version?: string, _tdei_org_id?: string, date_time?: string, tdei_record_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Path used to retrieve the list of GTFS Services in the TDEI system. Allows callers to get the tdei_service_id id for a service.  Returns the tdei_service_id and service name for all services in the TDEI system.   If tdei_org_id param is used, will return services for that organization.
     * @summary List GTFS Flex Services
     * @param {string} [tdei_org_id] A tdei-assigned id for an organization. org_ids can be retrieved using the path /api/v1/organizations.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listFlexServices: (tdei_org_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * List GTFS flex versions supported by TDEI.  Returns a json list of the GTFS flex versions supported by TDEI.
     * @summary List available GTFS flex versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listFlexVersions: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This call allows a user to upload or create a new gtfs flex file. The caller must provide metadata about the file. Required metadata includes information about how and when the data was collected and valid dates of the file. Returns the tdei_record_id of the uploaded file.
     * @summary upload a new gtfs_flex file
     * @param {GtfsFlexUpload} meta
     * @param {Blob} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadGtfsFlexFileForm: (meta: GtfsFlexUpload, file: Blob, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GTFSFlexApi - functional programming interface
 * @export
 */
export declare const GTFSFlexApiFp: (configuration?: Configuration) => {
    /**
     * returns a specific gtfs_flex file identified by the tdei_record_id
     * @summary returns a gtfs_flex file
     * @param {string} tdei_record_id tdei_record_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFlexFile(tdei_record_id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     * This endpoint returns a json list of all gtfs flex files stored in the TDEI system that meet the specified criteria. Criteria that can be specified include: polygon (bounding box), minimum confidence level, flex version, date time and organization id.  This endpoint can be used by an application developer to obtain a list of gtfs flex files in the TDEI system meeting the specified criteria. This endpoint returns a list of file-metadata including the uris of the file, which can be used to fetch the files themselves.
     * @summary List flex files meeting specified criteria.
     * @param {string} [tdei_service_id] Id of the flex service.
     * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
     * @param {string} [flex_schema_version] version name of the flex schema version that the application requests. list of versions can be found with /api/v1/gtfs-flex/versions.
     * @param {string} [_tdei_org_id] tdei-assigned organization id. Represented as a UUID.
     * @param {string} [date_time] date-time for which the caller is interested in obtaining files. all files that are valid at the specified date-time and meet the other criteria will be returned.
     * @param {string} [tdei_record_id] if included, returns the metadata for the specified file, all other parameters will be ignored.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listFlexFiles(tdei_service_id?: string, bbox?: Array<number>, flex_schema_version?: string, _tdei_org_id?: string, date_time?: string, tdei_record_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<GtfsFlexDownload>>>>;
    /**
     * Path used to retrieve the list of GTFS Services in the TDEI system. Allows callers to get the tdei_service_id id for a service.  Returns the tdei_service_id and service name for all services in the TDEI system.   If tdei_org_id param is used, will return services for that organization.
     * @summary List GTFS Flex Services
     * @param {string} [tdei_org_id] A tdei-assigned id for an organization. org_ids can be retrieved using the path /api/v1/organizations.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listFlexServices(tdei_org_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<GtfsFlexServiceModel>>>>;
    /**
     * List GTFS flex versions supported by TDEI.  Returns a json list of the GTFS flex versions supported by TDEI.
     * @summary List available GTFS flex versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listFlexVersions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<VersionList>>>;
    /**
     * This call allows a user to upload or create a new gtfs flex file. The caller must provide metadata about the file. Required metadata includes information about how and when the data was collected and valid dates of the file. Returns the tdei_record_id of the uploaded file.
     * @summary upload a new gtfs_flex file
     * @param {GtfsFlexUpload} meta
     * @param {Blob} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadGtfsFlexFileForm(meta: GtfsFlexUpload, file: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>>;
};
/**
 * GTFSFlexApi - factory interface
 * @export
 */
export declare const GTFSFlexApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * returns a specific gtfs_flex file identified by the tdei_record_id
     * @summary returns a gtfs_flex file
     * @param {string} tdei_record_id tdei_record_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFlexFile(tdei_record_id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     * This endpoint returns a json list of all gtfs flex files stored in the TDEI system that meet the specified criteria. Criteria that can be specified include: polygon (bounding box), minimum confidence level, flex version, date time and organization id.  This endpoint can be used by an application developer to obtain a list of gtfs flex files in the TDEI system meeting the specified criteria. This endpoint returns a list of file-metadata including the uris of the file, which can be used to fetch the files themselves.
     * @summary List flex files meeting specified criteria.
     * @param {string} [tdei_service_id] Id of the flex service.
     * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
     * @param {string} [flex_schema_version] version name of the flex schema version that the application requests. list of versions can be found with /api/v1/gtfs-flex/versions.
     * @param {string} [_tdei_org_id] tdei-assigned organization id. Represented as a UUID.
     * @param {string} [date_time] date-time for which the caller is interested in obtaining files. all files that are valid at the specified date-time and meet the other criteria will be returned.
     * @param {string} [tdei_record_id] if included, returns the metadata for the specified file, all other parameters will be ignored.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listFlexFiles(tdei_service_id?: string, bbox?: Array<number>, flex_schema_version?: string, _tdei_org_id?: string, date_time?: string, tdei_record_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<GtfsFlexDownload>>>;
    /**
     * Path used to retrieve the list of GTFS Services in the TDEI system. Allows callers to get the tdei_service_id id for a service.  Returns the tdei_service_id and service name for all services in the TDEI system.   If tdei_org_id param is used, will return services for that organization.
     * @summary List GTFS Flex Services
     * @param {string} [tdei_org_id] A tdei-assigned id for an organization. org_ids can be retrieved using the path /api/v1/organizations.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listFlexServices(tdei_org_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<GtfsFlexServiceModel>>>;
    /**
     * List GTFS flex versions supported by TDEI.  Returns a json list of the GTFS flex versions supported by TDEI.
     * @summary List available GTFS flex versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listFlexVersions(options?: AxiosRequestConfig): Promise<AxiosResponse<VersionList>>;
    /**
     * This call allows a user to upload or create a new gtfs flex file. The caller must provide metadata about the file. Required metadata includes information about how and when the data was collected and valid dates of the file. Returns the tdei_record_id of the uploaded file.
     * @summary upload a new gtfs_flex file
     * @param {GtfsFlexUpload} meta
     * @param {Blob} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadGtfsFlexFileForm(meta: GtfsFlexUpload, file: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<string>>;
};
/**
 * GTFSFlexApi - object-oriented interface
 * @export
 * @class GTFSFlexApi
 * @extends {BaseAPI}
 */
export declare class GTFSFlexApi extends BaseAPI {
    /**
     * returns a specific gtfs_flex file identified by the tdei_record_id
     * @summary returns a gtfs_flex file
     * @param {string} tdei_record_id tdei_record_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GTFSFlexApi
     */
    getFlexFile(tdei_record_id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     * This endpoint returns a json list of all gtfs flex files stored in the TDEI system that meet the specified criteria. Criteria that can be specified include: polygon (bounding box), minimum confidence level, flex version, date time and organization id.  This endpoint can be used by an application developer to obtain a list of gtfs flex files in the TDEI system meeting the specified criteria. This endpoint returns a list of file-metadata including the uris of the file, which can be used to fetch the files themselves.
     * @summary List flex files meeting specified criteria.
     * @param {string} [tdei_service_id] Id of the flex service.
     * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
     * @param {string} [flex_schema_version] version name of the flex schema version that the application requests. list of versions can be found with /api/v1/gtfs-flex/versions.
     * @param {string} [_tdei_org_id] tdei-assigned organization id. Represented as a UUID.
     * @param {string} [date_time] date-time for which the caller is interested in obtaining files. all files that are valid at the specified date-time and meet the other criteria will be returned.
     * @param {string} [tdei_record_id] if included, returns the metadata for the specified file, all other parameters will be ignored.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GTFSFlexApi
     */
    listFlexFiles(tdei_service_id?: string, bbox?: Array<number>, flex_schema_version?: string, _tdei_org_id?: string, date_time?: string, tdei_record_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<GtfsFlexDownload>>>;
    /**
     * Path used to retrieve the list of GTFS Services in the TDEI system. Allows callers to get the tdei_service_id id for a service.  Returns the tdei_service_id and service name for all services in the TDEI system.   If tdei_org_id param is used, will return services for that organization.
     * @summary List GTFS Flex Services
     * @param {string} [tdei_org_id] A tdei-assigned id for an organization. org_ids can be retrieved using the path /api/v1/organizations.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GTFSFlexApi
     */
    listFlexServices(tdei_org_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<GtfsFlexServiceModel>>>;
    /**
     * List GTFS flex versions supported by TDEI.  Returns a json list of the GTFS flex versions supported by TDEI.
     * @summary List available GTFS flex versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GTFSFlexApi
     */
    listFlexVersions(options?: AxiosRequestConfig): Promise<AxiosResponse<VersionList>>;
    /**
     * This call allows a user to upload or create a new gtfs flex file. The caller must provide metadata about the file. Required metadata includes information about how and when the data was collected and valid dates of the file. Returns the tdei_record_id of the uploaded file.
     * @summary upload a new gtfs_flex file
     * @param {GtfsFlexUpload} meta
     * @param {Blob} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GTFSFlexApi
     */
    uploadGtfsFlexFileForm(meta: GtfsFlexUpload, file: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<string>>;
}
