// import path from "path";
// import { Configuration, GeneralApi, OSWApi, OswUpload, OswUploadCollectionMethodEnum, OswUploadDataSourceEnum } from "tdei-client";
// import { Utility } from "./utils";
// import testHarness from "";

import * as path from "path";
import * as fs from "fs";
import { Configuration } from "./configuration";
import { GeneralApi, OSWApi } from "./api";
import { FeatureTypeEnum, GeoJsonObjectTypeEnum, OswUpload, OswUploadCollectionMethodEnum, OswUploadDataSourceEnum } from "./models";
import { Utility } from "./utils";
import axios from "axios";
console.log('hello');

console.log(__dirname);

console.log(path.dirname(__dirname));

// let configuration = new Configuration({});

let configuration = new Configuration({
    username: "nareshd@gaussiansolutions.com",
    password: "Pa$s1word",
    basePath: "https://tdei-gateway-stage.azurewebsites.net"
    
});

let generalAPI = new GeneralApi(configuration);
           generalAPI.authenticate({username:configuration.username,password:configuration.password})
        .then((value)=>{
            configuration.baseOptions = {
                headers:{
                    'Authorization':'Bearer '+ value.data.access_token
                }
            };
            uploadOSW();
        });
       

        async function  uploadOSW() {

let oswAPI = new OSWApi(configuration); 
        let payload: OswUpload = {
            tdei_org_id : "66c85a5a-2335-4b97-a0a3-0bb93cba1ae5",
            collected_by : "sfsd",
            collection_date :   "2023-03-03T02:22:45.374Z",
            collection_method: OswUploadCollectionMethodEnum.Manual,
            publication_date : "2023-03-02T04:22:42.493Z",
            data_source:OswUploadDataSourceEnum.InHouse,
            polygon : {
                type: GeoJsonObjectTypeEnum.FeatureCollection,
                features: [
                  {
                    type: FeatureTypeEnum.Feature,
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
              osw_schema_version:"v0.1"
        };
        // let oswUpload : OswUpload = {
        //     "tdei_org_id": "66c85a5a-2335-4b97-a0a3-0bb93cba1ae5",
        //     "collected_by": "sfsd",
        //     "collection_date": "2023-03-03T02:22:45.374Z",
        //     "collection_method":OswUploadCollectionMethodEnum.Manual,
        //     "publication_date": "2023-03-02T04:22:42.493Z",
        //     "data_source": OswUploadDataSourceEnum.InHouse,
        //     "polygon": {
        //         "type": GeoJsonObjectTypeEnum.FeatureCollection,
        //         "features": [
        //           {
        //             "type": FeatureTypeEnum.Feature,
        //             "geometry": {
        //               "type": "Polygon",
        //               "coordinates": [
        //                 [
        //                   [
        //                     77.588807608,
        //                     12.976222962
        //                   ],
        //                   [
        //                     77.589285425,
        //                     12.972094479
        //                   ],
        //                   [
        //                     77.593012392,
        //                     12.974608826
        //                   ],
        //                   [
        //                     77.588839463,
        //                     12.976254003
        //                   ],
        //                   [
        //                     77.588807608,
        //                     12.976222962
        //                   ]
        //                 ]
        //               ]
        //             }
        //           }
        //         ]
        //       },
        //     "osw_schema_version": "v0.1"
        //   };
        const parentFolder = path.dirname(__dirname);
        const payloadFile = path.join('/Users/nareshd/Documents/tdei/test-harness/src','payloads/gtfs-pathways/files/success_1_all_attrs.zip');
        console.log(payloadFile);
        let filestream = fs.readFileSync(payloadFile);
        // console.log(filestream);
         
        
        const blob = new Blob([filestream],{type:'application/zip'}) ;//await fileToBlob(filestream);
        
        // const newFile = new File([filestream],'abc.zip');
        let fileReadstream = fs.createReadStream(payloadFile);
        // console.log("Blob -> ",blob);
        // filestream.b
        // filestream.buffer
        // const anotherBlob = new Blob(filestream.read());
        axios.interceptors.request.use((x) => {
            // console.log(x);
            console.log(x.data);
            const data = x.data as FormData;
            var file = data.get('file') as File;
            data.delete('file');
            data.set('file',file,'abc.zip');
            console.log(file.name);
            return x;
        });

        
        // const filePath = path.join(__dirname,'../payloads/')
        // Readable.from(filestream.)
         oswAPI.uploadOswFileForm(payload, blob).then((value)=>{
            console.log('Completed upload');
            console.log(value.data);
        }).catch((e)=>{
            console.log('Failed to upload');
            // console.log(e);
            if (axios.isAxiosError(e)) {
                const errorResponse = e.response?.data;
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
        // console.log(fileUpload);
    }
    
    // const fileToBlob = async (file) => new Blob([new Uint8Array(await file.buffer)], {type: 'application/zip' });