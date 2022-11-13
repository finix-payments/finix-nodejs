/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { SubscriptionSchedulesListEmbedded } from './subscriptionSchedulesListEmbedded';
import { SubscriptionSchedulesListLinks } from './subscriptionSchedulesListLinks';
import { UsersListPage } from './usersListPage';

/**
* `Subscription Schedule` resource.
*/
export class SubscriptionSchedulesList {
    'page'?: UsersListPage;
    'embedded'?: SubscriptionSchedulesListEmbedded;
    'links'?: SubscriptionSchedulesListLinks;

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
            "type": "SubscriptionSchedulesListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "SubscriptionSchedulesListLinks"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionSchedulesList.attributeTypeMap;
    }
}

