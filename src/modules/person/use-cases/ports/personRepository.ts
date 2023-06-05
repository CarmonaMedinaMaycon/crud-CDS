import { InsertPersonDTO } from "../../adapters/dto/insert-personDTO";
import { UpdatePersonDTO } from "../../adapters/dto/update-personDTO";
import { person } from "@/modules/person/entities/person";

export interface PersonRepository {
    findall(): Promise<person[]>
    findPerson(payload:number):Promise<person>
    savePerson(payload:InsertPersonDTO):Promise<person>
    updatePerson(payload:UpdatePersonDTO): Promise<person>
    deletePerson(payload: number): Promise<person>
}