import { InsertPersonDTO } from "@/modules/adapters/dto/insert-personDTO";
import {UpdatePersonDTO} from "@/modules/adapters/dto/update-personDTO";
import { person } from "@/modules/entities/person";

export interface PersonRepository {
    findall(): Promise<person[]>
    findPerson(payload:number):Promise<person>
    savePerson(payload:InsertPersonDTO):Promise<person>
    updatePerson(payload:UpdatePersonDTO): Promise<person>
    
}