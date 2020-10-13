import { LoginResponse } from './loginResponse.model'

export interface IResponseOfLoginResponse{
    code: number;
    responseMessage: string;
    requestDate: Date;
    success: boolean;
    statusCode: number;
    dataResponse: LoginResponse;
}