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
 * represents a osw data file.
 *
 * @export
 * @interface OswUpload
 */
export interface OswUpload {
    /**
     * Dataset name or Title that this data is known by
     *
     * @type {string}
     * @memberof OswUpload
     */
    name: string;
    /**
     * Free text description of the data
     *
     * @type {string}
     * @memberof OswUpload
     */
    description?: string;
    /**
     * Dataset version
     *
     * @type {string}
     * @memberof OswUpload
     */
    version: string;
    /**
     * Custom structured JSON metadata
     *
     * @type {any}
     * @memberof OswUpload
     */
    custom_metadata?: any;
    /**
     * Description of who data was collected by. See Best Practices document for information on how to format this string.
     *
     * @type {string}
     * @memberof OswUpload
     * @example See best practices document
     */
    collected_by: string;
    /**
     * Date-time that data was collected. If uploader includes time, time should be specified in UTC time. If uploader does not include time, time will be registered as 12:01am UTC time on the date specified.
     *
     * @type {string}
     * @memberof OswUpload
     * @example 2018-02-10T09:30Z
     */
    collection_date: string;
    /**
     * Method by which the data was collected. See Best Practices document for information on how to format this string.
     *
     * @type {string}
     * @memberof OswUpload
     */
    collection_method: OswUploadCollectionMethodEnum;
    /**
     * date from which this file is valid
     *
     * @type {string}
     * @memberof OswUpload
     * @example 2023-02-10T09:30Z
     */
    valid_from: string;
    /**
     * date until which this data is valid
     *
     * @type {string}
     * @memberof OswUpload
     * @example 2023-02-10T09:30Z
     */
    valid_to?: string;
    /**
     * Description of data source or sources from which the data was collected. See Best Practices document for information on how to format this string.
     *
     * @type {string}
     * @memberof OswUpload
     */
    data_source: OswUploadDataSourceEnum;
    /**
     * @type {GeoJsonObject}
     * @memberof OswUpload
     */
    dataset_area: GeoJsonObject;
    /**
     * version of osw schema this file conforms to
     *
     * @type {string}
     * @memberof OswUpload
     * @example v0.1
     */
    osw_schema_version: string;
}
/**
 * @export
 * @enum {string}
 */
export declare enum OswUploadCollectionMethodEnum {
    Manual = "manual",
    Transform = "transform",
    Generated = "generated",
    Other = "other"
}
/**
 * @export
 * @enum {string}
 */
export declare enum OswUploadDataSourceEnum {
    _3rdParty = "3rdParty",
    TDEITools = "TDEITools",
    InHouse = "InHouse"
}
