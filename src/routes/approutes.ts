import { Router } from "express";
import diTokens from "../constants/di-tokens";
import { EcommerceControllerContract } from "../controller/ecommerce-controller-contract";
import { injectable,inject } from "inversify";
import 'reflect-metadata'

const USER_BASE_URL = process.env.USER_BASE_URL || '/api/userdetails'

@injectable()
export class Approutes{
    constructor(@inject(diTokens.USER_CONTROLLER_TOKEN)
    private UsersController:EcommerceControllerContract){

    }
    userRoutes():Router{
        const routerMiddleware = Router()
        routerMiddleware.get(`${USER_BASE_URL}/state`, this.UsersController.getStateName)
        routerMiddleware.get(USER_BASE_URL,this.UsersController.getAllAction)
        routerMiddleware.get(`${USER_BASE_URL}/:id`, this.UsersController.getAction)
        routerMiddleware.post(USER_BASE_URL, this.UsersController.postAction)
        routerMiddleware.put(`${USER_BASE_URL}/update/:id`, this.UsersController.putAction)
        routerMiddleware.delete(`${USER_BASE_URL}/:id`, this.UsersController.deleteAction)
        routerMiddleware.get(`${USER_BASE_URL}/city/:stateName`, this.UsersController.getCityName)
        // routerMiddleware.get(`${USER_BASE_URL}/hobbies/:id`, this.UsersController.getHobbies)
        return routerMiddleware
    }
}