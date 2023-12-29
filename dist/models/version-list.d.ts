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
import { VersionSpec } from ".";
/**
 * List of versions.
 *
 * @export
 * @interface VersionList
 */
export interface VersionList {
    /**
     * A list of the versions of a data standard (GTFS-Flex, GTFS-Pathways, OSW) supported by TDEI.
     *
     * @type {Array<VersionSpec>}
     * @memberof VersionList
     */
    versions?: Array<VersionSpec>;
}
