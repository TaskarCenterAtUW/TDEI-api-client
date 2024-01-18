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
import { GeoJsonObject } from './geo-json-object';
/**
 * represents a osw data file.
 * @export
 * @interface OswDownload
 */
export interface OswDownload {
    /**
     * Status of the dataset release
     * @type {string}
     * @memberof OswDownload
     */
    status: OswDownloadStatusEnum;
    /**
     * Dataset name or Title that this data is known by
     * @type {string}
     * @memberof OswDownload
     */
    name: string;
    /**
     * Free text description of the data
     * @type {string}
     * @memberof OswDownload
     */
    description?: string;
    /**
     * Dataset version
     * @type {string}
     * @memberof OswDownload
     */
    version: string;
    /**
     * Dataset id from which this dataset was derived
     * @type {string}
     * @memberof OswDownload
     */
    derived_from_dataset_id?: string;
    /**
     * Custom structured JSON metadata
     * @type {any}
     * @memberof OswDownload
     */
    custom_metadata?: any;
    /**
     * Uploaded timestamp of the dataset
     * @type {string}
     * @memberof OswDownload
     */
    uploaded_timestamp: string;
    /**
     * tdei-assigned project group id. Represented as UUID. Project Group ids can be retrieved using the /api/v1/project-group path.
     * @type {string}
     * @memberof OswDownload
     */
    tdei_project_group_id: string;
    /**
     * Description of who data was collected by. See Best Practices document for information on how to format this string.
     * @type {string}
     * @memberof OswDownload
     */
    collected_by: string;
    /**
     * date-time that data was collected
     * @type {string}
     * @memberof OswDownload
     */
    collection_date: string;
    /**
     * Method by which the data was collected. See Best Practices document for information on how to format this string.
     * @type {string}
     * @memberof OswDownload
     */
    collection_method: OswDownloadCollectionMethodEnum;
    /**
     * date from which this file is valid
     * @type {string}
     * @memberof OswDownload
     */
    valid_from: string;
    /**
     * date until which this data is valid
     * @type {string}
     * @memberof OswDownload
     */
    valid_to?: string;
    /**
     * tdei-generated confidence level. Confidence level range is: 0 (very low confidence) to 100 (very high confidence).
     * @type {number}
     * @memberof OswDownload
     */
    confidence_level: number;
    /**
     * Description of data source or sources from which the data was collected. See Best Practices document for information on how to format this string.
     * @type {string}
     * @memberof OswDownload
     */
    data_source: OswDownloadDataSourceEnum;
    /**
     * 
     * @type {GeoJsonObject}
     * @memberof OswDownload
     */
    dataset_area: GeoJsonObject;
    /**
     * unique id identifying the file in the tdei system, can be used to retrieve the file itself.
     * @type {string}
     * @memberof OswDownload
     */
    tdei_record_id: string;
    /**
     * version of osw schema this file conforms to
     * @type {string}
     * @memberof OswDownload
     */
    osw_schema_version: string;
    /**
     * The url from which this file can be downloaded.
     * @type {string}
     * @memberof OswDownload
     */
    download_url: string;
}

/**
    * @export
    * @enum {string}
    */
export enum OswDownloadStatusEnum {
    PreRelease = 'Pre-Release',
    Publish = 'Publish'
}
/**
    * @export
    * @enum {string}
    */
export enum OswDownloadCollectionMethodEnum {
    Manual = 'manual',
    Transform = 'transform',
    Generated = 'generated',
    Other = 'other'
}
/**
    * @export
    * @enum {string}
    */
export enum OswDownloadDataSourceEnum {
    _3rdParty = '3rdParty',
    TDEITools = 'TDEITools',
    InHouse = 'InHouse'
}

