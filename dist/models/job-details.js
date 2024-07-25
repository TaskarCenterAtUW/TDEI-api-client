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
})(JobDetailsStatusEnum = exports.JobDetailsStatusEnum || (exports.JobDetailsStatusEnum = {}));
/**
    * @export
    * @enum {string}
    */
var JobDetailsJobTypeEnum;
(function (JobDetailsJobTypeEnum) {
    JobDetailsJobTypeEnum["ConfidenceCalculate"] = "Confidence-Calculate";
    JobDetailsJobTypeEnum["DatasetReformat"] = "Dataset-Reformat";
    JobDetailsJobTypeEnum["DatasetUpload"] = "Dataset-Upload";
    JobDetailsJobTypeEnum["DatasetPublish"] = "Dataset-Publish";
    JobDetailsJobTypeEnum["DatasetValidate"] = "Dataset-Validate";
    JobDetailsJobTypeEnum["DatasetQueries"] = "Dataset-Queries";
})(JobDetailsJobTypeEnum = exports.JobDetailsJobTypeEnum || (exports.JobDetailsJobTypeEnum = {}));
