//express
import {Response, Request, Router} from "express";
//entities
import { person } from "../../person/entities/person";
import { PersonRepository } from "../use-cases/ports/personRepository";
//iterators del crud
import { GetPersonIterator }  from "../use-cases/get-person-iteractor";
//dtos
import { GetPersonDTO } from "./dto/get-personDTO";
//gateway
import { PersonGateway } from "./person.storage.gateway";
//types
import { CustomResponse } from "@/kernel/types";
import { GetOnePersonIterator } from "../use-cases/getone-person-iterator";
import { InsertPersonDTO } from "./dto/insert-personDTO";
import { InsertPersonIterator } from "../use-cases/insert-person-iterator";
import { UpdatePersonDTO } from "./dto/update-personDTO";
import { UpdatePersonIterator } from "../use-cases/update-person-iterator";
import { DeletePersonIterator } from "../use-cases/delete-person-iterator";

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

  static findPerson = async (req:Request, res: Response): Promise<Response>=>{
    try {
      const id= parseInt(req.params.id)
      const repository:PersonRepository = new PersonGateway();
      const iterator: GetOnePersonIterator = new GetOnePersonIterator(repository);
      const person: person = await iterator.execude(id)
      let body: CustomResponse<person>={
        code:200,
        error:false,
        message:"ok",
        count:1,
        entity: person,
      }
      if(!person) body ={...body, code:404, message: 'NO JALA', count: undefined}
      return res.status(body.code).json(body)
    } catch (error) {
      return res.status(this.getError().code).json(this.getError())
    }
  }
  static insertPerson = async(req:Request, res:Response):Promise<Response> =>{
    try {
      const payload:InsertPersonDTO ={...req.body} as InsertPersonDTO;
      const repository: PersonRepository= new PersonGateway();
      const iteractor: InsertPersonIterator = new InsertPersonIterator(repository);
      const insertPerson: person = await iteractor.execude(payload);
      const body:CustomResponse<person>={
        code:200,
        error:false,
        message:"creado",
        count:1,
        entity: insertPerson
      }
      return res.status(body.code).json(body)
    } catch (error) {
      return res.status(this.getError().code).json(this.getError())
    }
  }

static updatePerson = async(req:Request, res:Response): Promise<Response> =>{
  try {
    const id = parseInt(req.params.id)
   const payload: UpdatePersonDTO = {id:id, ...req.body} as UpdatePersonDTO;
   const repository: PersonRepository = new PersonGateway();
   const iteractor: UpdatePersonIterator = new UpdatePersonIterator(repository);
   const updatePerson: person = await iteractor.execude(payload);
   let body: CustomResponse<person>={
    code:200,
    error:false,
    message:"se atualizo",
    count:1,
    entity:updatePerson
   } 
   if(!updatePerson) body = {...body, code: 404, message: 'NOT_FOUND', count: undefined}
   return res.status(body.code).json(body)
  } catch (error) {
    return res.status(this.getError().code).json(this.getError())
  }
}

static deletePerson = async(req:Request, res:Response): Promise<Response>=>{
try {
  const id = parseInt(req.params.id);
  const repository: PersonRepository = new PersonGateway();
  const iterator: DeletePersonIterator = new DeletePersonIterator(repository);
  const deletePerson:person = await iterator.execude(id);
  let body: CustomResponse<person> ={
    code: 200,
    error:false,
    message:"borrado",
    count:1,
    entity:deletePerson
  }
  if(!deletePerson) body = {...body, code: 404, message: 'NOT_FOUND', count: undefined}
  return res.status(body.code).json(body)
} catch (error) {
  return res.status(this.getError().code).json(this.getError())
}
}

}

router.get('/', PersonController.findAll)
router.get('/:id', PersonController.findPerson)
router.post('/', PersonController.insertPerson)
router.put('/:id', PersonController.updatePerson)
router.delete('/:id', PersonController.deletePerson)
export default router;
