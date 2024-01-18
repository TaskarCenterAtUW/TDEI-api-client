"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OswDownloadDataSourceEnum = exports.OswDownloadCollectionMethodEnum = exports.OswDownloadStatusEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var OswDownloadStatusEnum;
(function (OswDownloadStatusEnum) {
    OswDownloadStatusEnum["PreRelease"] = "Pre-Release";
    OswDownloadStatusEnum["Publish"] = "Publish";
})(OswDownloadStatusEnum = exports.OswDownloadStatusEnum || (exports.OswDownloadStatusEnum = {}));
/**
    * @export
    * @enum {string}
    */
var OswDownloadCollectionMethodEnum;
(function (OswDownloadCollectionMethodEnum) {
    OswDownloadCollectionMethodEnum["Manual"] = "manual";
    OswDownloadCollectionMethodEnum["Transform"] = "transform";
    OswDownloadCollectionMethodEnum["Generated"] = "generated";
    OswDownloadCollectionMethodEnum["Other"] = "other";
})(OswDownloadCollectionMethodEnum = exports.OswDownloadCollectionMethodEnum || (exports.OswDownloadCollectionMethodEnum = {}));
/**
    * @export
    * @enum {string}
    */
var OswDownloadDataSourceEnum;
(function (OswDownloadDataSourceEnum) {
    OswDownloadDataSourceEnum["_3rdParty"] = "3rdParty";
    OswDownloadDataSourceEnum["TDEITools"] = "TDEITools";
    OswDownloadDataSourceEnum["InHouse"] = "InHouse";
})(OswDownloadDataSourceEnum = exports.OswDownloadDataSourceEnum || (exports.OswDownloadDataSourceEnum = {}));
