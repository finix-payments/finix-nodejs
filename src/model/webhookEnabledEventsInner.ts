/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class WebhookEnabledEventsInner {
    /**
    * The entity type for the enabled event. There can only be one enabled event object for a given entity.
    */
    'entity'?: string;
    /**
    * A list of event types you want to receive for the specified `entity`.
    */
    'types'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "entity",
            "baseName": "entity",
            "type": "string"
        },
        {
            "name": "types",
            "baseName": "types",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return WebhookEnabledEventsInner.attributeTypeMap;
    }
}

