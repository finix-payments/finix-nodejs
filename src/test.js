"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const api = __importStar(require("./api"));
const api_1 = require("./api");
const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';
const client = new api_1.Client(userName, password, api_1.Environment.Test);
const client_identity = new api.IdentitiesApi(userName, password);
// const environment = api.Environment.Test;
async function quickstart() {
    try {
        // let transferList = await client.Transfers.list({"limit": 2}, 
        // {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        // console.log(transferList.page.nextCursor);
        let oneTransfer = await client.Transfers.get("TRmB5hgMVPYxiacYkGoCRjHq", { headers: { ["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01" } });
        console.log(oneTransfer);
    }
    catch (error) {
        console.log(error);
    }
}
quickstart();
