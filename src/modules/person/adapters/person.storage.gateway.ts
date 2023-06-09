
import { PersonRepository } from "../use-cases/ports/personRepository";
import { person } from "../../person/entities/person";
import {pool} from "../../../utils/bdconfig";
import { InsertPersonDTO } from "./dto/insert-personDTO";
import { UpdatePersonDTO } from "./dto/update-personDTO";

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

    async findPerson(payload: number): Promise<person> {
        try {
            const id:number =payload
            const response = await pool.query('SELECT * FROM person WHERE id = $1', [id]);
            const personn: person = response.rows[0] as person
            return personn
        } catch (error) {
            console.error(error);
            throw new Error            
        }
    }

    async savePerson(payload: InsertPersonDTO): Promise<person> {
        try {
            const {name, lastname, age, email} = payload
            const response = await pool.query('INSERT INTO person (name, lastname, age, email)VALUES ($1, $2, $3, $4) RETURNING *;', [name,lastname,age,email])
            const createPerson:person = response.rows[0] as person
            return createPerson
        } catch (error) {
            console.error(error);
            throw new Error;
        }
    }

    async updatePerson(payload: UpdatePersonDTO): Promise<person> {
        try {
            const {id, name, lastname, age, email} = payload
            const response = await pool.query('UPDATE person SET name= $2, lastname = $3, age = $4, email=$5 WHERE id= $1 RETURNING *;', [id, name, lastname, age, email]);
            const updatePerson: person = response.rows[0] as person
            return updatePerson;
        } catch (error) {
            console.error(error);
            throw new Error;            
        }
    }


    async deletePerson(payload: number): Promise<person> {
        try {
            const id:number = payload;
            const response =await pool.query('DELETE FROM person WHERE id = $1 RETURNING *;', [id])
            const deletePerson: person=response.rows[0] as person
            return deletePerson
        } catch (error) {
            console.error(error);
            throw new Error;
        }
    }
}