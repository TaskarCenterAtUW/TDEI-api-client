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
 * @interface TdeiProjectGroupIdTdeiServiceIdBody3
 */
export interface TdeiProjectGroupIdTdeiServiceIdBody3 {
    /**
     * GTFS Pathways file which is expected to be a zip file, internally has .txt files that represent transit details.
     * @type {Blob}
     * @memberof TdeiProjectGroupIdTdeiServiceIdBody3
     */
    dataset: Blob;
    /**
     * Metadata information for the GTFS-Pathways dataset. This is a JSON file that includes details on how and when the data was collected, the file's valid dates, and other relevant information about the dataset. For more details, refer to the [metadata schema](https://raw.githubusercontent.com/TaskarCenterAtUW/TDEI-osw-datasvc-ts/dev/schema/metadata.schema.json).
     * @type {Blob}
     * @memberof TdeiProjectGroupIdTdeiServiceIdBody3
     */
    metadata: Blob;
    /**
     * The changeset file records modifications to the sidewalk network included in the GTFS-Pathways dataset. It supports file formats with either .zip or .osc extensions.
     * @type {Blob}
     * @memberof TdeiProjectGroupIdTdeiServiceIdBody3
     */
    changeset?: Blob;
}
