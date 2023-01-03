import { City } from "../models/city-model";
import { Hobbies } from "../models/hobbies-model";
import { State } from "../models/state-model";

export interface EcommerceBoContract<T> {
    add(data: T): Promise<T>;
    update(data: T, id: number): Promise<T>;
    remove(id: number): Promise<T>;
    get(id: number): Promise<T>;
    getAll(): Promise<T[]>;
    getstate():Promise<State[]>
    getcity(stateName:string):Promise<City>
    // gethobbies(id:number):Promise<Hobbies>
}
