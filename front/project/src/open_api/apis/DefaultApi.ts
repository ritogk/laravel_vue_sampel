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
    Entry,
    EntryFromJSON,
    EntryToJSON,
    Job,
    JobFromJSON,
    JobToJSON,
    JobCategory,
    JobCategoryFromJSON,
    JobCategoryToJSON,
    QueryEntryList,
    QueryEntryListFromJSON,
    QueryEntryListToJSON,
    QueryJobCategoryList,
    QueryJobCategoryListFromJSON,
    QueryJobCategoryListToJSON,
    QueryJobList,
    QueryJobListFromJSON,
    QueryJobListToJSON,
    QueryUserList,
    QueryUserListFromJSON,
    QueryUserListToJSON,
    RequestEntry,
    RequestEntryFromJSON,
    RequestEntryToJSON,
    RequestFile,
    RequestFileFromJSON,
    RequestFileToJSON,
    RequestJob,
    RequestJobFromJSON,
    RequestJobToJSON,
    RequestJobCategory,
    RequestJobCategoryFromJSON,
    RequestJobCategoryToJSON,
    RequestUser,
    RequestUserFromJSON,
    RequestUserToJSON,
    User,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface EntriesGetRequest {
    values?: QueryEntryList;
}

export interface EntriesPostRequest {
    requestEntry?: RequestEntry;
}

export interface FilesPostRequest {
    requestFile?: RequestFile;
}

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

export interface JobsGetRequest {
    values?: QueryJobList;
}

export interface JobsIdDeleteRequest {
    id: number;
}

export interface JobsIdGetRequest {
    id: number;
}

export interface JobsIdPutRequest {
    id: number;
    requestJobCategory?: RequestJobCategory;
}

export interface JobsPostRequest {
    requestJob?: RequestJob;
}

export interface UsersGetRequest {
    values?: QueryUserList;
}

export interface UsersPostRequest {
    requestUser?: RequestUser;
}

/**
 * DefaultApi - interface
 * 
 * @export
 * @interface DefaultApiInterface
 */
export interface DefaultApiInterface {
    /**
     * 詳細内容
     * @summary 一覧取得
     * @param {QueryEntryList} [values] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    entriesGetRaw(requestParameters: EntriesGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Entry>>>;

    /**
     * 詳細内容
     * 一覧取得
     */
    entriesGet(requestParameters: EntriesGetRequest, initOverrides?: RequestInit): Promise<Array<Entry>>;

    /**
     * 詳細内容
     * @summary 応募 追加
     * @param {RequestEntry} [requestEntry] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    entriesPostRaw(requestParameters: EntriesPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Entry>>;

    /**
     * 詳細内容
     * 応募 追加
     */
    entriesPost(requestParameters: EntriesPostRequest, initOverrides?: RequestInit): Promise<Entry>;

    /**
     * 詳細内容
     * @summary ファイル 追加
     * @param {RequestFile} [requestFile] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    filesPostRaw(requestParameters: FilesPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<any>>;

    /**
     * 詳細内容
     * ファイル 追加
     */
    filesPost(requestParameters: FilesPostRequest, initOverrides?: RequestInit): Promise<any>;

