"use strict";
// import path from "path";
// import { Configuration, GeneralApi, OSWApi, OswUpload, OswUploadCollectionMethodEnum, OswUploadDataSourceEnum } from "tdei-client";
// import { Utility } from "./utils";
// import testHarness from "";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs");
var configuration_1 = require("./configuration");
var api_1 = require("./api");
var models_1 = require("./models");
var axios_1 = require("axios");
console.log('hello');
console.log(__dirname);
console.log(path.dirname(__dirname));
// let configuration = new Configuration({});
var configuration = new configuration_1.Configuration({
    username: "nareshd@gaussiansolutions.com",
    password: "Pa$s1word",
    basePath: "https://tdei-gateway-stage.azurewebsites.net"
});
var generalAPI = new api_1.GeneralApi(configuration);
generalAPI.authenticate({ username: configuration.username, password: configuration.password })
    .then(function (value) {
    configuration.baseOptions = {
        headers: {
            'Authorization': 'Bearer ' + value.data.access_token
        }
    };
    uploadOSW();
});
function uploadOSW() {
    return __awaiter(this, void 0, void 0, function () {
        var oswAPI, payload, parentFolder, payloadFile, filestream, blob, fileReadstream;
        return __generator(this, function (_a) {
            oswAPI = new api_1.OSWApi(configuration);
            payload = {
                tdei_org_id: "66c85a5a-2335-4b97-a0a3-0bb93cba1ae5",
                collected_by: "sfsd",
                collection_date: "2023-03-03T02:22:45.374Z",
                collection_method: models_1.OswUploadCollectionMethodEnum.Manual,
                publication_date: "2023-03-02T04:22:42.493Z",
                data_source: models_1.OswUploadDataSourceEnum.InHouse,
                polygon: {
                    type: models_1.GeoJsonObjectTypeEnum.FeatureCollection,
                    features: [
                        {
                            type: models_1.FeatureTypeEnum.Feature,
                            geometry: {
                                type: "Polygon",
                                coordinates: [
                                    [
                                        [
                                            77.588807608,
                                            12.976222962
                                        ],
                                        [
                                            77.589285425,
                                            12.972094479
                                        ],
                                        [
                                            77.593012392,
                                            12.974608826
                                        ],
                                        [
                                            77.588839463,
                                            12.976254003
                                        ],
                                        [
                                            77.588807608,
                                            12.976222962
                                        ]
                                    ]
                                ]
                            }
                        }
                    ]
                },
                osw_schema_version: "v0.1"
            };
            parentFolder = path.dirname(__dirname);
            payloadFile = path.join('/Users/nareshd/Documents/tdei/test-harness/src', 'payloads/gtfs-pathways/files/success_1_all_attrs.zip');
            console.log(payloadFile);
            filestream = fs.readFileSync(payloadFile);
            blob = new Blob([filestream], { type: 'application/zip' });
            fileReadstream = fs.createReadStream(payloadFile);
            // console.log("Blob -> ",blob);
            // filestream.b
            // filestream.buffer
            // const anotherBlob = new Blob(filestream.read());
            axios_1.default.interceptors.request.use(function (x) {
                // console.log(x);
                console.log(x.data);
                var data = x.data;
                var file = data.get('file');
                data.delete('file');
                data.set('file', file, 'abc.zip');
                console.log(file.name);
                return x;
            });
            // const filePath = path.join(__dirname,'../payloads/')
            // Readable.from(filestream.)
            oswAPI.uploadOswFileForm(payload, blob).then(function (value) {
                console.log('Completed upload');
                console.log(value.data);
            }).catch(function (e) {
                var _a;
                console.log('Failed to upload');
                // console.log(e);
                if (axios_1.default.isAxiosError(e)) {
                    var errorResponse = (_a = e.response) === null || _a === void 0 ? void 0 : _a.data;
                    // console.log(errorResponse);
                    console.log(e.status);
                    console.log(e.code);
                    console.log(e.response.status);
                    console.log(e.message);
                }
                else {
                    console.log('Non axios error');
                    console.log(e);
                }
            });
            return [2 /*return*/];
        });
    });
}
// const fileToBlob = async (file) => new Blob([new Uint8Array(await file.buffer)], {type: 'application/zip' });
