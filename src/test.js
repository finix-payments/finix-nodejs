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
const userName = 'USpumes23XhzHwXqiy9bfX2B';
const password = 'c69d39e3-f9ff-4735-8c3e-abca86441906';
const client = new api_1.Client(userName, password, api_1.Environment.Test);
function quickstart() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const removedSettlement = yield client.Settlements.removeTransfersFromSettlement("STmCc8GbjjX33SdymwNhb9Et", {
                transfers: ["TRr61njQxaa7AJf6E1C3QwCc"]
            });
            console.log(removedSettlement);
        }
        catch (error) {
            // console.log(error);
            console.log("here");
            console.log(error.body._embedded.errors[0].message);
        }
    });
}
quickstart();
