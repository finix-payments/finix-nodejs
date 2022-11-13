/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { DisputeEvidenceLinks } from './disputeEvidenceLinks';

export class DisputeEvidence {
    /**
    * The ID of the `Dispute` resource.
    */
    'id'?: string;
    /**
    * Timestamp of when the object was created.
    */
    'createdAt'?: Date;
    /**
    * Timestamp of when the object was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The ID of the `Dispute` associated with the evidence.
    */
    'dispute'?: string;
    /**
    * Result of the evidence uploaded. - **PENDING**: The evidence file has not yet been submitted to the Processor. No user action is required. - **SUCCEEDED**: The evidence file has been successfully sent to the Processor. No further user action is required. - **CANCELED**: The evidence file upload was not completed due to user action. - **FAILED**: An issue occurred. User action is required**. Any of the following issues could have occurred:   - There was an error in the system and the user should retry uploading their evidence file.   - There is an issue with the file and the user should retry uploading a different file.   - There is an issue and the user should contact Support.
    */
    'state'?: DisputeEvidence.StateEnum | string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    'links'?: DisputeEvidenceLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "dispute",
            "baseName": "dispute",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "DisputeEvidence.StateEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "DisputeEvidenceLinks"
        }    ];

    static getAttributeTypeMap() {
        return DisputeEvidence.attributeTypeMap;
    }
}

export namespace DisputeEvidence {
    export enum StateEnum {
        Pending = <any> 'PENDING',
        Succeeded = <any> 'SUCCEEDED',
        Canceled = <any> 'CANCELED',
        Failed = <any> 'FAILED'
    }
}
