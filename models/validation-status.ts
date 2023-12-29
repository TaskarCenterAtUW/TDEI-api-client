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

import {
    
} from ".";

/**
 * 
 *
 * @export
 * @interface ValidationStatus
 */
export interface ValidationStatus {

    /**
     * job_id of the Validation request
     *
     * @type {number}
     * @memberof ValidationStatus
     * @example 1
     */
    job_id?: number;

    /**
     * Validation result
     *
     * @type {string}
     * @memberof ValidationStatus
     */
    validation_result?: string;

    /**
     * Date time of the last update on status
     *
     * @type {string}
     * @memberof ValidationStatus
     * @example 2018-02-10T09:30Z
     */
    updated_at?: string;

    /**
     * status of the job
     *
     * @type {string}
     * @memberof ValidationStatus
     */
    status?: ValidationStatusStatusEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum ValidationStatusStatusEnum {
    InProgress = 'in-progress',
    Completed = 'completed'
}

