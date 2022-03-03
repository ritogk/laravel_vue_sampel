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
    JobCategory,
    JobCategoryFromJSON,
    JobCategoryToJSON,
    QueryJobCategoryList,
    QueryJobCategoryListFromJSON,
    QueryJobCategoryListToJSON,
    RequestJobCategory,
    RequestJobCategoryFromJSON,
    RequestJobCategoryToJSON,
} from '../models';

export interface JobCategoriesGetRequest {
    values?: QueryJobCategoryList;
}

export interface JobCategoriesIdDeleteRequest {
    id: number;
}

export interface JobCategoriesIdGetRequest {
    id: number;
}

export interface JobCategoriesIdPutRequest {
    id: number;
    requestJobCategory?: RequestJobCategory;
}

export interface JobCategoriesPostRequest {
    requestJobCategory?: RequestJobCategory;
}

/**
 * JobCategorieApi - interface
 * 
 * @export
 * @interface JobCategorieApiInterface
 */
export interface JobCategorieApiInterface {
    /**
     * 詳細内容
     * @summary 一覧取得
     * @param {QueryJobCategoryList} [values] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobCategorieApiInterface
     */
    jobCategoriesGetRaw(requestParameters: JobCategoriesGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<JobCategory>>>;

    /**
     * 詳細内容
     * 一覧取得
     */
    jobCategoriesGet(requestParameters: JobCategoriesGetRequest, initOverrides?: RequestInit): Promise<Array<JobCategory>>;

    /**
     * 詳細内容
     * @summary 削除
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobCategorieApiInterface
     */
    jobCategoriesIdDeleteRaw(requestParameters: JobCategoriesIdDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JobCategory>>;

    /**
     * 詳細内容
     * 削除
     */
    jobCategoriesIdDelete(requestParameters: JobCategoriesIdDeleteRequest, initOverrides?: RequestInit): Promise<JobCategory>;

    /**
     * 詳細内容
     * @summary 1件取得
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobCategorieApiInterface
     */
    jobCategoriesIdGetRaw(requestParameters: JobCategoriesIdGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JobCategory>>;

    /**
     * 詳細内容
     * 1件取得
     */
    jobCategoriesIdGet(requestParameters: JobCategoriesIdGetRequest, initOverrides?: RequestInit): Promise<JobCategory>;

    /**
     * 詳細内容
     * @summary 更新
     * @param {number} id 
     * @param {RequestJobCategory} [requestJobCategory] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobCategorieApiInterface
     */
    jobCategoriesIdPutRaw(requestParameters: JobCategoriesIdPutRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JobCategory>>;

    /**
     * 詳細内容
     * 更新
     */
    jobCategoriesIdPut(requestParameters: JobCategoriesIdPutRequest, initOverrides?: RequestInit): Promise<JobCategory>;

    /**
     * 詳細内容
     * @summary 職種 追加
     * @param {RequestJobCategory} [requestJobCategory] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobCategorieApiInterface
     */
    jobCategoriesPostRaw(requestParameters: JobCategoriesPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JobCategory>>;

    /**
     * 詳細内容
     * 職種 追加
     */
    jobCategoriesPost(requestParameters: JobCategoriesPostRequest, initOverrides?: RequestInit): Promise<JobCategory>;

}

/**
 * 
 */
export class JobCategorieApi extends runtime.BaseAPI implements JobCategorieApiInterface {

    /**
     * 詳細内容
     * 一覧取得
     */
    async jobCategoriesGetRaw(requestParameters: JobCategoriesGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<JobCategory>>> {
        const queryParameters: any = {};

        if (requestParameters.values !== undefined) {
            queryParameters['values'] = requestParameters.values;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/job_categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(JobCategoryFromJSON));
    }

    /**
     * 詳細内容
     * 一覧取得
     */
    async jobCategoriesGet(requestParameters: JobCategoriesGetRequest, initOverrides?: RequestInit): Promise<Array<JobCategory>> {
        const response = await this.jobCategoriesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 詳細内容
     * 削除
     */
    async jobCategoriesIdDeleteRaw(requestParameters: JobCategoriesIdDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JobCategory>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling jobCategoriesIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAdmin", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/job_categories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobCategoryFromJSON(jsonValue));
    }

    /**
     * 詳細内容
     * 削除
     */
    async jobCategoriesIdDelete(requestParameters: JobCategoriesIdDeleteRequest, initOverrides?: RequestInit): Promise<JobCategory> {
        const response = await this.jobCategoriesIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 詳細内容
     * 1件取得
     */
    async jobCategoriesIdGetRaw(requestParameters: JobCategoriesIdGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JobCategory>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling jobCategoriesIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/job_categories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobCategoryFromJSON(jsonValue));
    }

    /**
     * 詳細内容
     * 1件取得
     */
    async jobCategoriesIdGet(requestParameters: JobCategoriesIdGetRequest, initOverrides?: RequestInit): Promise<JobCategory> {
        const response = await this.jobCategoriesIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 詳細内容
     * 更新
     */
    async jobCategoriesIdPutRaw(requestParameters: JobCategoriesIdPutRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JobCategory>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling jobCategoriesIdPut.');
        }

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
            path: `/job_categories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RequestJobCategoryToJSON(requestParameters.requestJobCategory),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobCategoryFromJSON(jsonValue));
    }

    /**
     * 詳細内容
     * 更新
     */
    async jobCategoriesIdPut(requestParameters: JobCategoriesIdPutRequest, initOverrides?: RequestInit): Promise<JobCategory> {
        const response = await this.jobCategoriesIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 詳細内容
     * 職種 追加
     */
    async jobCategoriesPostRaw(requestParameters: JobCategoriesPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JobCategory>> {
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
            path: `/job_categories`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RequestJobCategoryToJSON(requestParameters.requestJobCategory),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobCategoryFromJSON(jsonValue));
    }

    /**
     * 詳細内容
     * 職種 追加
     */
    async jobCategoriesPost(requestParameters: JobCategoriesPostRequest, initOverrides?: RequestInit): Promise<JobCategory> {
        const response = await this.jobCategoriesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
