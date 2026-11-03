"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionSnapAttributesEnum = exports.UnionSnapAnchorEnum = exports.UnionSnapModeEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var UnionSnapModeEnum;
(function (UnionSnapModeEnum) {
    UnionSnapModeEnum["Off"] = "off";
    UnionSnapModeEnum["Default"] = "default";
    UnionSnapModeEnum["Custom"] = "custom";
})(UnionSnapModeEnum = exports.UnionSnapModeEnum || (exports.UnionSnapModeEnum = {}));
/**
    * @export
    * @enum {string}
    */
var UnionSnapAnchorEnum;
(function (UnionSnapAnchorEnum) {
    UnionSnapAnchorEnum["Ds1"] = "ds1";
    UnionSnapAnchorEnum["Ds2"] = "ds2";
})(UnionSnapAnchorEnum = exports.UnionSnapAnchorEnum || (exports.UnionSnapAnchorEnum = {}));
/**
    * @export
    * @enum {string}
    */
var UnionSnapAttributesEnum;
(function (UnionSnapAttributesEnum) {
    UnionSnapAttributesEnum["Merge"] = "merge";
    UnionSnapAttributesEnum["AnchorOnly"] = "anchor_only";
})(UnionSnapAttributesEnum = exports.UnionSnapAttributesEnum || (exports.UnionSnapAttributesEnum = {}));
