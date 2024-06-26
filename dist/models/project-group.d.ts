/**
 * TDEI Gateway Dev API
 * This is an API for interacting with the Transportation Data Equity Initiative (TDEI) data system. It is intended for applications producing data to and consuming data from the TDEI system. It currently supports GTFS-Pathways, GTFS-Flex v2 and OpenSidewalks v0.2 data schemas.
 *
 * OpenAPI spec version: v0.1
 * Contact: tdei@uw.edu
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
