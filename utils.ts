// import { randomUUID } from "crypto";
// import { FeatureTypeEnum, GeoJsonObject, GeoJsonObjectTypeEnum } from "tdei-client";

import { FeatureTypeEnum, GeoJsonObject, GeoJsonObjectTypeEnum } from "./models";

/**
 * Utility class.
 */
export class Utility {

    static getRandomPolygon(): GeoJsonObject {
        return {
            type : GeoJsonObjectTypeEnum.FeatureCollection,
            features:[
                {
                    type: FeatureTypeEnum.Feature,
                    geometry: {
                        type:"Polygon",
                        coordinates:[this.generateRandomCoordinates()]
                    }
                }
            ]
        }

    }

    static generateRandomCoordinates():number[][]{
        var randomCoordinates : number[][] = [];
        var firstRandom = [this.getRandomNumber(70,79),this.getRandomNumber(12,15)];
        randomCoordinates.push(firstRandom);
        for(let i=3;i--;){
            randomCoordinates.push([this.getRandomNumber(70,79),this.getRandomNumber(12,15)]);
        }
        randomCoordinates.push(firstRandom);

        return randomCoordinates;

    }

    static getRandomNumber(min:number,max:number): number{
        var diff = max - min;
        return parseFloat((min + Math.random()*diff).toFixed(6));
    }

    
}