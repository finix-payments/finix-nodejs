import * as api from './api';
import {Client, Environment} from './api';

import * as http from 'http';
import * as fs from 'fs';

const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

const client = new Client(userName, password, Environment.Test);
const client_identity = new api.IdentitiesApi(userName, password);
// declare module "*.png" {
//     const value: any;
//     export = value;
// }
// const environment = api.Environment.Test;

async function quickstart(){
    try
    {
        // let transferList = await client.Transfers.list({"limit": 2}, 
        // {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        // console.log(transferList.page.nextCursor);

        // const oneTransfer: api.Transfer = await client.Transfers.get("TRmB5hgMVPYxiacYkGoCRjHq", 
        //  {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        // console.log(oneTransfer.state);
        // var fileBuffer = Buffer.from("./src/finix.png");
        var readStream = fs.createReadStream("./src/finix.png");

        // console.log(readStream);
        const disputeEvidence = await client.Disputes.createDisputeEvidence("DIs7yQRkHDdMYhurzYz72SFk", {
            file: "./src/finix.png"
        }, {headers:{ ["Finix-Version"]: "2022-02-01"}})
        // ["Content-Type"]: "multipart/form-data",
        console.log(disputeEvidence);
    }
    catch(error)
    {
        console.log(error);
        // console.log(error.body._embedded.errors);
    }
}

quickstart();