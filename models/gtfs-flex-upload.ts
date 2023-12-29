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

// import { GeoJsonObject } from './geo-json-object';
import {
    GeoJsonObject,
} from ".";

/**
 * represents meta data needed to upload a gtfs_flex data file
 *
 * @export
 * @interface GtfsFlexUpload
 */
export interface GtfsFlexUpload {

    /**
     * tdei-assigned project group id. Represented as UUID. Project Group ids can be retrieved using the /api/v1.0/project-group path.
     *
     * @type {string}
     * @memberof GtfsFlexUpload
     * @example 4e991e7a-5c16-4ebf-ad31-3a3625bcca10
     */
    tdei_project_group_id: string;

    /**
     * TDEI id of a GTFS Flex service
     *
     * @type {string}
     * @memberof GtfsFlexUpload
     * @example 5e991e7a-5c16-4ebf-ad31-3a3625bcca10
     */
    tdei_service_id: string;

    /**
     * Description of who data was collected by. See Best Practices document for information on how to format this string.
     *
     * @type {string}
     * @memberof GtfsFlexUpload
     * @example See best practices document
     */
    collected_by: string;

    /**
     * date-time that data was collected
     *
     * @type {string}
     * @memberof GtfsFlexUpload
     * @example 2023-02-10T09:30Z
     */
    collection_date: string;

    /**
     * Method by which the data was collected. See Best Practices document for information on how to format this string.
     *
     * @type {string}
     * @memberof GtfsFlexUpload
     */
    collection_method: GtfsFlexUploadCollectionMethodEnum;

    /**
     * date from which this file is valid
     *
     * @type {string}
     * @memberof GtfsFlexUpload
     * @example 2023-02-10T09:30Z
     */
    valid_from: string;

    /**
     * date until which this data is valid
     *
     * @type {string}
     * @memberof GtfsFlexUpload
     * @example 2023-02-10T09:30Z
     */
    valid_to?: string;

    /**
     * Description of data source or sources from which the data was collected. See Best Practices document for information on how to format this string.
     *
     * @type {string}
     * @memberof GtfsFlexUpload
     */
    data_source: GtfsFlexUploadDataSourceEnum;

    /**
     * @type {GeoJsonObject}
     * @memberof GtfsFlexUpload
     */
    polygon: GeoJsonObject;

    /**
     * version of gtfs flex schema this file conforms to
     *
     * @type {string}
     * @memberof GtfsFlexUpload
     * @example v2.0
     */
    flex_schema_version: string;
}

/**
 * @export
 * @enum {string}
 */
export enum GtfsFlexUploadCollectionMethodEnum {
    Manual = 'manual',
    Transform = 'transform',
    Generated = 'generated',
    Other = 'other'
}
/**
 * @export
 * @enum {string}
 */
export enum GtfsFlexUploadDataSourceEnum {
    _3rdParty = '3rdParty',
    TDEITools = 'TDEITools',
    InHouse = 'InHouse'
}

