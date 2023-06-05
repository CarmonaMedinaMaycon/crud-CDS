import { pool } from "../../../utils/bdconfig";
import { Enterprise } from "../entities/enterprise";
import { EnterpriseRepository } from "../use-cases/ports/enterprise-repository";
import { InsertEnterpriseDTO } from "./dto/insert-enterpriseDTO";

export class EnterpriseGateway implements EnterpriseRepository {
  async saveEnterprice(payload: InsertEnterpriseDTO): Promise<Enterprise> {
    try {
      const {
        comercialName,
        rfc,
        street,
        colony,
        townDelegationCity,
        state,
        companyActivity,
        createdAt,
        companySize,
        personid,
        emailExtra1,
        emailExtra2,
        emailExtra3
      } = payload;
      const {rows: enterpriseRows} = await pool.query(
        "INSERT INTO enterprises(commercial_name, rfc, street, colony, town_delegation_city, state, company_activity,created_at, company_size , person_id ,email_extra1,email_extra2, email_extra3) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *;",
        [
          comercialName,
          rfc,
          street,
          colony,
          townDelegationCity,
          state,
          companyActivity,
          createdAt,
        companySize,
        personid,
        emailExtra1,
        emailExtra2,
        emailExtra3
        ]
      );
      if(!enterpriseRows[0]?.id) throw Error("Entity not registered");
      const data = enterpriseRows[0];
      return <Enterprise>{
        id: data.id,
        comercialName: data.commercial_name,
        rfc: data.rfc,
        street: data.street,
        colony: data.colony,
        townDelegationCity: data.town_delegation_city,
        state: data.state,
        companyActivity: data.company_activity,
        createdAt: data.created_at,
        companySize: data.company_size,
        personid: data.person_id.name,
        emailExtra1: data.email_extra1,
        emailExtra2: data.email_extra2,
        emailExtra3: data.email_extra3

      };
    } catch (error) {
      console.error("no jalo pendeja", error);
      throw error;
    }
  }
}
