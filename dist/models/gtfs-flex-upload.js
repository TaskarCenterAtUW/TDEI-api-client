"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GtfsFlexUploadDataSourceEnum = exports.GtfsFlexUploadCollectionMethodEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var GtfsFlexUploadCollectionMethodEnum;
(function (GtfsFlexUploadCollectionMethodEnum) {
    GtfsFlexUploadCollectionMethodEnum["Manual"] = "manual";
    GtfsFlexUploadCollectionMethodEnum["Transform"] = "transform";
    GtfsFlexUploadCollectionMethodEnum["Generated"] = "generated";
    GtfsFlexUploadCollectionMethodEnum["Other"] = "other";
})(GtfsFlexUploadCollectionMethodEnum || (exports.GtfsFlexUploadCollectionMethodEnum = GtfsFlexUploadCollectionMethodEnum = {}));
/**
    * @export
    * @enum {string}
    */
var GtfsFlexUploadDataSourceEnum;
(function (GtfsFlexUploadDataSourceEnum) {
    GtfsFlexUploadDataSourceEnum["_3rdParty"] = "3rdParty";
    GtfsFlexUploadDataSourceEnum["TDEITools"] = "TDEITools";
    GtfsFlexUploadDataSourceEnum["InHouse"] = "InHouse";
})(GtfsFlexUploadDataSourceEnum || (exports.GtfsFlexUploadDataSourceEnum = GtfsFlexUploadDataSourceEnum = {}));
