//express
import { Request, Response, Router } from "express";
//entities
import { person } from "../entities/person";
import { PersonRepository } from "../use-cases/ports/personRepository";
//iterators del crud
import { GetPersonIterator } from "../use-cases/get-person-iteractor";
//dtos
import { GetPersonDTO } from "./dto/get-personDTO";
//gateway
import { PersonGateway } from "./person.storage.gateway";
//types
import { CustomResponse } from "@/kernel/types";

const router = Router();

export class PersonController {
  static getError(): CustomResponse<person> {
    return {
      code: 500,
      error: true,
      message: "Error interno rei",
    };
  }

  static findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const repository: PersonRepository = new PersonGateway();
      const iterator: GetPersonIterator = new GetPersonIterator(repository);
      const person: person[] = await iterator.execude();
      const body: CustomResponse<person> = {
        code: 200,
        error: false,
        message: "OK",
        count: person.length,
        entities: person,
      };
      return res.status(body.code).json(body);
    } catch (error) {
      return res.status(this.getError().code).json(this.getError());
    }
  };
}

router.get('/', PersonController.findAll)

export default router;
