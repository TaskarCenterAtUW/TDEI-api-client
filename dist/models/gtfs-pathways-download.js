"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GtfsPathwaysDownloadDataSourceEnum = exports.GtfsPathwaysDownloadCollectionMethodEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var GtfsPathwaysDownloadCollectionMethodEnum;
(function (GtfsPathwaysDownloadCollectionMethodEnum) {
    GtfsPathwaysDownloadCollectionMethodEnum["Manual"] = "manual";
    GtfsPathwaysDownloadCollectionMethodEnum["Transform"] = "transform";
    GtfsPathwaysDownloadCollectionMethodEnum["Generated"] = "generated";
    GtfsPathwaysDownloadCollectionMethodEnum["Other"] = "other";
})(GtfsPathwaysDownloadCollectionMethodEnum = exports.GtfsPathwaysDownloadCollectionMethodEnum || (exports.GtfsPathwaysDownloadCollectionMethodEnum = {}));
/**
    * @export
    * @enum {string}
    */
var GtfsPathwaysDownloadDataSourceEnum;
(function (GtfsPathwaysDownloadDataSourceEnum) {
    GtfsPathwaysDownloadDataSourceEnum["_3rdParty"] = "3rdParty";
    GtfsPathwaysDownloadDataSourceEnum["TDEITools"] = "TDEITools";
    GtfsPathwaysDownloadDataSourceEnum["InHouse"] = "InHouse";
})(GtfsPathwaysDownloadDataSourceEnum = exports.GtfsPathwaysDownloadDataSourceEnum || (exports.GtfsPathwaysDownloadDataSourceEnum = {}));
