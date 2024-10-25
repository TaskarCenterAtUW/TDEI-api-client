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
 * @interface TdeiProjectGroupIdTdeiServiceIdBody1
 */
export interface TdeiProjectGroupIdTdeiServiceIdBody1 {
    /**
     * OSW file which is expected to be a zip file, internally has {nodes, edges, points}.geojson. If the extensions are present, then the zip file will have {nodes, edges, points}.extension.geojson files
     * @type {Blob}
     * @memberof TdeiProjectGroupIdTdeiServiceIdBody1
     */
    dataset: Blob;
    /**
     * Metadata information for the OSW dataset. This is a JSON file that includes details on how and when the data was collected, the file's valid dates, and other relevant information about the dataset. For more details, refer to the [metadata schema](https://raw.githubusercontent.com/TaskarCenterAtUW/TDEI-osw-datasvc-ts/dev/schema/metadata.schema.json).
     * @type {Blob}
     * @memberof TdeiProjectGroupIdTdeiServiceIdBody1
     */
    metadata: Blob;
    /**
     * The changeset file records modifications to the sidewalk network included in the OSW dataset. It supports file formats with either .zip or .osc extensions.
     * @type {Blob}
     * @memberof TdeiProjectGroupIdTdeiServiceIdBody1
     */
    changeset?: Blob;
}
