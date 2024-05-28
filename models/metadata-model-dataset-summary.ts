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
 * Summary of the dataset
 * @export
 * @interface MetadataModelDatasetSummary
 */
export interface MetadataModelDatasetSummary {
    /**
     * Name of the collection
     * @type {string}
     * @memberof MetadataModelDatasetSummary
     */
    collection_name?: string;
    /**
     * Name of the department
     * @type {string}
     * @memberof MetadataModelDatasetSummary
     */
    department_name?: string;
    /**
     * Name of the city
     * @type {string}
     * @memberof MetadataModelDatasetSummary
     */
    city?: string;
    /**
     * Name of the region
     * @type {string}
     * @memberof MetadataModelDatasetSummary
     */
    region?: string;
    /**
     * Name of the county
     * @type {string}
     * @memberof MetadataModelDatasetSummary
     */
    county?: string;
    /**
     * Key limitations of the dataset
     * @type {string}
     * @memberof MetadataModelDatasetSummary
     */
    key_limitations_of_the_dataset?: string;
    /**
     * Challenges faced in collecting the data
     * @type {string}
     * @memberof MetadataModelDatasetSummary
     */
    challenges?: string;
}
