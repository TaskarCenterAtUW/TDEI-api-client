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
/**
 * 
 * @export
 * @interface OswSpatialjoinBody
 */
export interface OswSpatialjoinBody {
    /**
     * Unique dataset id defined in TDEI system
     * @type {string}
     * @memberof OswSpatialjoinBody
     */
    target_dataset_id: string;
    /**
     * 
     * @type {string}
     * @memberof OswSpatialjoinBody
     */
    target_dimension: OswSpatialjoinBodyTargetDimensionEnum;
    /**
     * Unique dataset id defined in TDEI system
     * @type {string}
     * @memberof OswSpatialjoinBody
     */
    source_dataset_id: string;
    /**
     * 
     * @type {string}
     * @memberof OswSpatialjoinBody
     */
    source_dimension: OswSpatialjoinBodySourceDimensionEnum;
    /**
     * Condition on which target and source geometry will join. geometry_target & geometry_source are constant variable representing the element geometry. 
     * @type {string}
     * @memberof OswSpatialjoinBody
     */
    join_condition: OswSpatialjoinBodyJoinConditionEnum;
    /**
     * Transformation on the target geometry (geometry_target)
     * @type {string}
     * @memberof OswSpatialjoinBody
     */
    transform_target?: string | null;
    /**
     * Transformation on the source geometry (geometry_source)
     * @type {string}
     * @memberof OswSpatialjoinBody
     */
    transform_source?: string | null;
    /**
     * Target attribute filters
     * @type {string}
     * @memberof OswSpatialjoinBody
     */
    filter_target?: string;
    /**
     * Source attribute filters
     * @type {string}
     * @memberof OswSpatialjoinBody
     */
    filter_source?: string;
    /**
     * Agrregate function for attribute.all attribute_name/alias will be prefixed with 'ext:'
     * @type {string}
     * @memberof OswSpatialjoinBody
     */
    aggregate?: string;
    /**
     * List of attributes from source, all attributes/alias will be prefixed with 'ext:'
     * @type {Array<string>}
     * @memberof OswSpatialjoinBody
     */
    attributes?: Array<string>;
}

/**
    * @export
    * @enum {string}
    */
export enum OswSpatialjoinBodyTargetDimensionEnum {
    Edge = 'edge',
    Node = 'node',
    Zone = 'zone'
}
/**
    * @export
    * @enum {string}
    */
export enum OswSpatialjoinBodySourceDimensionEnum {
    Edge = 'edge',
    Node = 'node',
    Zone = 'zone',
    Point = 'point',
    Line = 'line',
    Polygon = 'polygon'
}
/**
    * @export
    * @enum {string}
    */
export enum OswSpatialjoinBodyJoinConditionEnum {
    ContainsGeometryTargetGeometrySource = 'ST_Contains(geometry_target, geometry_source)',
    DWithinGeometryTargetGeometrySourceRadius = 'ST_DWithin(geometry_target, geometry_source, radius)',
    IntersectsGeometryTargetGeometrySource = 'ST_Intersects(geometry_target, geometry_source)',
    TouchesGeometryTargetGeometrySource = 'ST_Touches(geometry_target, geometry_source)',
    WithinGeometryTargetGeometrySource = 'ST_Within(geometry_target, geometry_source)'
}

