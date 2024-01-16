"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OswUploadDataSourceEnum = exports.OswUploadCollectionMethodEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var OswUploadCollectionMethodEnum;
(function (OswUploadCollectionMethodEnum) {
    OswUploadCollectionMethodEnum["Manual"] = "manual";
    OswUploadCollectionMethodEnum["Transform"] = "transform";
    OswUploadCollectionMethodEnum["Generated"] = "generated";
    OswUploadCollectionMethodEnum["Other"] = "other";
})(OswUploadCollectionMethodEnum || (exports.OswUploadCollectionMethodEnum = OswUploadCollectionMethodEnum = {}));
/**
    * @export
    * @enum {string}
    */
var OswUploadDataSourceEnum;
(function (OswUploadDataSourceEnum) {
    OswUploadDataSourceEnum["_3rdParty"] = "3rdParty";
    OswUploadDataSourceEnum["TDEITools"] = "TDEITools";
    OswUploadDataSourceEnum["InHouse"] = "InHouse";
})(OswUploadDataSourceEnum || (exports.OswUploadDataSourceEnum = OswUploadDataSourceEnum = {}));
