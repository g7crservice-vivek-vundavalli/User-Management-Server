import { Request, Response } from "express";
import { EcommerceControllerContract } from "./ecommerce-controller-contract";
import { injectable, inject } from "inversify";
import { EcommerceBoContract } from "../bo/ecommerce-bo-contract";
import { User } from "../models/user-model";
import 'reflect-metadata'
import diTokens from "../constants/di-tokens";
import generateResponse from "../utils/response-generator";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { City } from "../models/city-model";
import { State } from "../models/state-model";
import { Hobbies } from "../models/hobbies-model";


@injectable()
export class UsersController implements EcommerceControllerContract {
    constructor(@inject(diTokens.USER_BO_TOKEN) private bo: EcommerceBoContract<User>){

    }
    getAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            const userId = Number(req.params.id)
            const user = await this.bo.get(userId)
            const response = generateResponse<User>('found record', 200, user)
            res.send(response)

        } catch (error: any) {
            const errResponse = generateResponse<User>(error.message, 500)
            res.send(errResponse)
        }    
    }

    getAllAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            const users = await this.bo.getAll()
            const response = generateResponse<User[]>('found records', 200, users)
            res.send(response)
        } catch (error: any) {
            const errResponse = generateResponse<User>(error.message, 500)
            res.send(errResponse)
        }
    }

    postAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            const userData = <User>req.body
            const added = await this.bo.add(userData)
            const response = generateResponse<User>('added successfully', 201, added)
            res.send(response)
        } catch (error: any) {
            const errResponse = generateResponse<User>(error.message, 500)
            res.send(errResponse)
        }   
    }

    putAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            console.log(req.params.id);            
            const id = Number(req.params.id)
            const userData = <User>req.body
            // const userData ={
            //     userCity:String(req.body.userCity),
            //     userPhoneNumber:Number(req.body.userPhoneNumber)                
            // }
            const updated = await this.bo.update(userData, id)
            const response = generateResponse<User>('updated record', 201, updated)
            res.send(response)
        } catch (error: any) {
            const errResponse = generateResponse<User>(error.message, 500)
            res.send(errResponse)
        }
    }

    deleteAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> =>{
        try {
            const id = Number(req.params.id)
            const deleted = await this.bo.remove(id)
            const response = generateResponse<User>('deleted record', 201, deleted)
            res.send(response)
        } catch (error: any) {
            const errResponse = generateResponse<User>(error.message, 500)
            res.send(errResponse)
        }
    }

    getStateName = async(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> =>{
        try {
            const state:State[] = await this.bo.getstate()
            const response = generateResponse<State>('found record', 200, state)
            res.send(response)

        } catch (error: any) {
            const errResponse = generateResponse<User>(error.message, 500)
            res.send(errResponse)
        }    
        // console.log(res.json());
    }

    getCityName = async(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            console.log(req.params.id);            
            const statename = req.params.stateName
            const city:City = await this.bo.getcity(statename)
            const response = generateResponse<City>('found record', 200, city)
            res.send(response)

        } catch (error: any) {
            const errResponse = generateResponse<City>(error.message, 500)
            res.send(errResponse)
        }    
    }

    // getHobbies = async(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> =>{
    //     try {
    //         const userId = Number(req.params.id)
    //         const hobbies:Hobbies = await this.bo.gethobbies(userId)
    //         const response = generateResponse<Hobbies>('found record', 200, hobbies)
    //         res.send(response)

    //     } catch (error: any) {
    //         const errResponse = generateResponse<User>(error.message, 500)
    //         res.send(errResponse)
    //     }    
    // }    
}