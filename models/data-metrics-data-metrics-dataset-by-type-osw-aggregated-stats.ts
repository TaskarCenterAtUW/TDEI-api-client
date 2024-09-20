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
 * @interface DataMetricsDataMetricsDatasetByTypeOswAggregatedStats
 */
export interface DataMetricsDataMetricsDatasetByTypeOswAggregatedStats {
    /**
     * 
     * @type {number}
     * @memberof DataMetricsDataMetricsDatasetByTypeOswAggregatedStats
     */
    num_crossings: number;
    /**
     * 
     * @type {number}
     * @memberof DataMetricsDataMetricsDatasetByTypeOswAggregatedStats
     */
    length_of_sidewalks_km: number;
    /**
     * 
     * @type {number}
     * @memberof DataMetricsDataMetricsDatasetByTypeOswAggregatedStats
     */
    num_edges: number;
    /**
     * 
     * @type {number}
     * @memberof DataMetricsDataMetricsDatasetByTypeOswAggregatedStats
     */
    num_nodes: number;
    /**
     * 
     * @type {number}
     * @memberof DataMetricsDataMetricsDatasetByTypeOswAggregatedStats
     */
    concave_hull_area_km2: number;
}
