import { PersonRepository } from "./ports/personRepository";
import { person } from "../../person/entities/person";
import { UseCase } from "@/kernel/contracts";

export class GetOnePersonIterator implements UseCase<number, person> {
    constructor(private readonly repository:PersonRepository){}

    execude(payload: number): Promise<person> {
        return this.repository.findPerson(payload)
    }
}