"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPersonIterator = void 0;
class GetPersonIterator {
    constructor(personRepository) {
        this.personRepository = personRepository;
    }
    execude() {
        return this.personRepository.findall();
    }
}
exports.GetPersonIterator = GetPersonIterator;
