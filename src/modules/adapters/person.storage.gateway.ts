
import { PersonRepository } from "../use-cases/ports/personRepository";
import { person } from "../entities/person";
import {pool} from "../../utils/bdconfig";

export class PersonGateway implements PersonRepository {
    async findall(): Promise<person[]> {
        try {
            const response = await pool.query('SELECT * FROM person;')
            const person: person[] = response.rows
            return person
        } catch (error) {
            console.log(error);
            throw new Error;
        }
    }
}