"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertPersonIterator = void 0;
class InsertPersonIterator {
    constructor(repository) {
        this.repository = repository;
    }
    execude(payload) {
        return this.repository.savePerson(payload);
    }
}
exports.InsertPersonIterator = InsertPersonIterator;
