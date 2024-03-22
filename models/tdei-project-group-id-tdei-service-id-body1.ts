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
 * 
 * @export
 * @interface TdeiProjectGroupIdTdeiServiceIdBody1
 */
export interface TdeiProjectGroupIdTdeiServiceIdBody1 {
    /**
     * GTFS Flex file which is expected to be a zip file, internally has {nodes, edges, points}.geojson. If the extensions are present, then the zip file will have {nodes, edges, points}.extension.geojson files
     * @type {Blob}
     * @memberof TdeiProjectGroupIdTdeiServiceIdBody1
     */
    dataset: Blob;
    /**
     * GTFS Flex dataset metadata information. see [metadata schema](https://raw.githubusercontent.com/TaskarCenterAtUW/TDEI-osw-datasvc-ts/dev/schema/metadata.schema.json)
     * @type {Blob}
     * @memberof TdeiProjectGroupIdTdeiServiceIdBody1
     */
    metadata: Blob;
    /**
     * changeset file captures changes to the sidewalk network that are captured in the GTFS Flex dataset
     * @type {Blob}
     * @memberof TdeiProjectGroupIdTdeiServiceIdBody1
     */
    changeset?: Blob;
}
