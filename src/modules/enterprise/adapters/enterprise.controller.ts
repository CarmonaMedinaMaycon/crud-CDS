import { CustomResponse } from "@/kernel/types";
import { Request, Response, Router } from "express";
import { Enterprise } from "../entities/enterprise";
import { InsertEnterpriseDTO } from "./dto/insert-enterpriseDTO";
import { EnterpriseRepository } from "../use-cases/ports/enterprise-repository";
import { EnterpriseGateway } from "./person.storage.gateway";
import { InsertEnterpriseIterator } from "../use-cases/insert-enterprise-iterator";

const router = Router()

export class EnterpriseController{
    static getError(): CustomResponse<Enterprise>{
        return {
            code:500,
            error:true,
            message:"Error interno rei"
        }
    }


    static insertEntrerprice = async(req:Request, res:Response):Promise<Response>=>{
        try {
    const payload: InsertEnterpriseDTO= {...req.body} as InsertEnterpriseDTO;
    const repository: EnterpriseRepository =new EnterpriseGateway();
    const iteractor: InsertEnterpriseIterator = new InsertEnterpriseIterator(repository);
    const InsertEnterprise: Enterprise  = await iteractor.execude(payload);
    const body:CustomResponse<Enterprise>={
        code:200,
        error:false,
        message:"creado",
        count:1,
        entity:InsertEnterprise
    }
    return res.status(body.code).json(body)
        } catch (error) {
            return res.status(this.getError().code).json(this.getError())
        }
    }

} 

router.post('/', EnterpriseController.insertEntrerprice);
export default router;