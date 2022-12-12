import { Request, Response } from 'express';
import { Aspiring } from '@models/Aspiring';
import { Citi, Crud } from '../global'

export default class AspiringController implements Crud {

    //Método post, obrigatório:
    async create(request: Request, response: Response){
        const {name, age, managerName, psArea, photo} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(name, age, managerName, psArea, photo);
        if(isAnyUndefined) return response.status(400).send();

        const newAspiring = { name, age, managerName, psArea, photo };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Aspiring, newAspiring);

        return response.status(httpStatus).send({ message });
    }

    //Métodos get, delete e update:
    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Aspiring);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: userFound, message } = await Citi.findByID(Aspiring, id); 
        
        if(!userFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Aspiring, aspiringFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {name, age, managerName, psArea, photo } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(name, age, managerName, psArea, photo, id);
        if(isAnyUndefined) return response.status(400).send();

        const aspiringWithUpdatedValues = { name, age, managerName, psArea, photo };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Aspiring, id, aspiringWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }
}