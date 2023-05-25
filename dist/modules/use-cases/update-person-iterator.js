"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonIterator = void 0;
class UpdatePersonIterator {
    constructor(repository) {
        this.repository = repository;
    }
    execude(payload) {
        return this.repository.updatePerson(payload);
    }
}
exports.UpdatePersonIterator = UpdatePersonIterator;
