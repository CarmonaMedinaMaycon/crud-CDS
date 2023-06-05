import { PersonRepository } from "./ports/personRepository";
import { person } from "../../person/entities/person";
import { UpdatePersonDTO } from "../adapters/dto/update-personDTO";
import { UseCase } from "@/kernel/contracts";

export class UpdatePersonIterator implements UseCase<UpdatePersonDTO, person>{
    constructor(private readonly repository: PersonRepository){}
    execude(payload: UpdatePersonDTO): Promise<person> {
        return this.repository.updatePerson(payload);
    }
}