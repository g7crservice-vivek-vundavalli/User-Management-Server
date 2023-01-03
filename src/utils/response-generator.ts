import { ApiResponse } from "../models/api-response.model";

export default function  generateResponse<T>(message:string,statusCode:number,data?:T| T[] | null):string{
    const apiResponse: ApiResponse<T> = {
        message: message,
        statusCode: statusCode,
        data: data ? data : null
    }
    return JSON.stringify(apiResponse)
}