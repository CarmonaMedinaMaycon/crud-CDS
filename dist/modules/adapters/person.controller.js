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
exports.PersonController = void 0;
//express
const express_1 = require("express");
//iterators del crud
const get_person_iteractor_1 = require("../use-cases/get-person-iteractor");
//gateway
const person_storage_gateway_1 = require("./person.storage.gateway");
const getone_person_iterator_1 = require("../use-cases/getone-person-iterator");
const insert_person_iterator_1 = require("../use-cases/insert-person-iterator");
const router = (0, express_1.Router)();
class PersonController {
    static getError() {
        return {
            code: 500,
            error: true,
            message: "Error interno rei",
        };
    }
}
_a = PersonController;
PersonController.findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const repository = new person_storage_gateway_1.PersonGateway();
        const iterator = new get_person_iteractor_1.GetPersonIterator(repository);
        const person = yield iterator.execude();
        const body = {
            code: 200,
            error: false,
            message: "OK",
            count: person.length,
            entities: person,
        };
        return res.status(body.code).json(body);
    }
    catch (error) {
        return res.status(_a.getError().code).json(_a.getError());
    }
});
PersonController.findPerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const repository = new person_storage_gateway_1.PersonGateway();
        const iterator = new getone_person_iterator_1.GetOnePersonIterator(repository);
        const person = yield iterator.execude(id);
        let body = {
            code: 200,
            error: false,
            message: "ok",
            count: 1,
            entity: person,
        };
        if (!person)
            body = Object.assign(Object.assign({}, body), { code: 404, message: 'NO JALA', count: undefined });
        return res.status(body.code).json(body);
    }
    catch (error) {
        return res.status(_a.getError().code).json(_a.getError());
    }
});
PersonController.insertPerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = Object.assign({}, req.body);
        const repository = new person_storage_gateway_1.PersonGateway();
        const iteractor = new insert_person_iterator_1.InsertPersonIterator(repository);
        const insertPerson = yield iteractor.execude(payload);
        const body = {
            code: 200,
            error: false,
            message: "creado",
            count: 1,
            entity: insertPerson
        };
        return res.status(body.code).json(body);
    }
    catch (error) {
        return res.status(_a.getError().code).json(_a.getError());
    }
});
exports.PersonController = PersonController;
router.get('/', PersonController.findAll);
router.get('/:id', PersonController.findPerson);
router.post('/', PersonController.insertPerson);
exports.default = router;
