import * as api from './api';
import {Client, Environment} from './api';

const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

const client = new Client(userName, password, Environment.Test);
const client_identity = new api.IdentitiesApi(userName, password);

// const environment = api.Environment.Test;

async function quickstart(){
    try
    {
        // let transferList = await client.Transfers.list({"limit": 2}, 
        // {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        // console.log(transferList.page.nextCursor);

        let oneTransfer = await client.Transfers.get("TRmB5hgMVPYxiacYkGoCRjHq", 
         {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        console.log(oneTransfer);
    }
    catch(error)
    {
        console.log(error);
    }
}

quickstart();