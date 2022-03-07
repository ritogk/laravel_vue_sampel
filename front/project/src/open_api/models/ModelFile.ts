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
 * ファイルパス
 * @export
 * @interface ModelFile
 */
export interface ModelFile {
    /**
     * ストレージパス
     * @type {string}
     * @memberof ModelFile
     */
    storagePath?: string;
    /**
     * フルパス
     * @type {string}
     * @memberof ModelFile
     */
    url?: string;
}

export function ModelFileFromJSON(json: any): ModelFile {
    return ModelFileFromJSONTyped(json, false);
}

export function ModelFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelFile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'storagePath': !exists(json, 'storagePath') ? undefined : json['storagePath'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function ModelFileToJSON(value?: ModelFile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'storagePath': value.storagePath,
        'url': value.url,
    };
}
