/* tslint:disable */
/* eslint-disable */
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
import { Geometry } from './geometry';
/**
 * 
 * @export
 * @interface Feature
 */
export interface Feature {
    /**
     * 
     * @type {string}
     * @memberof Feature
     */
    type?: FeatureTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Feature
     */
    id?: string;
    /**
     * 
     * @type {any}
     * @memberof Feature
     */
    properties?: any;
    /**
     * 
     * @type {Geometry}
     * @memberof Feature
     */
    geometry?: Geometry;
}

/**
    * @export
    * @enum {string}
    */
export enum FeatureTypeEnum {
    Feature = 'Feature'
}

