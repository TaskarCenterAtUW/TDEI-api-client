/**
 * TDEI Gateway Dev API
 * This is an API for interacting with the Transportation Data Equity Initiative (TDEI) system. It is intended for applications submitting data to and consuming data from the TDEI system. We currently support GTFS-Pathways, GTFS-Flex and OpenSidewalks (OSW) data schemas.
 *
 * OpenAPI spec version: v0.1
 * Contact: tdei@uw.edu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * Job progress details
 * @export
 * @interface JobProgress
 */
export interface JobProgress {
    /**
     * total number of stages in the job
     * @type {number}
     * @memberof JobProgress
     */
    total_stages?: number;
    /**
     * description of the current processing stage of the job
     * @type {string}
     * @memberof JobProgress
     */
    current_stage?: string;
    /**
     * number of stages completed in the job
     * @type {number}
     * @memberof JobProgress
     */
    completed_stages?: number;
    /**
     * status of the job in current state
     * @type {string}
     * @memberof JobProgress
     */
    current_state?: JobProgressCurrentStateEnum;
    /**
     * percentage of the current stage completed
     * @type {number}
     * @memberof JobProgress
     */
    current_stage_percent_done?: number;
    /**
     * date-time when the job was last updated
     * @type {string}
     * @memberof JobProgress
     */
    last_updated_at?: string;
}
/**
    * @export
    * @enum {string}
    */
export declare enum JobProgressCurrentStateEnum {
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    INPROGRESS = "IN-PROGRESS"
}
