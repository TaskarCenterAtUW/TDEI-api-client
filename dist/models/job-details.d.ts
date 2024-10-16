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
import { JobProgress } from './job-progress';
/**
 *
 * @export
 * @interface JobDetails
 */
export interface JobDetails {
    /**
     * job_id of the request
     * @type {number}
     * @memberof JobDetails
     */
    job_id?: number;
    /**
     * download_url for requested job. This will be available only if the job is completed and job_type required download_url
     * @type {string}
     * @memberof JobDetails
     */
    download_url?: string;
    /**
     * message of the job request
     * @type {string}
     * @memberof JobDetails
     */
    message?: string;
    /**
     * status of the job request
     * @type {string}
     * @memberof JobDetails
     */
    status?: JobDetailsStatusEnum;
    /**
     * job_type of the job request
     * @type {string}
     * @memberof JobDetails
     */
    job_type?: JobDetailsJobTypeEnum;
    /**
     * tdei project group id of the requested user
     * @type {string}
     * @memberof JobDetails
     */
    tdei_project_group_id?: string;
    /**
     * tdei project group name of the requested user
     * @type {string}
     * @memberof JobDetails
     */
    tdei_project_group_name?: string;
    /**
     * requested by username of the job request
     * @type {string}
     * @memberof JobDetails
     */
    requested_by?: string;
    /**
     * request input of the job request
     * @type {any}
     * @memberof JobDetails
     */
    request_input?: any;
    /**
     * response properties of the job request
     * @type {any}
     * @memberof JobDetails
     */
    response_props?: any;
    /**
     * date-time that job was created
     * @type {string}
     * @memberof JobDetails
     */
    created_at?: string;
    /**
     * date-time that job was last updated
     * @type {string}
     * @memberof JobDetails
     */
    updated_at?: string;
    /**
     * data type of the job request
     * @type {string}
     * @memberof JobDetails
     */
    data_type?: string;
    /**
     * current stage of the job request
     * @type {string}
     * @memberof JobDetails
     */
    current_stage?: string;
    /**
     *
     * @type {JobProgress}
     * @memberof JobDetails
     */
    progress?: JobProgress;
}
/**
    * @export
    * @enum {string}
    */
export declare enum JobDetailsStatusEnum {
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    INPROGRESS = "IN-PROGRESS"
}
/**
    * @export
    * @enum {string}
    */
export declare enum JobDetailsJobTypeEnum {
    CloneDataset = "Clone-Dataset",
    ConfidenceCalculate = "Confidence-Calculate",
    DatasetBBox = "Dataset-BBox",
    DatasetInclineTag = "Dataset-Incline-Tag",
    DatasetPublish = "Dataset-Publish",
    DatasetReformat = "Dataset-Reformat",
    DatasetRoadTag = "Dataset-Road-Tag",
    DatasetSpatialJoin = "Dataset-Spatial-Join",
    DatasetUnion = "Dataset-Union",
    DatasetUpload = "Dataset-Upload",
    DatasetValidate = "Dataset-Validate",
    EditMetadata = "Edit-Metadata",
    QualityMetric = "Quality-Metric"
}
