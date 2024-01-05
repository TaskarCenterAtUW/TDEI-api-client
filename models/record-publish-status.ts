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
/**
 * Describes the status of an publish record
 * @export
 * @interface RecordPublishStatus
 */
export interface RecordPublishStatus {
    /**
     * Published record id
     * @type {string}
     * @memberof RecordPublishStatus
     */
    tdei_record_id: string;
    /**
     * Current stage of the file processing
     * @type {string}
     * @memberof RecordPublishStatus
     */
    stage?: string;
    /**
     * Current status of processing. (failed, in progress or complete). If failed, shows the failure reason
     * @type {string}
     * @memberof RecordPublishStatus
     */
    status?: string;
    /**
     * True, represents record published Successfully, else False.
     * @type {boolean}
     * @memberof RecordPublishStatus
     */
    published?: boolean;
}