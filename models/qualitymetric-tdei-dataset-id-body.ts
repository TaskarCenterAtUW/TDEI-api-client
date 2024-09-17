/* tslint:disable */
/* eslint-disable */
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
/**
 * 
 * @export
 * @interface QualitymetricTdeiDatasetIdBody
 */
export interface QualitymetricTdeiDatasetIdBody {
    /**
     * (Optional) GeoJSON polygon file to be used to calculate Quality Metric
     * @type {Blob}
     * @memberof QualitymetricTdeiDatasetIdBody
     */
    file?: Blob;
    /**
     * Algorithm to be used to calculate Quality Metric
     * @type {string}
     * @memberof QualitymetricTdeiDatasetIdBody
     */
    algorithm?: QualitymetricTdeiDatasetIdBodyAlgorithmEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum QualitymetricTdeiDatasetIdBodyAlgorithmEnum {
    Ixn = 'ixn',
    Fixed = 'fixed'
}

