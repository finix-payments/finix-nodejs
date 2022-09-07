require("mocha");
const {Client, Environment, Models} = require ('../api');
var assert = require("chai").assert;
const fs = require('fs');
describe('Files API', function () {

    let client;
    let fileId;
    let createFileRequest;
    let externalLinkId;

    before(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Test);
    });

    it("Test: Create a file", async function(){
        const fileRequest  = {
            displayName: "Driver License test1",
            linkedTo: "MU2n7BSovtwYsWYZF6rBnnzk",
            type: Models.CreateFileRequest.TypeEnum.DriversLicenseBack,
            tags: {
                "key_1": "value_1"
            }
        }

        createFileRequest = fileRequest;
        const createdFile = await client.Files.create(fileRequest);
        
        fileId = createdFile.id;
        assert.equal(createdFile.linkedTo, fileRequest.linkedTo);
        assert.equal(createdFile.displayName, fileRequest.displayName);
        assert.equal(createdFile.type, fileRequest.type);
    });

    it("Test: Upload files directly", async function () {
        const fileName = __dirname.concat("/test.png");
        const fileStream = fs.createReadStream(fileName);
        const uploadedFile = await client.Files.upload(fileId, {
            file: fileStream
        });

        assert.equal(uploadedFile.id, fileId);
        assert.equal(uploadedFile.displayName, createFileRequest.displayName);
        assert.equal(uploadedFile.type, createFileRequest.type);
    });

    it("Test: Create an external link", async function () {
        const externalLinkRequest = {
            type: Models.CreateExternalLinkRequest.TypeEnum.Upload,
            duration: 15
        }

        const createdExternalLink = await client.Files.createExternalLink(fileId,externalLinkRequest);
        
        externalLinkId = createdExternalLink.id;
        assert.equal(createdExternalLink.type, externalLinkRequest.type);
        assert.equal(createdExternalLink.fileId, fileId);
    });

    it("Test: Download a file", async function () {
        const tempFileId = "FILE_bJecqoRPasStEPVpvKHtgA";
        const downloadedFile = await client.Files.download(tempFileId);
        
        assert.exists(downloadedFile);
    });

    it("Test: Fetch a file", async function () {
        const tempFileId = "FILE_bJecqoRPasStEPVpvKHtgA";
        const fetchedFile = await client.Files.get(tempFileId);
        
        assert.equal(fetchedFile.id, tempFileId);
        assert.equal(fetchedFile.status, "UPLOADED");
    });

    it("Test: List all files", async function () {
        this.timeout(20000);
        const fileList = await client.Files.list();

        assert.typeOf(fileList.page.limit, 'number');
        if (fileList.page.hasOwnProperty('offset')){
            assert.typeOf(fileList.page.offset, 'number');
        }
        else{
            if (fileList.page.nextCursor != undefined) {
                assert.typeOf(fileList.page.nextCursor, 'string');
            }
        }        
        assert.typeOf(fileList.size, 'number');

        if(fileList.hasMore) {
            const nextFileList = await fileList.listNext();
            assert.typeOf(nextFileList.page.limit, 'number');
            assert.typeOf(nextFileList.size, 'number');
        }
    });

    it("Test: Fetch an external link", async function () {
        // const tempFileId = "FILE_bJecqoRPasStEPVpvKHtgA";
        const fetchedExternalLink = await client.Files.getExternalLink(fileId, externalLinkId);
        
        assert.equal(fetchedExternalLink.fileId, fileId);
        assert.equal(fetchedExternalLink.type, Models.CreateExternalLinkRequest.TypeEnum.Upload);
    });

    it("Test: List all external links", async function () {
        this.timeout(20000);
        const externalLinksList = await client.Files.listExternalLinks(fileId);

        assert.typeOf(externalLinksList.page.limit, 'number');
        if (externalLinksList.page.hasOwnProperty('offset')){
            assert.typeOf(externalLinksList.page.offset, 'number');
        }
        else{
            if (externalLinksList.page.nextCursor != undefined) {
                assert.typeOf(externalLinksList.page.nextCursor, 'string');
            }
        }        
        assert.typeOf(externalLinksList.size, 'number');

        if(externalLinksList.hasMore) {
            const nextExternalLinksList = await externalLinksList.listNext();
            assert.typeOf(nextExternalLinksList.page.limit, 'number');
            assert.typeOf(nextExternalLinksList.size, 'number');
        }
    });
})
