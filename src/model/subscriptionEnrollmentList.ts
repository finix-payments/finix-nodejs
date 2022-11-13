/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { DisputeEvidenceLinks } from './disputeEvidenceLinks';
import { SubscriptionEnrollmentListEmbedded } from './subscriptionEnrollmentListEmbedded';
import { UsersListPage } from './usersListPage';

export class SubscriptionEnrollmentList {
    'page'?: UsersListPage;
    'embedded'?: SubscriptionEnrollmentListEmbedded;
    'links'?: DisputeEvidenceLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "page",
            "baseName": "page",
            "type": "UsersListPage"
        },
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "SubscriptionEnrollmentListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "DisputeEvidenceLinks"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionEnrollmentList.attributeTypeMap;
    }
}

