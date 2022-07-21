import {Client, Environment, Models} from '../src/api';
import * as fs from 'fs';

describe('Dispute API', () => {

    let client: Client;
    let evidenceID: string;
    let disputeId: string = "DIs7yQRkHDdMYhurzYz72SFk";

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Test);
    });

    test("Test: Upload dispute evidence", async() => {
   
        const fileName : string = __dirname.concat("/test.png");
        const fileObject: fs.ReadStream = fs.createReadStream(fileName);
        const uploadedDisputeEvidence = await client.Disputes.createDisputeEvidence(disputeId, {
            file: fileObject},
            {headers:{["Finix-Version"]: "2022-02-01"}});
        evidenceID = <string>uploadedDisputeEvidence.id;

        expect(uploadedDisputeEvidence.dispute).toBe(disputeId);
        expect(uploadedDisputeEvidence.tags?.["file-name"]).toBe("test.png");
    });

    test("Test: Fetch a dispute", async() => {
   
        const disputeId: string = "DIs7yQRkHDdMYhurzYz72SFk";
        const fetchedDispute = await client.Disputes.get(disputeId,
            {headers:{["Finix-Version"]: "2022-02-01"}});
        
        expect(fetchedDispute.id).toBe(disputeId);
        expect(fetchedDispute.amount).toBe(888888);
        expect(fetchedDispute.reason).toBe(Models.Dispute.ReasonEnum.Fraud);
        // switch (fetchedDispute.reason){
        //     case api.Models.Dispute.ReasonEnum.Fraud:
        //     case api.Models.DisputeReasonEnum.Fraud;
        //         // logic here
        // }
    });

    test("Test: List disputes", async() => {
        const disputeList = await client.Disputes.list(undefined,
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(disputeList.page.limit).toEqual(expect.any(Number));
        if (disputeList.page.hasOwnProperty('offset')){
            expect(disputeList.page.offset).toEqual(expect.any(Number));
        }
        else{
            if (disputeList.page.nextCursor != undefined) {
                expect(disputeList.page.nextCursor).toEqual(expect.any(String));
            }
        }
        expect(disputeList.size).toEqual(expect.any(Number));

        if(disputeList.hasMore) {
            const nextDisputeList = await disputeList.listNext();
            expect(nextDisputeList.page.limit).toEqual(expect.any(Number));
            expect(nextDisputeList.size).toEqual(expect.any(Number));
        }
    });
    
    test("Test: Fetch dispute adjustment transfers", async() => {
        const disputeAdjTransferList = await client.Disputes.listDisputesAdjustments(disputeId, undefined,
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(disputeAdjTransferList.page.limit).toEqual(expect.any(Number));
        if (disputeAdjTransferList.page.hasOwnProperty('offset')){
            expect(disputeAdjTransferList.page.offset).toEqual(expect.any(Number));
        }
        else{
            if (disputeAdjTransferList.page.nextCursor != undefined) {
                expect(disputeAdjTransferList.page.nextCursor).toEqual(expect.any(String));
            }
        }
        expect(disputeAdjTransferList.size).toEqual(expect.any(Number));

        if(disputeAdjTransferList.hasMore) {
            const nextDisputeAdjList = await disputeAdjTransferList.listNext();
            expect(nextDisputeAdjList.page.limit).toEqual(expect.any(Number));
            expect(nextDisputeAdjList.size).toEqual(expect.any(Number));
        }
    });

    test("Test: Fetch dispute evidence files", async() => {
        const disputeEvidenceFile = await client.Disputes.getDisputeEvidence(disputeId, evidenceID,
        {headers:{["Content-Type"]: "application/vnd.json+api"}});

        expect(disputeEvidenceFile.dispute).toBe(disputeId);
        expect(disputeEvidenceFile.tags?.["file-name"]).toBe("test.png");
        expect(disputeEvidenceFile.id).toBe(evidenceID);
    });

    test("Test: List dispute evidence files", async() => {
        const disputeEvidenceList = await client.Disputes.listDisputeEvidenceByDisputeId(disputeId, undefined,
        {headers:{["Content-Type"]: "application/vnd.json+api"}});

        expect(disputeEvidenceList.page.limit).toEqual(expect.any(Number));
        if (disputeEvidenceList.page.hasOwnProperty('offset')){
            expect(disputeEvidenceList.page.offset).toEqual(expect.any(Number));
        }
        else{
            if (disputeEvidenceList.page.nextCursor != undefined) {
                expect(disputeEvidenceList.page.nextCursor).toEqual(expect.any(String));
            }
        }        
        expect(disputeEvidenceList.size).toEqual(expect.any(Number));

        if(disputeEvidenceList.hasMore) {
            const nextDipusteEvidenceList = await disputeEvidenceList.listNext();
            expect(nextDipusteEvidenceList.page.limit).toEqual(expect.any(Number));
            expect(nextDipusteEvidenceList.size).toEqual(expect.any(Number));
        }
    });


})
