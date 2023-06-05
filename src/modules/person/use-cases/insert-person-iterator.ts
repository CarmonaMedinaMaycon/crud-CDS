import { PersonRepository } from "./ports/personRepository";
import { person } from "../../person/entities/person";
import { UseCase } from "@/kernel/contracts";
import { InsertPersonDTO } from "../adapters/dto/insert-personDTO";

export class InsertPersonIterator implements UseCase<InsertPersonDTO, person>{
    constructor(private readonly repository: PersonRepository){}
    execude(payload: InsertPersonDTO): Promise<person> {
        return this.repository.savePerson(payload);
    }
}