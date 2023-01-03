import { injectable } from "inversify";
import { EcommerceBoContract } from "./ecommerce-bo-contract";
import { User } from "../models/user-model";
import UserDetailModel from "../db/models/userdetailsmodel";
import "reflect-metadata"
import { details } from "../models/details";
import { State } from "../models/state-model";
import StateModel from "../db/models/statesmodel";
import { City } from "../models/city-model";
import CityModel from "../db/models/citymodels";
import { Hobbies } from "../models/hobbies-model";
import HobbiesModel from "../db/models/hobbiesmodel";

@injectable()
export class UsersBo implements EcommerceBoContract<User>{
    
    async add(data: User): Promise<User> {
        try {
            const users = await UserDetailModel.find()
            let id = 1
            if (users.length > 0) {
                const lastRecord = users[users.length - 1]
                if (lastRecord.userId) {
                    id = lastRecord.userId + 1
                }
            }
            data.userId = id
            await UserDetailModel.create({ ...data })
            return data
        } catch (error) {
            throw error
        }
    }
    async update(data: details, id: number): Promise<User> {
        try {            
            console.log(data);            
            const found = await UserDetailModel.findOne({userId: id})
            const hobby:any = await HobbiesModel.findOne({userId: id})
            console.log(found);
            if (found) {
                found.userId = id
                found.userPhoneNumber = data.userPhoneNumber
                found.userCity = data.userCity
                
                if(hobby){
                    console.log(`HI ${data.userHobbies}`);
                    hobby.Hobbies = data.userHobbies
                }
                  // const hobbie = data.userHobbies
                    // const update = await HobbiesModel.updateOne({userId:id},{userId:id, HobbyId:id,Hobbies:hobbie})
                    // if(update.modifiedCount > 0){
                    //     return hobby as any }

                const updated = await UserDetailModel.updateOne({ userId: id },{...data})
                if (updated.modifiedCount > 0)
                    return found as User
                else
                    throw new Error(`the user with id:${id} could not be updated`)
            } else
                throw new Error(`the user with id:${id} does not exist`)
        } catch (error) {
            throw error
        }
    }
    
    async remove(id: number): Promise<User> {
        try {
            const found:User|null = await UserDetailModel.findOne({ userId: id })
            if (found) {
                const deleted = await UserDetailModel.deleteOne({ userId: id })
                if (deleted.deletedCount > 0)
                    return found as User
                else
                    throw new Error(`the user with id:${id} could not be deleted`)
            } else
                throw new Error(`the user with id:${id} does not exist`)
        } catch (error) {
            throw error
        }
    }

    async getAll(): Promise<User[]> {
        try {
            const users:User[]|null = await UserDetailModel.find()
            if (users.length > 0) {
                return users as User[]
            } else
                throw new Error(`no record found`)
        } catch (error) {
            throw error
        }
    }
    
    async get(id: number): Promise<User> {
        try {
            const found:User|null = await UserDetailModel.findOne({ userId: id })
            // console.log(found)
            if (found) {
                const u = found as User
                console.log(u)
                return u
            } else
                throw new Error(`the user with id:${id} does not exist`)
        } catch (error) {
            throw error
        }
    }

    async getstate(): Promise<State[]> {
        try {
            const found:any = await StateModel.find()
            console.log(found)
            if (found) {
                const u = found as State[]
                console.log(u)
                return u
            } else
                throw new Error(`No state data found`)
        } catch (error) {
            throw error
        }
    }

    async getcity(stateName:string): Promise<City> {
        try {
            const states = await StateModel.findOne({state : stateName})
            const sid = states?.id             
            const found: any = await CityModel.findOne({stateID : sid})     
            if (found) {
                const data = found
                console.log(found)
                return data
            } else
                throw new Error(`City does not exist`)
        } catch (error) {
            throw error
        }
    }
    
}