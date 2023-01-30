/* tslint:disable */
/* eslint-disable */
/**
 * Blinky-Backend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DeskAvailability } from './DeskAvailability';
import {
    DeskAvailabilityFromJSON,
    DeskAvailabilityFromJSONTyped,
    DeskAvailabilityToJSON,
} from './DeskAvailability';

/**
 * 
 * @export
 * @interface ViewDesksResponse
 */
export interface ViewDesksResponse {
    /**
     * 
     * @type {Array<DeskAvailability>}
     * @memberof ViewDesksResponse
     */
    readonly desksAvailability?: Array<DeskAvailability> | null;
}

/**
 * Check if a given object implements the ViewDesksResponse interface.
 */
export function instanceOfViewDesksResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ViewDesksResponseFromJSON(json: any): ViewDesksResponse {
    return ViewDesksResponseFromJSONTyped(json, false);
}

export function ViewDesksResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewDesksResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'desksAvailability': !exists(json, 'desksAvailability') ? undefined : (json['desksAvailability'] === null ? null : (json['desksAvailability'] as Array<any>).map(DeskAvailabilityFromJSON)),
    };
}

export function ViewDesksResponseToJSON(value?: ViewDesksResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}
