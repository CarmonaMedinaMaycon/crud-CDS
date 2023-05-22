export type Entity<Tidentifire extends number | string> = {
    id?: Tidentifire
}

export type CustomResponse<T> ={
    code:number,
    error?: boolean,
    message?:string,
    entity?: T,
    entities?: T[],
    count?: number
}