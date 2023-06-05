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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterpriseController = void 0;
const express_1 = require("express");
const person_storage_gateway_1 = require("./person.storage.gateway");
const insert_enterprise_iterator_1 = require("../use-cases/insert-enterprise-iterator");
const router = (0, express_1.Router)();
class EnterpriseController {
    static getError() {
        return {
            code: 500,
            error: true,
            message: "Error interno rei"
        };
    }
}
_a = EnterpriseController;
EnterpriseController.insertEntrerprice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = Object.assign({}, req.body);
        const repository = new person_storage_gateway_1.EnterpriseGateway();
        const iteractor = new insert_enterprise_iterator_1.InsertEnterpriseIterator(repository);
        const InsertEnterprise = yield iteractor.execude(payload);
        const body = {
            code: 200,
            error: false,
            message: "creado",
            count: 1,
            entity: InsertEnterprise
        };
        return res.status(body.code).json(body);
    }
    catch (error) {
        return res.status(_a.getError().code).json(_a.getError());
    }
});
exports.EnterpriseController = EnterpriseController;
router.post('/', EnterpriseController.insertEntrerprice);
exports.default = router;
