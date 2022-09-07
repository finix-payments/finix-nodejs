# Finix Node.js API Library
This is the official Finix Node.js API Library 

## Installation
### Prerequisites
- Node.js 16 or higher
- Suggested: Your own API credentials.
Our tests use the API credentials from Finix's public documentation, however you need your own credentials to submit requests.
### NPM
```
npm install --save @finix-payments/finix
```

## Using the Library
### Initialization
Provide your api username and password as well as the environment you are interacting with.
```typescript
import {Client, Environment, Models} from '@finix-payments/finix';

const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

const client = new Client(userName, password, Environment.Sandbox);
```

### Example API
Here is an example creating a Transfer:
```typescript
const createTransferRequest: Models.CreateTransferRequest = {
             currency: Models.Currency.Usd,
             merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
             tags: {
                 "test": "sale"
             },
             source: "PIe2YvpcjvoVJ6PzoRPBK137",
             amount: 662154,
         };
const transfer = await client.Transfers.create(saleRequest);
```

### Retrieving List 
finixList serves as the return type for all functions that involve retrieving a list. Here is an example of retrieving a list of transfers with and without query paramters, and a demonstration of the properties of finixList.
```typescript 
// Retrieving list of all transfers 
const transfersList : Models.finixList<Models.Transfer> = await client.Transfers.list();

// Retrieving list of transfers with the following filters: 
// List limit: 2
// Amount less than 100
// Transfer type: Debits 
const transfersListWithFilter = await client.Transfers.list({
    limit: 2,
    amountLt: 100,
    type: "Debits"  
});

// Accessing transfers in the list and print out value
for (let currTransfer of transfersList){
        console.log(currTransfer);
}

// Get the size of the current list 
const transferListSize : number = transfersList.size;

// Get the page object that contains properties including offset/nextCursor, limit.
// Note: refer to the specific api to see if the page object associated is of type pageCursor or pageOffset
const page : Models.PageCursor = transfersList.page;

// Get the links 
const links : Models.ListLinks = transfersList.links;

// Check if there is more to list, value equals to False if end of list has been reached 
const hasMore : Boolean = transfersList.hasMore;

// Get the next list 
const nextTransfersList : Models.finixList<Models.Transfer> = await transfersList.listNext();

```

### Uploading file 
Files are expected to be of the type `fs.ReadStream`. Below is an example of uploading a dispute evidence file.
``` typescript
import * as fs from 'fs';

const fileName : string = __dirname.concat("/test.png");
const fileObject: fs.ReadStream = fs.createReadStream(fileName);
const uploadedDisputeEvidence = await client.Disputes.createDisputeEvidence(disputeId, {
    file: fileObject});
```

### Error handling
Errors can be caught and handled with try-catch blocks. Below is an example of catching an error and accessing its information. 
```typescript
const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
const wrongPassword = '123';

try{
    const invalidClient = new Client(userName, wrongPassword, Environment.Sandbox);
    let transferList = await invalidClient.Transfers.list();
}catch(error){
    // Print basic http information of the error
    console.log(error.statusCode);
    console.log(error.headers);

    // Print message of each error 
    for (let e of error.body){
        console.log(e.message);
    }

    // Access raw http incoming message of the error 
    const errorRawResponse = error.response;
}
```
## Supported APIs
- Transfers
- Authorizations
- Identities
- Merchants
- Payment Instruments
- Instrument Updates
- Balance Transfers
- Devices
- Disputes
- Files
- Settlements
- Webhooks
- Verifications
- Merchant Profiles
- Fee Profiles
- Onboarding Forms
- Compliance Forms
