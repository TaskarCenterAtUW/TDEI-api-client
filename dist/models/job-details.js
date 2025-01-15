"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobDetailsJobTypeEnum = exports.JobDetailsStatusEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var JobDetailsStatusEnum;
(function (JobDetailsStatusEnum) {
    JobDetailsStatusEnum["COMPLETED"] = "COMPLETED";
    JobDetailsStatusEnum["FAILED"] = "FAILED";
    JobDetailsStatusEnum["INPROGRESS"] = "IN-PROGRESS";
    JobDetailsStatusEnum["ABANDONED"] = "ABANDONED";
})(JobDetailsStatusEnum = exports.JobDetailsStatusEnum || (exports.JobDetailsStatusEnum = {}));
/**
    * @export
    * @enum {string}
    */
var JobDetailsJobTypeEnum;
(function (JobDetailsJobTypeEnum) {
    JobDetailsJobTypeEnum["CloneDataset"] = "Clone-Dataset";
    JobDetailsJobTypeEnum["ConfidenceCalculate"] = "Confidence-Calculate";
    JobDetailsJobTypeEnum["DatasetBBox"] = "Dataset-BBox";
    JobDetailsJobTypeEnum["DatasetInclineTag"] = "Dataset-Incline-Tag";
    JobDetailsJobTypeEnum["DatasetPublish"] = "Dataset-Publish";
    JobDetailsJobTypeEnum["DatasetReformat"] = "Dataset-Reformat";
    JobDetailsJobTypeEnum["DatasetRoadTag"] = "Dataset-Road-Tag";
    JobDetailsJobTypeEnum["DatasetSpatialJoin"] = "Dataset-Spatial-Join";
    JobDetailsJobTypeEnum["DatasetUnion"] = "Dataset-Union";
    JobDetailsJobTypeEnum["DatasetUpload"] = "Dataset-Upload";
    JobDetailsJobTypeEnum["DatasetValidate"] = "Dataset-Validate";
    JobDetailsJobTypeEnum["EditMetadata"] = "Edit-Metadata";
    JobDetailsJobTypeEnum["QualityMetric"] = "Quality-Metric";
})(JobDetailsJobTypeEnum = exports.JobDetailsJobTypeEnum || (exports.JobDetailsJobTypeEnum = {}));
