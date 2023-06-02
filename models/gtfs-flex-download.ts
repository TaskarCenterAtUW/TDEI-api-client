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
 * Represents a gtfs_flex data file
 * @export
 * @interface GtfsFlexDownload
 */
export interface GtfsFlexDownload {
    /**
     * tdei-assigned organization id. Represented as UUID. Organization ids can be retrieved using the /api/v1/organizations path.
     * @type {string}
     * @memberof GtfsFlexDownload
     */
    tdeiOrgId: string;
    /**
     * tdei-assigned service id. Represented as UUID. Service ids can be retrieved using the /api/v1/services path.
     * @type {string}
     * @memberof GtfsFlexDownload
     */
    tdeiServiceId: string;
    /**
     * Description of who data was collected by. See Best Practices document for information on how to format this string.
     * @type {string}
     * @memberof GtfsFlexDownload
     */
    collectedBy: string;
    /**
     * date-time that data was collected
     * @type {string}
     * @memberof GtfsFlexDownload
     */
    collectionDate: string;
    /**
     * Method by which the data was collected. See Best Practices document for information on how to format this string.
     * @type {string}
     * @memberof GtfsFlexDownload
     */
    collectionMethod: GtfsFlexDownloadCollectionMethodEnum;
    /**
     * date from which this file is valid
     * @type {string}
     * @memberof GtfsFlexDownload
     */
    validFrom: string;
    /**
     * date until which this data is valid
     * @type {string}
     * @memberof GtfsFlexDownload
     */
    validTo?: string;
    /**
     * tdei-generated confidence level. Confidence level range is: 0 (very low confidence) to 100 (very high confidence).
     * @type {number}
     * @memberof GtfsFlexDownload
     */
    confidenceLevel: number;
    /**
     * Description of data source or sources from which the data was collected. See Best Practices document for information on how to format this string.
     * @type {string}
     * @memberof GtfsFlexDownload
     */
    dataSource: GtfsFlexDownloadDataSourceEnum;
    /**
     * 
     * @type {GeoJsonObject}
     * @memberof GtfsFlexDownload
     */
    polygon: GeoJsonObject;
    /**
     * unique id identifying the file in the tdei system, can be used to retrieve the file itself.
     * @type {string}
     * @memberof GtfsFlexDownload
     */
    tdeiRecordId: string;
    /**
     * version of gtfs flex schema this file conforms to
     * @type {string}
     * @memberof GtfsFlexDownload
     */
    flexSchemaVersion: string;
    /**
     * The url from which this file can be downloaded.
     * @type {string}
     * @memberof GtfsFlexDownload
     */
    downloadUrl: string;
}

/**
    * @export
    * @enum {string}
    */
export enum GtfsFlexDownloadCollectionMethodEnum {
    Manual = 'manual',
    Transform = 'transform',
    Generated = 'generated',
    Other = 'other'
}
/**
    * @export
    * @enum {string}
    */
export enum GtfsFlexDownloadDataSourceEnum {
    _3rdParty = '3rdParty',
    TDEITools = 'TDEITools',
    InHouse = 'InHouse'
}

