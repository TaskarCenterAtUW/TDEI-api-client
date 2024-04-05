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
import { GeoJsonObject } from './geo-json-object';
/**
 * represents a osw data file.
 * @export
 * @interface DatasetItem
 */
export interface DatasetItem {
    /**
     * Status of the dataset release
     * @type {string}
     * @memberof DatasetItem
     */
    status: DatasetItemStatusEnum;
    /**
     * Dataset name or Title that this data is known by
     * @type {string}
     * @memberof DatasetItem
     */
    name: string;
    /**
     * Free text description of the data
     * @type {string}
     * @memberof DatasetItem
     */
    description?: string;
    /**
     * Dataset version
     * @type {string}
     * @memberof DatasetItem
     */
    version: string;
    /**
     * Dataset id from which this dataset was derived
     * @type {string}
     * @memberof DatasetItem
     */
    derived_from_dataset_id?: string;
    /**
     * Custom structured JSON metadata
     * @type {any}
     * @memberof DatasetItem
     */
    custom_metadata?: any;
    /**
     * Uploaded timestamp of the dataset
     * @type {string}
     * @memberof DatasetItem
     */
    uploaded_timestamp: string;
    /**
     * tdei-assigned project group id. Represented as UUID. Project Group ids can be retrieved using the /api/v1/project-group path.
     * @type {string}
     * @memberof DatasetItem
     */
    tdei_project_group_id: string;
    /**
     * Service id. Represented as UUID. Project Group ids can be retrieved using the /api/v1/services path.
     * @type {string}
     * @memberof DatasetItem
     */
    tdei_service_id?: string;
    /**
     * Description of who data was collected by. See Best Practices document for information on how to format this string.
     * @type {string}
     * @memberof DatasetItem
     */
    collected_by: string;
    /**
     * date-time that data was collected
     * @type {string}
     * @memberof DatasetItem
     */
    collection_date: string;
    /**
     * Method by which the data was collected. See Best Practices document for information on how to format this string.
     * @type {string}
     * @memberof DatasetItem
     */
    collection_method: DatasetItemCollectionMethodEnum;
    /**
     * date from which this file is valid
     * @type {string}
     * @memberof DatasetItem
     */
    valid_from: string;
    /**
     * date until which this data is valid
     * @type {string}
     * @memberof DatasetItem
     */
    valid_to?: string;
    /**
     * tdei-generated confidence level. Confidence level range is: 0 (very low confidence) to 100 (very high confidence).
     * @type {number}
     * @memberof DatasetItem
     */
    confidence_level: number;
    /**
     * Description of data source or sources from which the data was collected. See Best Practices document for information on how to format this string.
     * @type {string}
     * @memberof DatasetItem
     */
    data_source: DatasetItemDataSourceEnum;
    /**
     *
     * @type {GeoJsonObject}
     * @memberof DatasetItem
     */
    dataset_area: GeoJsonObject;
    /**
     * unique id identifying the file in the tdei system, can be used to retrieve the file itself.
     * @type {string}
     * @memberof DatasetItem
     */
    tdei_dataset_id?: string;
    /**
     * version of osw schema this file conforms to
     * @type {string}
     * @memberof DatasetItem
     */
    schema_version?: string;
    /**
     * The url from which this file can be downloaded.
     * @type {string}
     * @memberof DatasetItem
     */
    download_url: string;
}
/**
    * @export
    * @enum {string}
    */
export declare enum DatasetItemStatusEnum {
    PreRelease = "Pre-Release",
    Publish = "Publish"
}
/**
    * @export
    * @enum {string}
    */
export declare enum DatasetItemCollectionMethodEnum {
    Manual = "manual",
    Transform = "transform",
    Generated = "generated",
    Other = "other"
}
/**
    * @export
    * @enum {string}
    */
export declare enum DatasetItemDataSourceEnum {
    _3rdParty = "3rdParty",
    TDEITools = "TDEITools",
    InHouse = "InHouse"
}
