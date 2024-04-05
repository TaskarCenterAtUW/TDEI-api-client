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
 *
 * @export
 * @interface OswConvertBody
 */
export interface OswConvertBody {
    /**
     * Source format
     * @type {string}
     * @memberof OswConvertBody
     */
    source: OswConvertBodySourceEnum;
    /**
     * Target format
     * @type {string}
     * @memberof OswConvertBody
     */
    target: OswConvertBodyTargetEnum;
    /**
     *
     * @type {Blob}
     * @memberof OswConvertBody
     */
    file: Blob;
}
/**
    * @export
    * @enum {string}
    */
export declare enum OswConvertBodySourceEnum {
    Osm = "osm",
    Osw = "osw"
}
/**
    * @export
    * @enum {string}
    */
export declare enum OswConvertBodyTargetEnum {
    Osm = "osm",
    Osw = "osw"
}
