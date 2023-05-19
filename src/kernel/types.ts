export type Entity<Tidentifire extends number | string> = {
    id?: Tidentifire
}

export type Response<T> ={
    code:number,
    error?: boolean,
    message?:string,
    entity?: T[],
    count?: number
}