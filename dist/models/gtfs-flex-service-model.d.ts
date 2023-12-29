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
import { GeoJsonObject } from ".";
/**
 *
 *
 * @export
 * @interface GtfsFlexServiceModel
 */
export interface GtfsFlexServiceModel {
    /**
     * @type {GeoJsonObject}
     * @memberof GtfsFlexServiceModel
     */
    polygon: GeoJsonObject;
    /**
     * name of the gtfs-flex service.
     *
     * @type {string}
     * @memberof GtfsFlexServiceModel
     * @example Hyde Shuttle
     */
    service_name: string;
    /**
     * tdei assigned service id. Necessary to ensure that service ids are unique.
     *
     * @type {string}
     * @memberof GtfsFlexServiceModel
     * @example 5e991e7a-5c16-4ebf-ad31-3a3625bcca10
     */
    tdei_service_id: string;
}