    /**
     * 詳細内容
     * @summary 一覧取得
     * @param {QueryJobCategoryList} [values] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
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
     * @memberof DefaultApiInterface
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
     * @memberof DefaultApiInterface
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
     * @memberof DefaultApiInterface
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
     * @memberof DefaultApiInterface
     */
    jobCategoriesPostRaw(requestParameters: JobCategoriesPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JobCategory>>;

    /**
     * 詳細内容
     * 職種 追加
     */
    jobCategoriesPost(requestParameters: JobCategoriesPostRequest, initOverrides?: RequestInit): Promise<JobCategory>;

    /**
     * 詳細内容
     * @summary 一覧取得
     * @param {QueryJobList} [values] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    jobsGetRaw(requestParameters: JobsGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Job>>>;

    /**
     * 詳細内容
     * 一覧取得
     */
    jobsGet(requestParameters: JobsGetRequest, initOverrides?: RequestInit): Promise<Array<Job>>;

    /**
     * 詳細内容
     * @summary 削除
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    jobsIdDeleteRaw(requestParameters: JobsIdDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Job>>;

    /**
     * 詳細内容
     * 削除
     */
    jobsIdDelete(requestParameters: JobsIdDeleteRequest, initOverrides?: RequestInit): Promise<Job>;

    /**
     * 詳細内容
     * @summary 1件取得
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    jobsIdGetRaw(requestParameters: JobsIdGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Job>>;

    /**
     * 詳細内容
     * 1件取得
     */
    jobsIdGet(requestParameters: JobsIdGetRequest, initOverrides?: RequestInit): Promise<Job>;

    /**
     * 詳細内容
     * @summary 更新
     * @param {number} id 
     * @param {RequestJobCategory} [requestJobCategory] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    jobsIdPutRaw(requestParameters: JobsIdPutRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Job>>;

    /**
     * 詳細内容
     * 更新
     */
    jobsIdPut(requestParameters: JobsIdPutRequest, initOverrides?: RequestInit): Promise<Job>;

    /**
     * 詳細内容
     * @summary 仕事 追加
     * @param {RequestJob} [requestJob] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    jobsPostRaw(requestParameters: JobsPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Job>>;

    /**
     * 詳細内容
     * 仕事 追加
     */
    jobsPost(requestParameters: JobsPostRequest, initOverrides?: RequestInit): Promise<Job>;

    /**
     * 詳細内容
     * @summary 一覧取得
     * @param {QueryUserList} [values] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    usersGetRaw(requestParameters: UsersGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<User>>>;

    /**
     * 詳細内容
     * 一覧取得
     */
    usersGet(requestParameters: UsersGetRequest, initOverrides?: RequestInit): Promise<Array<User>>;

    /**
     * 詳細内容
     * @summary 会員 追加
     * @param {RequestUser} [requestUser] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    usersPostRaw(requestParameters: UsersPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<User>>;

    /**
     * 詳細内容
     * 会員 追加
     */
    usersPost(requestParameters: UsersPostRequest, initOverrides?: RequestInit): Promise<User>;

}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI implements DefaultApiInterface {

    /**
     * 詳細内容
     * 一覧取得
     */
    async entriesGetRaw(requestParameters: EntriesGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Entry>>> {
        const queryParameters: any = {};

        if (requestParameters.values !== undefined) {
            queryParameters['values'] = requestParameters.values;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/entries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntryFromJSON));
    }

    /**
     * 詳細内容
     * 一覧取得
     */
    async entriesGet(requestParameters: EntriesGetRequest, initOverrides?: RequestInit): Promise<Array<Entry>> {
        const response = await this.entriesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 詳細内容
     * 応募 追加
     */
    async entriesPostRaw(requestParameters: EntriesPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Entry>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerFront", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/entries`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RequestEntryToJSON(requestParameters.requestEntry),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntryFromJSON(jsonValue));
    }

    /**
     * 詳細内容
     * 応募 追加
     */
    async entriesPost(requestParameters: EntriesPostRequest, initOverrides?: RequestInit): Promise<Entry> {
        const response = await this.entriesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

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

    /**
     * 詳細内容
     * 一覧取得
     */
    async jobsGetRaw(requestParameters: JobsGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Job>>> {
        const queryParameters: any = {};

        if (requestParameters.values !== undefined) {
            queryParameters['values'] = requestParameters.values;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/jobs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(JobFromJSON));
    }

    /**
     * 詳細内容
     * 一覧取得
     */
    async jobsGet(requestParameters: JobsGetRequest, initOverrides?: RequestInit): Promise<Array<Job>> {
        const response = await this.jobsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 詳細内容
     * 削除
     */
    async jobsIdDeleteRaw(requestParameters: JobsIdDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Job>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling jobsIdDelete.');
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
            path: `/jobs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobFromJSON(jsonValue));
    }

    /**
     * 詳細内容
     * 削除
     */
    async jobsIdDelete(requestParameters: JobsIdDeleteRequest, initOverrides?: RequestInit): Promise<Job> {
        const response = await this.jobsIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 詳細内容
     * 1件取得
     */
    async jobsIdGetRaw(requestParameters: JobsIdGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Job>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling jobsIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/jobs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobFromJSON(jsonValue));
    }

    /**
     * 詳細内容
     * 1件取得
     */
    async jobsIdGet(requestParameters: JobsIdGetRequest, initOverrides?: RequestInit): Promise<Job> {
        const response = await this.jobsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 詳細内容
     * 更新
     */
    async jobsIdPutRaw(requestParameters: JobsIdPutRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Job>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling jobsIdPut.');
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
            path: `/jobs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RequestJobCategoryToJSON(requestParameters.requestJobCategory),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobFromJSON(jsonValue));
    }

    /**
     * 詳細内容
     * 更新
     */
    async jobsIdPut(requestParameters: JobsIdPutRequest, initOverrides?: RequestInit): Promise<Job> {
        const response = await this.jobsIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 詳細内容
     * 仕事 追加
     */
    async jobsPostRaw(requestParameters: JobsPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Job>> {
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
            path: `/jobs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RequestJobToJSON(requestParameters.requestJob),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobFromJSON(jsonValue));
    }

    /**
     * 詳細内容
     * 仕事 追加
     */
    async jobsPost(requestParameters: JobsPostRequest, initOverrides?: RequestInit): Promise<Job> {
        const response = await this.jobsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 詳細内容
     * 一覧取得
     */
    async usersGetRaw(requestParameters: UsersGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<User>>> {
        const queryParameters: any = {};

        if (requestParameters.values !== undefined) {
            queryParameters['values'] = requestParameters.values;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAdmin", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

    /**
     * 詳細内容
     * 一覧取得
     */
    async usersGet(requestParameters: UsersGetRequest, initOverrides?: RequestInit): Promise<Array<User>> {
        const response = await this.usersGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 詳細内容
     * 会員 追加
     */
    async usersPostRaw(requestParameters: UsersPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<User>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RequestUserToJSON(requestParameters.requestUser),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * 詳細内容
     * 会員 追加
     */
    async usersPost(requestParameters: UsersPostRequest, initOverrides?: RequestInit): Promise<User> {
        const response = await this.usersPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}