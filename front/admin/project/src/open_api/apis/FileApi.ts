/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Tutorial
 * OpenAPI Tutorial by halhorn
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    RequestFile,
    RequestFileFromJSON,
    RequestFileToJSON,
} from '../models';

export interface FilesPostRequest {
    requestFile?: RequestFile;
}

/**
 * FileApi - interface
 * 
 * @export
 * @interface FileApiInterface
 */
export interface FileApiInterface {
    /**
     * 詳細内容
     * @summary ファイル 追加
     * @param {RequestFile} [requestFile] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FileApiInterface
     */
    filesPostRaw(requestParameters: FilesPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<any>>;

    /**
     * 詳細内容
     * ファイル 追加
     */
    filesPost(requestParameters: FilesPostRequest, initOverrides?: RequestInit): Promise<any>;

}

/**
 * 
 */
export class FileApi extends runtime.BaseAPI implements FileApiInterface {

    /**
     * 詳細内容
     * ファイル 追加
     */
    async filesPostRaw(requestParameters: FilesPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAdmin", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/files`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RequestFileToJSON(requestParameters.requestFile),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * 詳細内容
     * ファイル 追加
     */
    async filesPost(requestParameters: FilesPostRequest, initOverrides?: RequestInit): Promise<any> {
        const response = await this.filesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}