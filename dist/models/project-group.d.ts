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
import { GeoJsonObject } from './geo-json-object';
/**
 *
 * @export
 * @interface ProjectGroup
 */
export interface ProjectGroup {
    /**
     *
     * @type {GeoJsonObject}
     * @memberof ProjectGroup
     */
    polygon: GeoJsonObject;
    /**
     * Unique id that represents the project group.
     * @type {string}
     * @memberof ProjectGroup
     */
    tdei_project_group_id?: string;
    /**
     * Name of the project group.
     * @type {string}
     * @memberof ProjectGroup
     */
    project_group_name: string;
}
