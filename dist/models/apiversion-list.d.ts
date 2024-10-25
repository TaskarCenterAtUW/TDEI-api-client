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
import { APIVersionSpec } from './apiversion-spec';
/**
 * List of API versions.
 * @export
 * @interface APIVersionList
 */
export interface APIVersionList {
    /**
     * List of API versions supported by TDEI.
     * @type {Array<APIVersionSpec>}
     * @memberof APIVersionList
     */
    versions?: Array<APIVersionSpec>;
}
