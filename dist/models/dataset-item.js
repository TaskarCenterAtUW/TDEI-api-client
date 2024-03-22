"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetItemDataSourceEnum = exports.DatasetItemCollectionMethodEnum = exports.DatasetItemStatusEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var DatasetItemStatusEnum;
(function (DatasetItemStatusEnum) {
    DatasetItemStatusEnum["PreRelease"] = "Pre-Release";
    DatasetItemStatusEnum["Publish"] = "Publish";
})(DatasetItemStatusEnum = exports.DatasetItemStatusEnum || (exports.DatasetItemStatusEnum = {}));
/**
    * @export
    * @enum {string}
    */
var DatasetItemCollectionMethodEnum;
(function (DatasetItemCollectionMethodEnum) {
    DatasetItemCollectionMethodEnum["Manual"] = "manual";
    DatasetItemCollectionMethodEnum["Transform"] = "transform";
    DatasetItemCollectionMethodEnum["Generated"] = "generated";
    DatasetItemCollectionMethodEnum["Other"] = "other";
})(DatasetItemCollectionMethodEnum = exports.DatasetItemCollectionMethodEnum || (exports.DatasetItemCollectionMethodEnum = {}));
/**
    * @export
    * @enum {string}
    */
var DatasetItemDataSourceEnum;
(function (DatasetItemDataSourceEnum) {
    DatasetItemDataSourceEnum["_3rdParty"] = "3rdParty";
    DatasetItemDataSourceEnum["TDEITools"] = "TDEITools";
    DatasetItemDataSourceEnum["InHouse"] = "InHouse";
})(DatasetItemDataSourceEnum = exports.DatasetItemDataSourceEnum || (exports.DatasetItemDataSourceEnum = {}));
