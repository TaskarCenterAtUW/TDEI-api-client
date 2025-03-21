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
 * @interface GtfspathwaysValidateBody
 */
export interface GtfspathwaysValidateBody {
    /**
     * GTFS Pathways file which is expected to be a zip file, internally has .txt files that represent transit details.
     * @type {Blob}
     * @memberof GtfspathwaysValidateBody
     */
    dataset: Blob;
}
