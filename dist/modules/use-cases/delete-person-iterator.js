"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePersonIterator = void 0;
class DeletePersonIterator {
    constructor(repository) {
        this.repository = repository;
    }
    execude(payload) {
        return this.repository.deletePerson(payload);
    }
}
exports.DeletePersonIterator = DeletePersonIterator;
