import { Entity } from "@/kernel/types";
import { GetPersonDTO } from "@/modules/person/adapters/dto/get-personDTO";
import { person } from "@/modules/person/entities/person";

export type Enterprise = Entity<number> & {
    comercialName:string,
    rfc: string,
    street:string,
    colony: string,
    townDelegationCity :string,
    state:string,
    companyActivity:string,
    createdAt: Date,
    companySize:string,
    personid: person ,
    emailExtra1:string,
    emailExtra2:string,
    emailExtra3:string,

   // style_id integer not null,
   // user_id integer not null,
    status: string,
   // social_network_id integer not null,
}
