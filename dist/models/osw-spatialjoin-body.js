"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OswSpatialjoinBodyAssignmentMethodEnum = exports.OswSpatialjoinBodySourceDimensionEnum = exports.OswSpatialjoinBodyTargetDimensionEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var OswSpatialjoinBodyTargetDimensionEnum;
(function (OswSpatialjoinBodyTargetDimensionEnum) {
    OswSpatialjoinBodyTargetDimensionEnum["Edge"] = "edge";
    OswSpatialjoinBodyTargetDimensionEnum["Node"] = "node";
    OswSpatialjoinBodyTargetDimensionEnum["Zone"] = "zone";
})(OswSpatialjoinBodyTargetDimensionEnum = exports.OswSpatialjoinBodyTargetDimensionEnum || (exports.OswSpatialjoinBodyTargetDimensionEnum = {}));
/**
    * @export
    * @enum {string}
    */
var OswSpatialjoinBodySourceDimensionEnum;
(function (OswSpatialjoinBodySourceDimensionEnum) {
    OswSpatialjoinBodySourceDimensionEnum["Edge"] = "edge";
    OswSpatialjoinBodySourceDimensionEnum["Node"] = "node";
    OswSpatialjoinBodySourceDimensionEnum["Zone"] = "zone";
    OswSpatialjoinBodySourceDimensionEnum["Point"] = "point";
    OswSpatialjoinBodySourceDimensionEnum["Line"] = "line";
    OswSpatialjoinBodySourceDimensionEnum["Polygon"] = "polygon";
    OswSpatialjoinBodySourceDimensionEnum["Extension"] = "extension";
})(OswSpatialjoinBodySourceDimensionEnum = exports.OswSpatialjoinBodySourceDimensionEnum || (exports.OswSpatialjoinBodySourceDimensionEnum = {}));
/**
    * @export
    * @enum {string}
    */
var OswSpatialjoinBodyAssignmentMethodEnum;
(function (OswSpatialjoinBodyAssignmentMethodEnum) {
    OswSpatialjoinBodyAssignmentMethodEnum["Default"] = "default";
    OswSpatialjoinBodyAssignmentMethodEnum["Exclusive"] = "exclusive";
    OswSpatialjoinBodyAssignmentMethodEnum["Shared"] = "shared";
})(OswSpatialjoinBodyAssignmentMethodEnum = exports.OswSpatialjoinBodyAssignmentMethodEnum || (exports.OswSpatialjoinBodyAssignmentMethodEnum = {}));
