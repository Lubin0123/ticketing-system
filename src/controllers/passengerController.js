import Passenger from "../models/passenger.js";

export const registerPassenger = async(req, res)=>{
    try{
        const {name, identityDocument, phone, status, email, address,
             birthDate, registrationDate
        } = req.body;
        const newPassenger = await Passenger.create({
            name,
            identityDocument,
            phone,
            status,
            email,
            address,
            birthDate,
            registrationDate,
        });
        res.status(201).send(
            `Pasajero  ${newPassenger.name} registrado exitosamente`
        );
    }catch (error){
        res.status(400).send(`error al resgistrar el pasajero:${error.message}`);
    }
};