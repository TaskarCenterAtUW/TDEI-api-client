"use strict";
// import { randomUUID } from "crypto";
// import { FeatureTypeEnum, GeoJsonObject, GeoJsonObjectTypeEnum } from "tdei-client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
var models_1 = require("./models");
/**
 * Utility class.
 */
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.getRandomPolygon = function () {
        return {
            type: models_1.GeoJsonObjectTypeEnum.FeatureCollection,
            features: [
                {
                    type: models_1.FeatureTypeEnum.Feature,
                    geometry: {
                        type: "Polygon",
                        coordinates: [this.generateRandomCoordinates()]
                    }
                }
            ]
        };
    };
    Utility.generateRandomCoordinates = function () {
        var randomCoordinates = [];
        var firstRandom = [this.getRandomNumber(70, 79), this.getRandomNumber(12, 15)];
        randomCoordinates.push(firstRandom);
        for (var i = 3; i--;) {
            randomCoordinates.push([this.getRandomNumber(70, 79), this.getRandomNumber(12, 15)]);
        }
        randomCoordinates.push(firstRandom);
        return randomCoordinates;
    };
    Utility.getRandomNumber = function (min, max) {
        var diff = max - min;
        return parseFloat((min + Math.random() * diff).toFixed(6));
    };
    return Utility;
}());
exports.Utility = Utility;
