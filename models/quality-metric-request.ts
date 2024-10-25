/* tslint:disable */
/* eslint-disable */
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
 * Payload for quality metric request
 * @export
 * @interface QualityMetricRequest
 */
export interface QualityMetricRequest {
    /**
     * List of algorithms to calculate the quality metric against. Currently supports fixed and random
     * @type {Array<string>}
     * @memberof QualityMetricRequest
     */
    algorithms?: Array<QualityMetricRequestAlgorithmsEnum>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof QualityMetricRequest
     */
    persist?: { [key: string]: string; };
}

/**
    * @export
    * @enum {string}
    */
export enum QualityMetricRequestAlgorithmsEnum {
    Fixed = 'fixed',
    Random = 'random'
}

