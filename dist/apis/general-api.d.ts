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
import { DatasetItem } from '../models';
import { JobDetails } from '../models';
import { ProjectGroup } from '../models';
import { ServiceModel } from '../models';
import { VersionList } from '../models';
/**
 * GeneralApi - axios parameter creator
 * @export
 */
export declare const GeneralApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Returns boolean true if the action is successful.
     * @summary Invalidates the Dataset
     * @param {string} tdei_dataset_id tdei_dataset_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDataset: (tdei_dataset_id: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Downloads the dataset generated by the job
     * @summary Downloads the job download file
     * @param {string} job_id job_id uniquely represents the job request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobDownload: (job_id: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns a json list of the versions of the TDEI API which are available.
     * @summary List available API versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listApiVersions: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This endpoint returns a list of url to zipped geojson files with Dataset data that meet the specified criteria. Criteria that can be specified include: a dataset area (polygon), minimum confidence level and Dataset version.
     * @summary List Dataset files meeting criteria.
     * @param {string} [data_type] Data type of the dataset.
     * @param {string} [status] request for files based on status. The default setting is &#x27;Publish&#x27;, limiting the list to published files only. When set to &#x27;pre-release&#x27;, it includes pre-release files for the project groups user belongs.
     * @param {string} [name] dataset name or title.
     * @param {string} [version] dataset version.
     * @param {string} [data_source] data source of the dataset.
     * @param {string} [collection_method] Method by which the data was collected.
     * @param {string} [collected_by] Collection agency or person.
     * @param {string} [derived_from_dataset_id] Derived from dataset id.
     * @param {string} [collection_date] Collection date time
     * @param {number} [confidence_level] Minimum confidence level required. Data returned will be at this confidence level or higher. Confidence level range is: 0 (very low confidence) to 100 (very high confidence).
     * @param {string} [schema_version] version name of the data type schema version that the application requests. list of versions can be found with /api/v1/{data_type}/versions.
     * @param {string} [tdei_project_group_id] tdei-assigned project group id. Represented as a UUID.
     * @param {string} [valid_from] Valid from date time. date-time for which the caller is interested in obtaining files.
     * @param {string} [valid_to] date-time for which the caller is interested in obtaining files. all files that are valid at the specified date-time and meet the other criteria will be returned.
     * @param {string} [tdei_dataset_id] tdei_dataset_id, unique id represents file.
     * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listDatasetFiles: (data_type?: string, status?: string, name?: string, version?: string, data_source?: string, collection_method?: string, collected_by?: string, derived_from_dataset_id?: string, collection_date?: string, confidence_level?: number, schema_version?: string, tdei_project_group_id?: string, valid_from?: string, valid_to?: string, tdei_dataset_id?: string, bbox?: Array<number>, page_no?: number, page_size?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This endpoint returns a list of jobs with status and request details.
     * @summary List job details.
     * @param {string} [job_id] job_id uniquely identifies the job request.
     * @param {string} [job_type] job_type of the job.
     * @param {string} [status] Status of the job.
     * @param {string} [tdei_project_group_id] project group id. Represented as a UUID.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listJobs: (job_id?: string, job_type?: string, status?: string, tdei_project_group_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Path used to retrieve the list of project groups with data in the TDEI system. Allows callers to get the tdei_project_group_id id for an project group.  Returns the tdei_project_group_id and project group information for all project groups with data in the TDEI system.
     * @summary List project groups
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listProjectGroups: (page_no?: number, page_size?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Path used to retrieve the list of Services in the TDEI system. Allows callers to get the tdei_service_id id for a service.  Returns the tdei_service_id and service name for all services in the TDEI system.   If tdei_project_group_id param is used, will return services for that project group.
     * @summary List Services
     * @param {string} [tdei_project_group_id] A tdei-assigned id for an project group. project_group_ids can be retrieved using the path /api/v1/project-group.
     * @param {string} [service_type] Service type
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listServices: (tdei_project_group_id?: string, service_type?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GeneralApi - functional programming interface
 * @export
 */
export declare const GeneralApiFp: (configuration?: Configuration) => {
    /**
     * Returns boolean true if the action is successful.
     * @summary Invalidates the Dataset
     * @param {string} tdei_dataset_id tdei_dataset_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDataset(tdei_dataset_id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<boolean>>>;
    /**
     * Downloads the dataset generated by the job
     * @summary Downloads the job download file
     * @param {string} job_id job_id uniquely represents the job request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobDownload(job_id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     * Returns a json list of the versions of the TDEI API which are available.
     * @summary List available API versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listApiVersions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<VersionList>>>;
    /**
     * This endpoint returns a list of url to zipped geojson files with Dataset data that meet the specified criteria. Criteria that can be specified include: a dataset area (polygon), minimum confidence level and Dataset version.
     * @summary List Dataset files meeting criteria.
     * @param {string} [data_type] Data type of the dataset.
     * @param {string} [status] request for files based on status. The default setting is &#x27;Publish&#x27;, limiting the list to published files only. When set to &#x27;pre-release&#x27;, it includes pre-release files for the project groups user belongs.
     * @param {string} [name] dataset name or title.
     * @param {string} [version] dataset version.
     * @param {string} [data_source] data source of the dataset.
     * @param {string} [collection_method] Method by which the data was collected.
     * @param {string} [collected_by] Collection agency or person.
     * @param {string} [derived_from_dataset_id] Derived from dataset id.
     * @param {string} [collection_date] Collection date time
     * @param {number} [confidence_level] Minimum confidence level required. Data returned will be at this confidence level or higher. Confidence level range is: 0 (very low confidence) to 100 (very high confidence).
     * @param {string} [schema_version] version name of the data type schema version that the application requests. list of versions can be found with /api/v1/{data_type}/versions.
     * @param {string} [tdei_project_group_id] tdei-assigned project group id. Represented as a UUID.
     * @param {string} [valid_from] Valid from date time. date-time for which the caller is interested in obtaining files.
     * @param {string} [valid_to] date-time for which the caller is interested in obtaining files. all files that are valid at the specified date-time and meet the other criteria will be returned.
     * @param {string} [tdei_dataset_id] tdei_dataset_id, unique id represents file.
     * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listDatasetFiles(data_type?: string, status?: string, name?: string, version?: string, data_source?: string, collection_method?: string, collected_by?: string, derived_from_dataset_id?: string, collection_date?: string, confidence_level?: number, schema_version?: string, tdei_project_group_id?: string, valid_from?: string, valid_to?: string, tdei_dataset_id?: string, bbox?: Array<number>, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<DatasetItem>>>>;
    /**
     * This endpoint returns a list of jobs with status and request details.
     * @summary List job details.
     * @param {string} [job_id] job_id uniquely identifies the job request.
     * @param {string} [job_type] job_type of the job.
     * @param {string} [status] Status of the job.
     * @param {string} [tdei_project_group_id] project group id. Represented as a UUID.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listJobs(job_id?: string, job_type?: string, status?: string, tdei_project_group_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<JobDetails>>>>;
    /**
     * Path used to retrieve the list of project groups with data in the TDEI system. Allows callers to get the tdei_project_group_id id for an project group.  Returns the tdei_project_group_id and project group information for all project groups with data in the TDEI system.
     * @summary List project groups
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listProjectGroups(page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<ProjectGroup>>>>;
    /**
     * Path used to retrieve the list of Services in the TDEI system. Allows callers to get the tdei_service_id id for a service.  Returns the tdei_service_id and service name for all services in the TDEI system.   If tdei_project_group_id param is used, will return services for that project group.
     * @summary List Services
     * @param {string} [tdei_project_group_id] A tdei-assigned id for an project group. project_group_ids can be retrieved using the path /api/v1/project-group.
     * @param {string} [service_type] Service type
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listServices(tdei_project_group_id?: string, service_type?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<ServiceModel>>>>;
};
/**
 * GeneralApi - factory interface
 * @export
 */
export declare const GeneralApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Returns boolean true if the action is successful.
     * @summary Invalidates the Dataset
     * @param {string} tdei_dataset_id tdei_dataset_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDataset(tdei_dataset_id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<boolean>>;
    /**
     * Downloads the dataset generated by the job
     * @summary Downloads the job download file
     * @param {string} job_id job_id uniquely represents the job request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobDownload(job_id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     * Returns a json list of the versions of the TDEI API which are available.
     * @summary List available API versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listApiVersions(options?: AxiosRequestConfig): Promise<AxiosResponse<VersionList>>;
    /**
     * This endpoint returns a list of url to zipped geojson files with Dataset data that meet the specified criteria. Criteria that can be specified include: a dataset area (polygon), minimum confidence level and Dataset version.
     * @summary List Dataset files meeting criteria.
     * @param {string} [data_type] Data type of the dataset.
     * @param {string} [status] request for files based on status. The default setting is &#x27;Publish&#x27;, limiting the list to published files only. When set to &#x27;pre-release&#x27;, it includes pre-release files for the project groups user belongs.
     * @param {string} [name] dataset name or title.
     * @param {string} [version] dataset version.
     * @param {string} [data_source] data source of the dataset.
     * @param {string} [collection_method] Method by which the data was collected.
     * @param {string} [collected_by] Collection agency or person.
     * @param {string} [derived_from_dataset_id] Derived from dataset id.
     * @param {string} [collection_date] Collection date time
     * @param {number} [confidence_level] Minimum confidence level required. Data returned will be at this confidence level or higher. Confidence level range is: 0 (very low confidence) to 100 (very high confidence).
     * @param {string} [schema_version] version name of the data type schema version that the application requests. list of versions can be found with /api/v1/{data_type}/versions.
     * @param {string} [tdei_project_group_id] tdei-assigned project group id. Represented as a UUID.
     * @param {string} [valid_from] Valid from date time. date-time for which the caller is interested in obtaining files.
     * @param {string} [valid_to] date-time for which the caller is interested in obtaining files. all files that are valid at the specified date-time and meet the other criteria will be returned.
     * @param {string} [tdei_dataset_id] tdei_dataset_id, unique id represents file.
     * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listDatasetFiles(data_type?: string, status?: string, name?: string, version?: string, data_source?: string, collection_method?: string, collected_by?: string, derived_from_dataset_id?: string, collection_date?: string, confidence_level?: number, schema_version?: string, tdei_project_group_id?: string, valid_from?: string, valid_to?: string, tdei_dataset_id?: string, bbox?: Array<number>, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<DatasetItem>>>;
    /**
     * This endpoint returns a list of jobs with status and request details.
     * @summary List job details.
     * @param {string} [job_id] job_id uniquely identifies the job request.
     * @param {string} [job_type] job_type of the job.
     * @param {string} [status] Status of the job.
     * @param {string} [tdei_project_group_id] project group id. Represented as a UUID.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listJobs(job_id?: string, job_type?: string, status?: string, tdei_project_group_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<JobDetails>>>;
    /**
     * Path used to retrieve the list of project groups with data in the TDEI system. Allows callers to get the tdei_project_group_id id for an project group.  Returns the tdei_project_group_id and project group information for all project groups with data in the TDEI system.
     * @summary List project groups
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listProjectGroups(page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<ProjectGroup>>>;
    /**
     * Path used to retrieve the list of Services in the TDEI system. Allows callers to get the tdei_service_id id for a service.  Returns the tdei_service_id and service name for all services in the TDEI system.   If tdei_project_group_id param is used, will return services for that project group.
     * @summary List Services
     * @param {string} [tdei_project_group_id] A tdei-assigned id for an project group. project_group_ids can be retrieved using the path /api/v1/project-group.
     * @param {string} [service_type] Service type
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listServices(tdei_project_group_id?: string, service_type?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<ServiceModel>>>;
};
/**
 * GeneralApi - object-oriented interface
 * @export
 * @class GeneralApi
 * @extends {BaseAPI}
 */
export declare class GeneralApi extends BaseAPI {
    /**
     * Returns boolean true if the action is successful.
     * @summary Invalidates the Dataset
     * @param {string} tdei_dataset_id tdei_dataset_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralApi
     */
    deleteDataset(tdei_dataset_id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<boolean>>;
    /**
     * Downloads the dataset generated by the job
     * @summary Downloads the job download file
     * @param {string} job_id job_id uniquely represents the job request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralApi
     */
    jobDownload(job_id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     * Returns a json list of the versions of the TDEI API which are available.
     * @summary List available API versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralApi
     */
    listApiVersions(options?: AxiosRequestConfig): Promise<AxiosResponse<VersionList>>;
    /**
     * This endpoint returns a list of url to zipped geojson files with Dataset data that meet the specified criteria. Criteria that can be specified include: a dataset area (polygon), minimum confidence level and Dataset version.
     * @summary List Dataset files meeting criteria.
     * @param {string} [data_type] Data type of the dataset.
     * @param {string} [status] request for files based on status. The default setting is &#x27;Publish&#x27;, limiting the list to published files only. When set to &#x27;pre-release&#x27;, it includes pre-release files for the project groups user belongs.
     * @param {string} [name] dataset name or title.
     * @param {string} [version] dataset version.
     * @param {string} [data_source] data source of the dataset.
     * @param {string} [collection_method] Method by which the data was collected.
     * @param {string} [collected_by] Collection agency or person.
     * @param {string} [derived_from_dataset_id] Derived from dataset id.
     * @param {string} [collection_date] Collection date time
     * @param {number} [confidence_level] Minimum confidence level required. Data returned will be at this confidence level or higher. Confidence level range is: 0 (very low confidence) to 100 (very high confidence).
     * @param {string} [schema_version] version name of the data type schema version that the application requests. list of versions can be found with /api/v1/{data_type}/versions.
     * @param {string} [tdei_project_group_id] tdei-assigned project group id. Represented as a UUID.
     * @param {string} [valid_from] Valid from date time. date-time for which the caller is interested in obtaining files.
     * @param {string} [valid_to] date-time for which the caller is interested in obtaining files. all files that are valid at the specified date-time and meet the other criteria will be returned.
     * @param {string} [tdei_dataset_id] tdei_dataset_id, unique id represents file.
     * @param {Array<number>} [bbox] A bounding box which specifies the area to be searched. A bounding box is specified by a string providing the lat/lon coordinates of the corners of the bounding box. Coordinate should be specified as west, south, east, north.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralApi
     */
    listDatasetFiles(data_type?: string, status?: string, name?: string, version?: string, data_source?: string, collection_method?: string, collected_by?: string, derived_from_dataset_id?: string, collection_date?: string, confidence_level?: number, schema_version?: string, tdei_project_group_id?: string, valid_from?: string, valid_to?: string, tdei_dataset_id?: string, bbox?: Array<number>, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<DatasetItem>>>;
    /**
     * This endpoint returns a list of jobs with status and request details.
     * @summary List job details.
     * @param {string} [job_id] job_id uniquely identifies the job request.
     * @param {string} [job_type] job_type of the job.
     * @param {string} [status] Status of the job.
     * @param {string} [tdei_project_group_id] project group id. Represented as a UUID.
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralApi
     */
    listJobs(job_id?: string, job_type?: string, status?: string, tdei_project_group_id?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<JobDetails>>>;
    /**
     * Path used to retrieve the list of project groups with data in the TDEI system. Allows callers to get the tdei_project_group_id id for an project group.  Returns the tdei_project_group_id and project group information for all project groups with data in the TDEI system.
     * @summary List project groups
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralApi
     */
    listProjectGroups(page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<ProjectGroup>>>;
    /**
     * Path used to retrieve the list of Services in the TDEI system. Allows callers to get the tdei_service_id id for a service.  Returns the tdei_service_id and service name for all services in the TDEI system.   If tdei_project_group_id param is used, will return services for that project group.
     * @summary List Services
     * @param {string} [tdei_project_group_id] A tdei-assigned id for an project group. project_group_ids can be retrieved using the path /api/v1/project-group.
     * @param {string} [service_type] Service type
     * @param {number} [page_no] Integer, defaults to 1.
     * @param {number} [page_size] page size. integer, between 1 to 50, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralApi
     */
    listServices(tdei_project_group_id?: string, service_type?: string, page_no?: number, page_size?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<ServiceModel>>>;
}
