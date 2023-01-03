import { Request,Response } from "express";

export interface EcommerceControllerContract{
    getAction(req: Request, res: Response): Promise<void>;
    getAllAction(req: Request, res: Response): Promise<void>;
    postAction(req: Request, res: Response): Promise<void>;
    putAction(req: Request, res: Response): Promise<void>;
    deleteAction(req: Request, res: Response): Promise<void>;
    getStateName(req: Request, res: Response): Promise<void>;
    getCityName(req: Request, res: Response): Promise<void>;
    // getHobbies(req: Request, res: Response): Promise<void>;
}