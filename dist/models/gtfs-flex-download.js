"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GtfsFlexDownloadDataSourceEnum = exports.GtfsFlexDownloadCollectionMethodEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var GtfsFlexDownloadCollectionMethodEnum;
(function (GtfsFlexDownloadCollectionMethodEnum) {
    GtfsFlexDownloadCollectionMethodEnum["Manual"] = "manual";
    GtfsFlexDownloadCollectionMethodEnum["Transform"] = "transform";
    GtfsFlexDownloadCollectionMethodEnum["Generated"] = "generated";
    GtfsFlexDownloadCollectionMethodEnum["Other"] = "other";
})(GtfsFlexDownloadCollectionMethodEnum || (exports.GtfsFlexDownloadCollectionMethodEnum = GtfsFlexDownloadCollectionMethodEnum = {}));
/**
    * @export
    * @enum {string}
    */
var GtfsFlexDownloadDataSourceEnum;
(function (GtfsFlexDownloadDataSourceEnum) {
    GtfsFlexDownloadDataSourceEnum["_3rdParty"] = "3rdParty";
    GtfsFlexDownloadDataSourceEnum["TDEITools"] = "TDEITools";
    GtfsFlexDownloadDataSourceEnum["InHouse"] = "InHouse";
})(GtfsFlexDownloadDataSourceEnum || (exports.GtfsFlexDownloadDataSourceEnum = GtfsFlexDownloadDataSourceEnum = {}));
