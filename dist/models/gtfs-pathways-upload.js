"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GtfsPathwaysUploadDataSourceEnum = exports.GtfsPathwaysUploadCollectionMethodEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var GtfsPathwaysUploadCollectionMethodEnum;
(function (GtfsPathwaysUploadCollectionMethodEnum) {
    GtfsPathwaysUploadCollectionMethodEnum["Manual"] = "manual";
    GtfsPathwaysUploadCollectionMethodEnum["Transform"] = "transform";
    GtfsPathwaysUploadCollectionMethodEnum["Generated"] = "generated";
    GtfsPathwaysUploadCollectionMethodEnum["Other"] = "other";
})(GtfsPathwaysUploadCollectionMethodEnum || (exports.GtfsPathwaysUploadCollectionMethodEnum = GtfsPathwaysUploadCollectionMethodEnum = {}));
/**
    * @export
    * @enum {string}
    */
var GtfsPathwaysUploadDataSourceEnum;
(function (GtfsPathwaysUploadDataSourceEnum) {
    GtfsPathwaysUploadDataSourceEnum["_3rdParty"] = "3rdParty";
    GtfsPathwaysUploadDataSourceEnum["TDEITools"] = "TDEITools";
    GtfsPathwaysUploadDataSourceEnum["InHouse"] = "InHouse";
})(GtfsPathwaysUploadDataSourceEnum || (exports.GtfsPathwaysUploadDataSourceEnum = GtfsPathwaysUploadDataSourceEnum = {}));
