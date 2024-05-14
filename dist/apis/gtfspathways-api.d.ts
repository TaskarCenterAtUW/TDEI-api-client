/**
 * TDEI Gateway Dev API
 * This is an API for interacting with the Transportation Data Equity Initiative (TDEI) data system. It is intended for applications producing data to and consuming data from the TDEI system. It currently supports GTFS-Pathways, GTFS-Flex v2 and OpenSidewalks v0.2 data schemas.
 *
 * OpenAPI spec version: v0.1
 * Contact: tdei@uw.edu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { VersionList } from '../models';
/**
 * GTFSPathwaysApi - axios parameter creator
 * @export
 */
export declare const GTFSPathwaysApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * returns a specific GTFS Pathways file as zip containing metadata, dataset, and changeset identified by the tdei_dataset_id
     * @summary downloads the GTFS Pathways files as zip
     * @param {string} tdei_dataset_id tdei_dataset_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getGtfsPathwaysFile: (tdei_dataset_id: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Lists the versions of GTFS Pathways data which are supported by TDEI.
     * @summary List available GTFS Pathways versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listGtfsPathwaysVersions: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Publishes an GTFS Pathways dataset that was previously uploaded via the [POST] /gtfs-pathways endpoint, marking it as an official release for the mobility service. This official release status ensures visibility to all TDEI data consumers. Returns the job_id of the uploaded file. For checking the status of the upload, refer to the Location header in the response, which contains the URL for the status API endpoint.
     * @summary Publishes the GTFS Pathways dataset for the tdei_dataset_id
     * @param {string} tdei_dataset_id tdei_dataset_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishGtfsPathwaysFile: (tdei_dataset_id: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This path allows a user to upload pre-release GTFS Pathways dataset. The caller must provide metadata about the file - includes information about how and when the data was collected and valid dates of the file. Returns the job_id of the uploaded file. For checking the status of the upload, refer to the Location header in the response, which contains the URL for the status API endpoint.
     * @summary upload a pre-release of GTFS Pathways dataset.
     * @param {Blob} dataset
     * @param {Blob} metadata
     * @param {Blob} changeset
     * @param {string} tdei_project_group_id tdei project group id. Represented as UUID.
     * @param {string} tdei_service_id tdei service id associated with project group id. Represented as UUID.
     * @param {string} [derived_from_dataset_id] Dataset id from which this dataset was derived
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadGtfsPathwaysFileForm: (dataset: Blob, metadata: Blob, changeset: Blob, tdei_project_group_id: string, tdei_service_id: string, derived_from_dataset_id?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Allows a user to validate GTFS Pathways dataset to check the correctness of data. Returns the job_id for validation request. For checking the status, refer to the Location header in the response, which contains the URL for the status API endpoint.
     * @summary Validates the GTFS Pathways dataset.
     * @param {Blob} dataset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateGtfsPathwaysFileForm: (dataset: Blob, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GTFSPathwaysApi - functional programming interface
 * @export
 */
export declare const GTFSPathwaysApiFp: (configuration?: Configuration) => {
    /**
     * returns a specific GTFS Pathways file as zip containing metadata, dataset, and changeset identified by the tdei_dataset_id
     * @summary downloads the GTFS Pathways files as zip
     * @param {string} tdei_dataset_id tdei_dataset_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getGtfsPathwaysFile(tdei_dataset_id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     * Lists the versions of GTFS Pathways data which are supported by TDEI.
     * @summary List available GTFS Pathways versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listGtfsPathwaysVersions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<VersionList>>>;
    /**
     * Publishes an GTFS Pathways dataset that was previously uploaded via the [POST] /gtfs-pathways endpoint, marking it as an official release for the mobility service. This official release status ensures visibility to all TDEI data consumers. Returns the job_id of the uploaded file. For checking the status of the upload, refer to the Location header in the response, which contains the URL for the status API endpoint.
     * @summary Publishes the GTFS Pathways dataset for the tdei_dataset_id
     * @param {string} tdei_dataset_id tdei_dataset_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishGtfsPathwaysFile(tdei_dataset_id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>>;
    /**
     * This path allows a user to upload pre-release GTFS Pathways dataset. The caller must provide metadata about the file - includes information about how and when the data was collected and valid dates of the file. Returns the job_id of the uploaded file. For checking the status of the upload, refer to the Location header in the response, which contains the URL for the status API endpoint.
     * @summary upload a pre-release of GTFS Pathways dataset.
     * @param {Blob} dataset
     * @param {Blob} metadata
     * @param {Blob} changeset
     * @param {string} tdei_project_group_id tdei project group id. Represented as UUID.
     * @param {string} tdei_service_id tdei service id associated with project group id. Represented as UUID.
     * @param {string} [derived_from_dataset_id] Dataset id from which this dataset was derived
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadGtfsPathwaysFileForm(dataset: Blob, metadata: Blob, changeset: Blob, tdei_project_group_id: string, tdei_service_id: string, derived_from_dataset_id?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>>;
    /**
     * Allows a user to validate GTFS Pathways dataset to check the correctness of data. Returns the job_id for validation request. For checking the status, refer to the Location header in the response, which contains the URL for the status API endpoint.
     * @summary Validates the GTFS Pathways dataset.
     * @param {Blob} dataset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateGtfsPathwaysFileForm(dataset: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>>;
};
/**
 * GTFSPathwaysApi - factory interface
 * @export
 */
export declare const GTFSPathwaysApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * returns a specific GTFS Pathways file as zip containing metadata, dataset, and changeset identified by the tdei_dataset_id
     * @summary downloads the GTFS Pathways files as zip
     * @param {string} tdei_dataset_id tdei_dataset_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getGtfsPathwaysFile(tdei_dataset_id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     * Lists the versions of GTFS Pathways data which are supported by TDEI.
     * @summary List available GTFS Pathways versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listGtfsPathwaysVersions(options?: AxiosRequestConfig): Promise<AxiosResponse<VersionList>>;
    /**
     * Publishes an GTFS Pathways dataset that was previously uploaded via the [POST] /gtfs-pathways endpoint, marking it as an official release for the mobility service. This official release status ensures visibility to all TDEI data consumers. Returns the job_id of the uploaded file. For checking the status of the upload, refer to the Location header in the response, which contains the URL for the status API endpoint.
     * @summary Publishes the GTFS Pathways dataset for the tdei_dataset_id
     * @param {string} tdei_dataset_id tdei_dataset_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishGtfsPathwaysFile(tdei_dataset_id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<string>>;
    /**
     * This path allows a user to upload pre-release GTFS Pathways dataset. The caller must provide metadata about the file - includes information about how and when the data was collected and valid dates of the file. Returns the job_id of the uploaded file. For checking the status of the upload, refer to the Location header in the response, which contains the URL for the status API endpoint.
     * @summary upload a pre-release of GTFS Pathways dataset.
     * @param {Blob} dataset
     * @param {Blob} metadata
     * @param {Blob} changeset
     * @param {string} tdei_project_group_id tdei project group id. Represented as UUID.
     * @param {string} tdei_service_id tdei service id associated with project group id. Represented as UUID.
     * @param {string} [derived_from_dataset_id] Dataset id from which this dataset was derived
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadGtfsPathwaysFileForm(dataset: Blob, metadata: Blob, changeset: Blob, tdei_project_group_id: string, tdei_service_id: string, derived_from_dataset_id?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<string>>;
    /**
     * Allows a user to validate GTFS Pathways dataset to check the correctness of data. Returns the job_id for validation request. For checking the status, refer to the Location header in the response, which contains the URL for the status API endpoint.
     * @summary Validates the GTFS Pathways dataset.
     * @param {Blob} dataset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateGtfsPathwaysFileForm(dataset: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<string>>;
};
/**
 * GTFSPathwaysApi - object-oriented interface
 * @export
 * @class GTFSPathwaysApi
 * @extends {BaseAPI}
 */
export declare class GTFSPathwaysApi extends BaseAPI {
    /**
     * returns a specific GTFS Pathways file as zip containing metadata, dataset, and changeset identified by the tdei_dataset_id
     * @summary downloads the GTFS Pathways files as zip
     * @param {string} tdei_dataset_id tdei_dataset_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GTFSPathwaysApi
     */
    getGtfsPathwaysFile(tdei_dataset_id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     * Lists the versions of GTFS Pathways data which are supported by TDEI.
     * @summary List available GTFS Pathways versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GTFSPathwaysApi
     */
    listGtfsPathwaysVersions(options?: AxiosRequestConfig): Promise<AxiosResponse<VersionList>>;
    /**
     * Publishes an GTFS Pathways dataset that was previously uploaded via the [POST] /gtfs-pathways endpoint, marking it as an official release for the mobility service. This official release status ensures visibility to all TDEI data consumers. Returns the job_id of the uploaded file. For checking the status of the upload, refer to the Location header in the response, which contains the URL for the status API endpoint.
     * @summary Publishes the GTFS Pathways dataset for the tdei_dataset_id
     * @param {string} tdei_dataset_id tdei_dataset_id for a file, represented as a uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GTFSPathwaysApi
     */
    publishGtfsPathwaysFile(tdei_dataset_id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<string>>;
    /**
     * This path allows a user to upload pre-release GTFS Pathways dataset. The caller must provide metadata about the file - includes information about how and when the data was collected and valid dates of the file. Returns the job_id of the uploaded file. For checking the status of the upload, refer to the Location header in the response, which contains the URL for the status API endpoint.
     * @summary upload a pre-release of GTFS Pathways dataset.
     * @param {Blob} dataset
     * @param {Blob} metadata
     * @param {Blob} changeset
     * @param {string} tdei_project_group_id tdei project group id. Represented as UUID.
     * @param {string} tdei_service_id tdei service id associated with project group id. Represented as UUID.
     * @param {string} [derived_from_dataset_id] Dataset id from which this dataset was derived
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GTFSPathwaysApi
     */
    uploadGtfsPathwaysFileForm(dataset: Blob, metadata: Blob, changeset: Blob, tdei_project_group_id: string, tdei_service_id: string, derived_from_dataset_id?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<string>>;
    /**
     * Allows a user to validate GTFS Pathways dataset to check the correctness of data. Returns the job_id for validation request. For checking the status, refer to the Location header in the response, which contains the URL for the status API endpoint.
     * @summary Validates the GTFS Pathways dataset.
     * @param {Blob} dataset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GTFSPathwaysApi
     */
    validateGtfsPathwaysFileForm(dataset: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<string>>;
}
