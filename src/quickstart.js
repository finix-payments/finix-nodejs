"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';
const client = new api_1.Client(userName, password, api_1.Environment.Test);
// const environment = api.Environment.Test;
function quickstart() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // let transferList = await client.Transfers.list({"limit": 2}, 
            // {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
            // console.log(transferList.page.nextCursor);
            let oneTransfer = yield client.Disputes.list();
            console.log(oneTransfer.page.offset);
            console.log(oneTransfer.hasMore);
            // let nextList = await oneTransfer.listNext(100);
            const num = 1;
            oneTransfer.page = num;
            // console.log(nextList.size);
        }
        catch (error) {
            console.log(error);
        }
    });
}
quickstart();
//# sourceMappingURL=quickstart.js.map