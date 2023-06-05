import { UseCase } from "@/kernel/contracts";
import { InsertEnterpriseDTO } from "../adapters/dto/insert-enterpriseDTO";
import { Enterprise } from "../entities/enterprise";
import { EnterpriseRepository } from "./ports/enterprise-repository";

export class InsertEnterpriseIterator implements UseCase<InsertEnterpriseDTO, Enterprise>{
    constructor(private readonly repository: EnterpriseRepository){}
    execude(payload: InsertEnterpriseDTO): Promise<Enterprise> {
        return this.repository.saveEnterprice(payload);
    }
}