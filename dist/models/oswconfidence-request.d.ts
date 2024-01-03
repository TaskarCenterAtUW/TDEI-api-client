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
 *
 * @export
 * @interface OSWConfidenceRequest
 */
export interface OSWConfidenceRequest {
    /**
     * TDEI record ID of the dataset to calculate confidence metric
     *
     * @type {string}
     * @memberof OSWConfidenceRequest
     * @example 5e991e7a-5c16-4ebf-ad31-3a3625bcca10
     */
    tdei_record_id: string;
}
