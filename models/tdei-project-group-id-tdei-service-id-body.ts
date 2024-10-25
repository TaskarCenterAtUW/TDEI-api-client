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
 * 
 * @export
 * @interface TdeiProjectGroupIdTdeiServiceIdBody
 */
export interface TdeiProjectGroupIdTdeiServiceIdBody {
    /**
     * Metadata file. see [metadata schema](https://raw.githubusercontent.com/TaskarCenterAtUW/TDEI-osw-datasvc-ts/dev/schema/metadata.schema.json)
     * @type {Blob}
     * @memberof TdeiProjectGroupIdTdeiServiceIdBody
     */
    file: Blob;
}
