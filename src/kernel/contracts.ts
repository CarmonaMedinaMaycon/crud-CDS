export interface UseCase<TInPut, TOutput>{
    execude(payload?:TInPut):Promise<TOutput>;
}