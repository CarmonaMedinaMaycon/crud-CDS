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
exports.PersonGateway = void 0;
const bdconfig_1 = require("../../utils/bdconfig");
class PersonGateway {
    findall() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield bdconfig_1.pool.query('SELECT * FROM person;');
                const person = response.rows;
                return person;
            }
            catch (error) {
                console.log(error);
                throw new Error;
            }
        });
    }
    findPerson(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = payload;
                const response = yield bdconfig_1.pool.query('SELECT * FROM person WHERE id = $1', [id]);
                const personn = response.rows[0];
                return personn;
            }
            catch (error) {
                console.error(error);
                throw new Error;
            }
        });
    }
    savePerson(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, lastname, age, email } = payload;
                const response = yield bdconfig_1.pool.query('INSERT INTO person (name, lastname, age, email)VALUES ($1, $2, $3, $4) RETURNING *;', [name, lastname, age, email]);
                const createPerson = response.rows[0];
                return createPerson;
            }
            catch (error) {
                console.error(error);
                throw new Error;
            }
        });
    }
    updatePerson(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, name, lastname, age, email } = payload;
                const response = yield bdconfig_1.pool.query('');
            }
            catch (error) {
            }
        });
    }
}
exports.PersonGateway = PersonGateway;
