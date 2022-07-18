import {Client, Environment, Models} from '../src/api';

describe('Devices API', () => {

    let client: Client;
    let deviceId: string;
    let merchantId: string = "MUu56ZGx3Xb6U9gAqKfgNisd";

    beforeAll(() => {
        const userName = 'USjHFGYvecE4LBitYG8KDE2g';
        const password = 'b698f403-d9b7-4157-82d8-162cea8c8cc3';

        client = new Client(userName, password, Environment.Test);
    });

    test("Test: Create a device", async() => {
    const deviceRequest: Models.CreateDevice = {
            name: "Finix triPOS #1",
            model: Models.CreateDevice.ModelEnum.Mx915,
            description: "Mike Jones",
            configuration: {
                allowDebit: true,
                promptSignature: "NEVER",
                bypassDeviceOnCapture: true
            }
        };

        const createdDevice = await client.Devices.create(merchantId, deviceRequest, {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        deviceId = <string> createdDevice.id;
        expect(createdDevice.merchant).toBe(merchantId);
        expect(createdDevice.description).toBe(deviceRequest.description);
        expect(createdDevice.model).toBe(deviceRequest.model);
    });

     test("Test: Fetch a device", async() => { 
         const fetchedDevice = await client.Devices.get(deviceId, 
            {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
 
         expect(fetchedDevice.model).toBe("MX915");
         expect(fetchedDevice.merchant).toBe(merchantId);
         expect(fetchedDevice.configurationDetails?.allowDebit).toBe(true);
     });

})
