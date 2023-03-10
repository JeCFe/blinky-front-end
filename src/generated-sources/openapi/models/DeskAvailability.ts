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
import type { Desk } from './Desk';
import {
    DeskFromJSON,
    DeskFromJSONTyped,
    DeskToJSON,
} from './Desk';

/**
 * 
 * @export
 * @interface DeskAvailability
 */
export interface DeskAvailability {
    /**
     * 
     * @type {Desk}
     * @memberof DeskAvailability
     */
    desk?: Desk;
    /**
     * 
     * @type {boolean}
     * @memberof DeskAvailability
     */
    readonly assigned?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DeskAvailability
     */
    assignedName?: string | null;
}

/**
 * Check if a given object implements the DeskAvailability interface.
 */
export function instanceOfDeskAvailability(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeskAvailabilityFromJSON(json: any): DeskAvailability {
    return DeskAvailabilityFromJSONTyped(json, false);
}

export function DeskAvailabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeskAvailability {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'desk': !exists(json, 'desk') ? undefined : DeskFromJSON(json['desk']),
        'assigned': !exists(json, 'assigned') ? undefined : json['assigned'],
        'assignedName': !exists(json, 'assignedName') ? undefined : json['assignedName'],
    };
}

export function DeskAvailabilityToJSON(value?: DeskAvailability | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'desk': DeskToJSON(value.desk),
        'assignedName': value.assignedName,
    };
}

