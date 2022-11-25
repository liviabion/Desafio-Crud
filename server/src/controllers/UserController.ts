import { Request, Response } from 'express';
import { User } from '@models/User';
import { Citi, Crud } from '../global'

export default class UserController implements Crud {

    async create(request: Request, response: Response){
        const {firstName, lastName, age} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(firstName, lastName, age);
        if(isAnyUndefined) return response.status(400).send();

        const newUser = { firstName, lastName, age };
        const {httpStatus, message} = await Citi.insertIntoDatabase(User, newUser);

        return response.status(httpStatus).send({ message });
    }
    
}