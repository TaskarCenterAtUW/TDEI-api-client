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
 * @interface MetadataTdeiDatasetIdBody
 */
export interface MetadataTdeiDatasetIdBody {
    /**
     * Metadata file. see [metadata schema](https://raw.githubusercontent.com/TaskarCenterAtUW/TDEI-osw-datasvc-ts/dev/schema/metadata.schema.json)
     * @type {Blob}
     * @memberof MetadataTdeiDatasetIdBody
     */
    file: Blob;
}
