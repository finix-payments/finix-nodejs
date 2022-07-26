# Finix Node.js API Library
This is the official Finix Node.js API Library 

## Installation
### Prerequisites
- Node.js 16 or higher
- Suggested: Your own API credentials.
    - The tests use the API credentials from our public documentaiton, but you will need your own credentials.

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

const client = new Client(userName, password, Environment.Test);
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

## Supported APIs
- Transfers
- Authorizaitons
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
