import { UseCase } from "@/kernel/contracts";
import { GetPersonDTO } from "../adapters/dto/get-personDTO";
import { person } from "../entities/person";
import { PersonRepository } from "./ports/personRepository";

export class GetPersonIterator implements UseCase<GetPersonDTO, person[]>{
    constructor(private readonly personRepository:PersonRepository){}
    execude(): Promise<person[]> {
    return this.personRepository.findall()        
    }
}