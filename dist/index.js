"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const person_controller_1 = __importDefault(require("./modules/person/adapters/person.controller"));
const enterprise_controller_1 = __importDefault(require("./modules/enterprise/adapters/enterprise.controller"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/person', person_controller_1.default);
app.use('/enterprice', enterprise_controller_1.default);
app.listen(3001);
console.log('ya jaloooo', 3001);
