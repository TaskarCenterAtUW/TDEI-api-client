"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OswSpatialjoinBodyJoinConditionEnum = exports.OswSpatialjoinBodySourceDimensionEnum = exports.OswSpatialjoinBodyTargetDimensionEnum = void 0;
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
})(OswSpatialjoinBodySourceDimensionEnum = exports.OswSpatialjoinBodySourceDimensionEnum || (exports.OswSpatialjoinBodySourceDimensionEnum = {}));
/**
    * @export
    * @enum {string}
    */
var OswSpatialjoinBodyJoinConditionEnum;
(function (OswSpatialjoinBodyJoinConditionEnum) {
    OswSpatialjoinBodyJoinConditionEnum["ContainsGeometryTargetGeometrySource"] = "ST_Contains(geometry_target, geometry_source)";
    OswSpatialjoinBodyJoinConditionEnum["DWithinGeometryTargetGeometrySourceRadius"] = "ST_DWithin(geometry_target, geometry_source, radius)";
    OswSpatialjoinBodyJoinConditionEnum["IntersectsGeometryTargetGeometrySource"] = "ST_Intersects(geometry_target, geometry_source)";
    OswSpatialjoinBodyJoinConditionEnum["TouchesGeometryTargetGeometrySource"] = "ST_Touches(geometry_target, geometry_source)";
    OswSpatialjoinBodyJoinConditionEnum["WithinGeometryTargetGeometrySource"] = "ST_Within(geometry_target, geometry_source)";
})(OswSpatialjoinBodyJoinConditionEnum = exports.OswSpatialjoinBodyJoinConditionEnum || (exports.OswSpatialjoinBodyJoinConditionEnum = {}));
