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

import { exists, mapValues } from '../runtime';
/**
 * 仕事
 * @export
 * @interface Job
 */
export interface Job {
    /**
     * id
     * @type {number}
     * @memberof Job
     */
    id?: number;
    /**
     * タイトル
     * @type {string}
     * @memberof Job
     */
    title?: string;
    /**
     * 内容
     * @type {string}
     * @memberof Job
     */
    content?: string;
    /**
     * 注目の求人
     * @type {boolean}
     * @memberof Job
     */
    attention?: boolean;
    /**
     * 職種id
     * @type {number}
     * @memberof Job
     */
    jobCategoryId?: number;
    /**
     * 金額
     * @type {number}
     * @memberof Job
     */
    price?: number;
    /**
     * 福利厚生
     * @type {string}
     * @memberof Job
     */
    welfare?: string;
    /**
     * 休日
     * @type {string}
     * @memberof Job
     */
    holiday?: string;
    /**
     * 画像URL
     * @type {string}
     * @memberof Job
     */
    image?: string;
    /**
     * 並び順
     * @type {number}
     * @memberof Job
     */
    sortNo?: number;
    /**
     * 作成日時
     * @type {Date}
     * @memberof Job
     */
    createdAt?: Date;
    /**
     * 更新日時
     * @type {Date}
     * @memberof Job
     */
    updatedAt?: Date;
}

export function JobFromJSON(json: any): Job {
    return JobFromJSONTyped(json, false);
}

export function JobFromJSONTyped(json: any, ignoreDiscriminator: boolean): Job {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'attention': !exists(json, 'attention') ? undefined : json['attention'],
        'jobCategoryId': !exists(json, 'jobCategoryId') ? undefined : json['jobCategoryId'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'welfare': !exists(json, 'welfare') ? undefined : json['welfare'],
        'holiday': !exists(json, 'holiday') ? undefined : json['holiday'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'sortNo': !exists(json, 'sortNo') ? undefined : json['sortNo'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function JobToJSON(value?: Job | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'content': value.content,
        'attention': value.attention,
        'jobCategoryId': value.jobCategoryId,
        'price': value.price,
        'welfare': value.welfare,
        'holiday': value.holiday,
        'image': value.image,
        'sortNo': value.sortNo,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString().substr(0,10)),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString().substr(0,10)),
    };
}

