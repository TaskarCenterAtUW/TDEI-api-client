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
 * Includes gtfs project group information and a tdei project group id.
 * @export
 * @interface ProjectGroup
 */
export interface ProjectGroup {
    /**
     * geo-json polygon.
     * @type {any}
     * @memberof ProjectGroup
     */
    polygon: any;
    /**
     * tdei-assigned project group id. Necessary to ensure that project group ids are unique. Represented as a UUID.
     * @type {string}
     * @memberof ProjectGroup
     */
    tdei_project_group_id?: string;
    /**
     * project_group_name name. For transit agencies, typically the agency name used in GTFS releases.
     * @type {string}
     * @memberof ProjectGroup
     */
    project_group_name: string;
}
