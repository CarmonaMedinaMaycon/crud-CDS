"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterpriseGateway = void 0;
const bdconfig_1 = require("../../../utils/bdconfig");
class EnterpriseGateway {
    saveEnterprice(payload) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { comercialName, rfc, street, colony, townDelegationCity, state, companyActivity, createdAt, companySize, personid, emailExtra1, emailExtra2, emailExtra3 } = payload;
                const { rows: enterpriseRows } = yield bdconfig_1.pool.query("INSERT INTO enterprises(commercial_name, rfc, street, colony, town_delegation_city, state, company_activity,created_at, company_size , person_id ,email_extra1,email_extra2, email_extra3) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *;", [
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
                ]);
                if (!((_a = enterpriseRows[0]) === null || _a === void 0 ? void 0 : _a.id))
                    throw Error("Entity not registered");
                const data = enterpriseRows[0];
                return {
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
            }
            catch (error) {
                console.error("no jalo pendeja", error);
                throw error;
            }
        });
    }
}
exports.EnterpriseGateway = EnterpriseGateway;
