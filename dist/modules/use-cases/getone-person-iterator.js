"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOnePersonIterator = void 0;
class GetOnePersonIterator {
    constructor(repository) {
        this.repository = repository;
    }
    execude(payload) {
        return this.repository.findPerson(payload);
    }
}
exports.GetOnePersonIterator = GetOnePersonIterator;
