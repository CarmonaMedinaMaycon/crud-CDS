"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertEnterpriseIterator = void 0;
class InsertEnterpriseIterator {
    constructor(repository) {
        this.repository = repository;
    }
    execude(payload) {
        return this.repository.saveEnterprice(payload);
    }
}
exports.InsertEnterpriseIterator = InsertEnterpriseIterator;
