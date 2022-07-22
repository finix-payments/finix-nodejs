import * as api from './src/api';
import {Client, Environment} from './src/api';
import { PageOffset } from './src/model/pageOffset';

const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

const client = new Client(userName, password, Environment.Test);

// const environment = api.Environment.Test;

async function quickstart(){
    try
    {
        // let transferList = await client.Transfers.list({"limit": 2}, 
        // {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        // console.log(transferList.page.nextCursor);

        let oneTransfer = await client.Files.list();
        console.log(oneTransfer.page);
        console.log(oneTransfer.hasMore);
        var hasMorebool = true;
        while(hasMorebool){
            let nextList = await oneTransfer.listNext(100);
            hasMorebool = <boolean> nextList.hasMore;
            console.log(nextList.page);
            oneTransfer = nextList;
        }
        // let nextList = await oneTransfer.listNext(100);
        // const num = 1;
        // oneTransfer.page = num;
        // console.log(nextList.size);
    }
    catch(error)
    {
        console.log(error);
    }
}

quickstart();