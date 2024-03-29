import {Client, Environment, Models} from '../api';

describe('Webhooks API', () => {

    let client: Client;
    let webhookId: string;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Sandbox);
    });

    test("Test: Create a webhook", async() => {
        const urlValue = "https://example.com/";
        let webhook: Models.Webhook;

        webhook = await client.Webhooks.create({
            url: urlValue
        });
        webhookId = <string>webhook.id;
        // clean up webhooks by disabling
        await client.Webhooks.update(webhookId, {
            url: urlValue,
            enabled: false
        });
        expect(webhook.url).toBe(urlValue);
        expect(webhook.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    }, 20000);


    test("Test: Fetch a webhook", async() => {
        const urlValue = "https://example.com/";
        const fetchedWebhook = await client.Webhooks.get(webhookId);

        expect(fetchedWebhook.url).toEqual(urlValue);   
    });

    test("Test: List all webhooks", async() => {
        const webhookList = await client.Webhooks.list();

        expect(webhookList.page.limit).toEqual(expect.any(Number));
        if (webhookList.page.hasOwnProperty('offset')){
            expect(webhookList.page.offset).toEqual(expect.any(Number));
        }
        else{
            if (webhookList.page.nextCursor != undefined) {
                expect(webhookList.page.nextCursor).toEqual(expect.any(String));
            }
        }        
        expect(webhookList.size).toEqual(expect.any(Number));

        if(webhookList.hasMore) {
            const nextWebhookList = await webhookList.listNext();
            expect(nextWebhookList.page.limit).toEqual(expect.any(Number));
            expect(nextWebhookList.size).toEqual(expect.any(Number));
        }
    }, 20000);

    test("Test: Update webhook", async() => {
        const urlValue = "https://example.com/";
        const updatedwebHook = await client.Webhooks.update(webhookId, {
            url: urlValue,
            enabled: true
        });

        expect(updatedwebHook.url).toEqual(urlValue);   
        expect(updatedwebHook.enabled).toEqual(true);

        await client.Webhooks.update(webhookId, {
            url: urlValue,
            enabled: false
        });

    });
})
