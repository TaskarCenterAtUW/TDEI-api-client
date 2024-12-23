/**
 * TDEI Gateway Dev API
 * This is an API for interacting with the Transportation Data Equity Initiative (TDEI) system. It is intended for applications submitting data to and consuming data from the TDEI system. We currently support GTFS-Pathways, GTFS-Flex and OpenSidewalks (OSW) data schemas.
 *
 * OpenAPI spec version: v0.1
 * Contact: admin@tdei.us
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface TagTdeiDatasetIdBody
 */
export interface TagTdeiDatasetIdBody {
    /**
     * OSW dataset element tag list. Example file format: [tag-quality.json](https://raw.githubusercontent.com/TaskarCenterAtUW/TDEI-osw-datasvc-ts/dev/schema/tag-quality.json). OSW  tag schema definition [osw-tag-definition.json](https://github.com/OpenSidewalks/OpenSidewalks-Schema/blob/Audiom/opensidewalks.schema.json#L5)
     * @type {Blob}
     * @memberof TagTdeiDatasetIdBody
     */
    file: Blob;
}
