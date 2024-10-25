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
import { MetadataModelDataProvenance } from './metadata-model-data-provenance';
import { MetadataModelDatasetDetail } from './metadata-model-dataset-detail';
import { MetadataModelDatasetSummary } from './metadata-model-dataset-summary';
import { MetadataModelMaintenance } from './metadata-model-maintenance';
import { MetadataModelMethodology } from './metadata-model-methodology';
/**
 *
 * @export
 * @interface MetadataModel
 */
export interface MetadataModel {
    /**
     *
     * @type {MetadataModelDataProvenance}
     * @memberof MetadataModel
     */
    data_provenance?: MetadataModelDataProvenance;
    /**
     *
     * @type {MetadataModelDatasetDetail}
     * @memberof MetadataModel
     */
    dataset_detail?: MetadataModelDatasetDetail;
    /**
     *
     * @type {MetadataModelDatasetSummary}
     * @memberof MetadataModel
     */
    dataset_summary?: MetadataModelDatasetSummary;
    /**
     *
     * @type {MetadataModelMaintenance}
     * @memberof MetadataModel
     */
    maintenance?: MetadataModelMaintenance;
    /**
     *
     * @type {MetadataModelMethodology}
     * @memberof MetadataModel
     */
    methodology?: MetadataModelMethodology;
}
