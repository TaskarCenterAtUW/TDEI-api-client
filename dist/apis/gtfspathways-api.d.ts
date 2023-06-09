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
import { GtfsPathwaysDownload } from '../models';
import { GtfsPathwaysUpload } from '../models';
import { Station } from '../models';
import { VersionList } from '../models';
/**
 * GTFSPathwaysApi - axios parameter creator
 * @export
 */
export declare const GTFSPathwaysApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * returns a specific gtfs_pathways file identified by the tdei_record_id
     * @summary returns a gtfs_pathways file
     * @param {string} tdei_record_id tdei_record_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPathwaysFile: (tdei_record_id: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This endpoint returns a json list of all gtfs pathways files stored in the TDEI system that meet the specified criteria. Criteria that can be specified include: polygon (bounding box), minimum confidence level, pathways version, date time and agency id.  This endpoint can be used by an application developer to obtain a list of gtfs pathways files in the TDEI system meeting the specified criteria. This endpoint returns a list of file-metadata including the uris of the file, which can be used to fetch the files themselves.
     * @summary List pathways files meeting criteria.
     * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
     * @param {string} [tdei_station_id] Id of a station in the tdei system. gtfs station ids may not be unique.
     * @param {string} [pathways_schema_version] version name of the pathways schema version that the application requests. list of versions can be found with /api/v1/gtfs-pathways/versions
     * @param {string} [date_time] date-time for which the caller is interested in obtaining files. all files that are valid at the specified date-time and meet the other criteria will be returned.
     * @param {string} [tdei_org_id] tdei-assigned organization id. Represented as a UUID.
     * @param {string} [tdei_record_id] tdei_record_id, unique id represents file.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPathwaysFiles: (bbox?: Array<number>, tdei_station_id?: string, pathways_schema_version?: string, date_time?: string, tdei_org_id?: string, tdei_record_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Lists the versions of GTFS pathways data which are supported by TDEI. Returns a json list of the GTFS pathways versions supported by TDEI.
     * @summary List available GTFS Pathways versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPathwaysVersions: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Path used to retrieve the list of stations with data in the TDEI system. Allows callers to get the tdei_station_id id for a station.  Returns the tdei_station_id and station information for all stations with data in the TDEI system.  If tdei_org_id param is specified, will return stations for that organization.
     * @summary List Stations
     * @param {string} [tdei_org_id] TDEI organization id.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listStations: (tdei_org_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This call allows a user to upload or create a new gtfs pathways file. The caller must provide metadata about the file. Required metadata includes information about how and when the data was collected and valid dates of the file. Returns the tdei_record_id of the uploaded file.
     * @summary create pathways file
     * @param {GtfsPathwaysUpload} meta
     * @param {Blob} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadPathwaysFileForm: (meta: GtfsPathwaysUpload, file: Blob, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GTFSPathwaysApi - functional programming interface
 * @export
 */
export declare const GTFSPathwaysApiFp: (configuration?: Configuration) => {
    /**
     * returns a specific gtfs_pathways file identified by the tdei_record_id
     * @summary returns a gtfs_pathways file
     * @param {string} tdei_record_id tdei_record_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPathwaysFile(tdei_record_id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     * This endpoint returns a json list of all gtfs pathways files stored in the TDEI system that meet the specified criteria. Criteria that can be specified include: polygon (bounding box), minimum confidence level, pathways version, date time and agency id.  This endpoint can be used by an application developer to obtain a list of gtfs pathways files in the TDEI system meeting the specified criteria. This endpoint returns a list of file-metadata including the uris of the file, which can be used to fetch the files themselves.
     * @summary List pathways files meeting criteria.
     * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
     * @param {string} [tdei_station_id] Id of a station in the tdei system. gtfs station ids may not be unique.
     * @param {string} [pathways_schema_version] version name of the pathways schema version that the application requests. list of versions can be found with /api/v1/gtfs-pathways/versions
     * @param {string} [date_time] date-time for which the caller is interested in obtaining files. all files that are valid at the specified date-time and meet the other criteria will be returned.
     * @param {string} [tdei_org_id] tdei-assigned organization id. Represented as a UUID.
     * @param {string} [tdei_record_id] tdei_record_id, unique id represents file.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPathwaysFiles(bbox?: Array<number>, tdei_station_id?: string, pathways_schema_version?: string, date_time?: string, tdei_org_id?: string, tdei_record_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<GtfsPathwaysDownload>>>>;
    /**
     * Lists the versions of GTFS pathways data which are supported by TDEI. Returns a json list of the GTFS pathways versions supported by TDEI.
     * @summary List available GTFS Pathways versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPathwaysVersions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<VersionList>>>;
    /**
     * Path used to retrieve the list of stations with data in the TDEI system. Allows callers to get the tdei_station_id id for a station.  Returns the tdei_station_id and station information for all stations with data in the TDEI system.  If tdei_org_id param is specified, will return stations for that organization.
     * @summary List Stations
     * @param {string} [tdei_org_id] TDEI organization id.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listStations(tdei_org_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Station>>>>;
    /**
     * This call allows a user to upload or create a new gtfs pathways file. The caller must provide metadata about the file. Required metadata includes information about how and when the data was collected and valid dates of the file. Returns the tdei_record_id of the uploaded file.
     * @summary create pathways file
     * @param {GtfsPathwaysUpload} meta
     * @param {Blob} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadPathwaysFileForm(meta: GtfsPathwaysUpload, file: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>>;
};
/**
 * GTFSPathwaysApi - factory interface
 * @export
 */
export declare const GTFSPathwaysApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * returns a specific gtfs_pathways file identified by the tdei_record_id
     * @summary returns a gtfs_pathways file
     * @param {string} tdei_record_id tdei_record_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPathwaysFile(tdei_record_id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     * This endpoint returns a json list of all gtfs pathways files stored in the TDEI system that meet the specified criteria. Criteria that can be specified include: polygon (bounding box), minimum confidence level, pathways version, date time and agency id.  This endpoint can be used by an application developer to obtain a list of gtfs pathways files in the TDEI system meeting the specified criteria. This endpoint returns a list of file-metadata including the uris of the file, which can be used to fetch the files themselves.
     * @summary List pathways files meeting criteria.
     * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
     * @param {string} [tdei_station_id] Id of a station in the tdei system. gtfs station ids may not be unique.
     * @param {string} [pathways_schema_version] version name of the pathways schema version that the application requests. list of versions can be found with /api/v1/gtfs-pathways/versions
     * @param {string} [date_time] date-time for which the caller is interested in obtaining files. all files that are valid at the specified date-time and meet the other criteria will be returned.
     * @param {string} [tdei_org_id] tdei-assigned organization id. Represented as a UUID.
     * @param {string} [tdei_record_id] tdei_record_id, unique id represents file.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPathwaysFiles(bbox?: Array<number>, tdei_station_id?: string, pathways_schema_version?: string, date_time?: string, tdei_org_id?: string, tdei_record_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<GtfsPathwaysDownload>>>;
    /**
     * Lists the versions of GTFS pathways data which are supported by TDEI. Returns a json list of the GTFS pathways versions supported by TDEI.
     * @summary List available GTFS Pathways versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPathwaysVersions(options?: AxiosRequestConfig): Promise<AxiosResponse<VersionList>>;
    /**
     * Path used to retrieve the list of stations with data in the TDEI system. Allows callers to get the tdei_station_id id for a station.  Returns the tdei_station_id and station information for all stations with data in the TDEI system.  If tdei_org_id param is specified, will return stations for that organization.
     * @summary List Stations
     * @param {string} [tdei_org_id] TDEI organization id.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listStations(tdei_org_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Station>>>;
    /**
     * This call allows a user to upload or create a new gtfs pathways file. The caller must provide metadata about the file. Required metadata includes information about how and when the data was collected and valid dates of the file. Returns the tdei_record_id of the uploaded file.
     * @summary create pathways file
     * @param {GtfsPathwaysUpload} meta
     * @param {Blob} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadPathwaysFileForm(meta: GtfsPathwaysUpload, file: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<string>>;
};
/**
 * GTFSPathwaysApi - object-oriented interface
 * @export
 * @class GTFSPathwaysApi
 * @extends {BaseAPI}
 */
export declare class GTFSPathwaysApi extends BaseAPI {
    /**
     * returns a specific gtfs_pathways file identified by the tdei_record_id
     * @summary returns a gtfs_pathways file
     * @param {string} tdei_record_id tdei_record_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GTFSPathwaysApi
     */
    getPathwaysFile(tdei_record_id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     * This endpoint returns a json list of all gtfs pathways files stored in the TDEI system that meet the specified criteria. Criteria that can be specified include: polygon (bounding box), minimum confidence level, pathways version, date time and agency id.  This endpoint can be used by an application developer to obtain a list of gtfs pathways files in the TDEI system meeting the specified criteria. This endpoint returns a list of file-metadata including the uris of the file, which can be used to fetch the files themselves.
     * @summary List pathways files meeting criteria.
     * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
     * @param {string} [tdei_station_id] Id of a station in the tdei system. gtfs station ids may not be unique.
     * @param {string} [pathways_schema_version] version name of the pathways schema version that the application requests. list of versions can be found with /api/v1/gtfs-pathways/versions
     * @param {string} [date_time] date-time for which the caller is interested in obtaining files. all files that are valid at the specified date-time and meet the other criteria will be returned.
     * @param {string} [tdei_org_id] tdei-assigned organization id. Represented as a UUID.
     * @param {string} [tdei_record_id] tdei_record_id, unique id represents file.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GTFSPathwaysApi
     */
    listPathwaysFiles(bbox?: Array<number>, tdei_station_id?: string, pathways_schema_version?: string, date_time?: string, tdei_org_id?: string, tdei_record_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<GtfsPathwaysDownload>>>;
    /**
     * Lists the versions of GTFS pathways data which are supported by TDEI. Returns a json list of the GTFS pathways versions supported by TDEI.
     * @summary List available GTFS Pathways versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GTFSPathwaysApi
     */
    listPathwaysVersions(options?: AxiosRequestConfig): Promise<AxiosResponse<VersionList>>;
    /**
     * Path used to retrieve the list of stations with data in the TDEI system. Allows callers to get the tdei_station_id id for a station.  Returns the tdei_station_id and station information for all stations with data in the TDEI system.  If tdei_org_id param is specified, will return stations for that organization.
     * @summary List Stations
     * @param {string} [tdei_org_id] TDEI organization id.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GTFSPathwaysApi
     */
    listStations(tdei_org_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Station>>>;
    /**
     * This call allows a user to upload or create a new gtfs pathways file. The caller must provide metadata about the file. Required metadata includes information about how and when the data was collected and valid dates of the file. Returns the tdei_record_id of the uploaded file.
     * @summary create pathways file
     * @param {GtfsPathwaysUpload} meta
     * @param {Blob} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GTFSPathwaysApi
     */
    uploadPathwaysFileForm(meta: GtfsPathwaysUpload, file: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<string>>;
}
