import {Client, Environment, Models} from '../src/api';
import * as fs from 'fs';
describe('Files API', () => {

    let client: Client;
    let fileId: string;
    let createFileRequest; Models.CreateFileRequest;
    let externalLinkId: string;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Test);
    });

    test("Test: Create a file", async() => {
        const fileRequest: Models.CreateFileRequest = {
            displayName: "Driver License test1",
            linkedTo: "MU2n7BSovtwYsWYZF6rBnnzk",
            type: Models.CreateFileRequest.TypeEnum.DriversLicenseBack,
            tags: {
                "key_1": "value_1"
            }
        }

        createFileRequest = fileRequest;
        const createdFile = await client.Files.create(fileRequest, {headers: {['Content-Type'] : "application/vnd.api+json"}});
        
        fileId = <string>createdFile.id;
        expect(createdFile.linkedTo).toBe(fileRequest.linkedTo);
        expect(createdFile.displayName).toBe(fileRequest.displayName);
        expect(createdFile.type).toBe(fileRequest.type);
    });

    test("Test: Upload files directly", async() => {
        const fileName : string = __dirname.concat("/test.png");
        const fileStream : fs.ReadStream = fs.createReadStream(fileName);
        const uploadedFile = await client.Files.uploadFile(fileId, {
            file: fileStream
        });

        expect(uploadedFile.id).toBe(fileId);
        expect(uploadedFile.displayName).toBe(createFileRequest.displayName);
        expect(uploadedFile.type).toBe(createFileRequest.type);
    });

    test("Test: Create an external link", async() => {
        const externalLinkRequest: Models.CreateExternalLinkRequest = {
            type: Models.CreateExternalLinkRequest.TypeEnum.Upload,
            duration: 15
        }

        const createdExternalLink = await client.Files.createExternalLink(fileId,externalLinkRequest, 
            {headers: {['Content-Type'] : "application/vnd.api+json"}});
        
        externalLinkId = <string>createdExternalLink.id;
        expect(createdExternalLink.type).toBe(externalLinkRequest.type);
        expect(createdExternalLink.fileId).toBe(fileId);
    });

    test("Test: Download a file", async() => {
        const tempFileId = "FILE_bJecqoRPasStEPVpvKHtgA";
        const downloadedFile = await client.Files.downloadFile(tempFileId);
        
        expect(downloadedFile).toBeDefined();
    });

    test("Test: Fetch a file", async() => {
        const tempFileId = "FILE_bJecqoRPasStEPVpvKHtgA";
        const fetchedFile = await client.Files.get(tempFileId, 
            {headers: {['Content-Type'] : "application/vnd.api+json"}});
        
        expect(fetchedFile.id).toBe(tempFileId);
        expect(fetchedFile.status).toBe("UPLOADED");
    });

    test("Test: List all files", async() => {
        const fileList = await client.Files.list();

        expect(fileList.page.limit).toEqual(expect.any(Number));
        if (fileList.page.nextCursor != undefined){
            expect(fileList.page.nextCursor).toEqual(expect.any(String));
        }        
        expect(fileList.size).toEqual(expect.any(Number));
    });

    test("Test: Fetch an external link", async() => {
        // const tempFileId = "FILE_bJecqoRPasStEPVpvKHtgA";
        const fetchedExternalLink = await client.Files.getExternalLink(fileId, externalLinkId);
        
        expect(fetchedExternalLink.fileId).toBe(fileId);
        expect(fetchedExternalLink.type).toBe(Models.CreateExternalLinkRequest.TypeEnum.Upload);
    });

    test("Test: List all external links", async() => {
        const externalLinksList = await client.Files.listExternalLinks(fileId);

        expect(externalLinksList.page.limit).toEqual(expect.any(Number));
        if (externalLinksList.page.nextCursor != undefined){
            expect(externalLinksList.page.nextCursor).toEqual(expect.any(String));
        }        
        expect(externalLinksList.size).toEqual(expect.any(Number));
    });
})
