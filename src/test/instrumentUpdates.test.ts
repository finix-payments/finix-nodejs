import {Client, Environment, Models} from '../api';
import * as fs from 'fs';


describe('Instruments Updates API', () => {

    let client: Client;
    // let bankAccountId: string;
    // let paymentCardId: string;
    let instrumentUpdateId: string;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Sandbox);
    });

    test('Test: Create instrument update',async () => {
        const fileName : string = __dirname.concat("/test.csv");
        const fileStream : fs.ReadStream = fs.createReadStream(fileName);
        const updateRequest: Models.CreateInstrumentUpdateRequest = {
            file: fileStream,
            request: "{\"merchant\":\"MUucec6fHeaWo3VHYoSkUySM\"}"
        }

        const createdInstrumentUpdate = await client.InstrumentUpdates.create(updateRequest);
        instrumentUpdateId = <string> createdInstrumentUpdate.id;
        expect(createdInstrumentUpdate.merchant).toBe("MUucec6fHeaWo3VHYoSkUySM");
    })

    test('Test: Fetch a instrument update' ,async () => {
        const fetchedInstrumentUpdate = await client.InstrumentUpdates.get(instrumentUpdateId);
        expect(fetchedInstrumentUpdate.id).toBe(instrumentUpdateId);
        expect(fetchedInstrumentUpdate.merchant).toBe("MUucec6fHeaWo3VHYoSkUySM");
    });

    test("Test: Download a instrument update", async() => {
        const tempFileId = "IUp9oSWhWUF31DPrJ8CojQeQ";
        const downloadedFile = await client.InstrumentUpdates.download(tempFileId);
        expect(downloadedFile).toBeDefined();
    });
})
