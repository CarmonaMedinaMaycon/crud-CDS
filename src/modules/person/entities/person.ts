import { Entity } from "@/kernel/types";
export type person = Entity<number> & {
    name:String,
    lastname:String,
    age:number,
    email:Text
}