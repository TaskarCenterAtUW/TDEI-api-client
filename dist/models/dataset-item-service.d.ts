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
 * Service id. Represented as UUID. Project Group ids can be retrieved using the /api/v1/services path.
 * @export
 * @interface DatasetItemService
 */
export interface DatasetItemService {
    /**
     *
     * @type {string}
     * @memberof DatasetItemService
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof DatasetItemService
     */
    tdei_service_id: string;
}
