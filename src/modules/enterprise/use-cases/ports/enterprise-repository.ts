import { InsertEnterpriseDTO } from "../../adapters/dto/insert-enterpriseDTO";
import { Enterprise } from "../../entities/enterprise";

export interface EnterpriseRepository {
    saveEnterprice(payload:InsertEnterpriseDTO):Promise<Enterprise>
}