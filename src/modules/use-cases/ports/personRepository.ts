import { person } from "@/modules/entities/person";

export interface PersonRepository {
    findall(): Promise<person[]>
}