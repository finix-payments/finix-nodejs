import * as api from './api';
import {Client, Environment, Models} from './api';

import * as http from 'http';
import * as fs from 'fs';

const userName = 'USpumes23XhzHwXqiy9bfX2B';
const password = 'c69d39e3-f9ff-4735-8c3e-abca86441906';

const client = new Client(userName, password, Environment.Test);


async function quickstart(){
    try
    {   
        const removedSettlement = await client.Settlements.removeTransfersFromSettlement("STmCc8GbjjX33SdymwNhb9Et", {
            transfers: ["TRr61njQxaa7AJf6E1C3QwCc"]
        });
        console.log(removedSettlement);
        
    }
    catch(error)
    {
        // console.log(error);
        console.log("here");
        console.log(error.body._embedded.errors[0].message);
    }
}

quickstart();