import Driver from '../models/driver.js';

export const createDriver = async (req, res)=>{
    try{
        const {
            name,
            identityDocument,
            phone,
            status,
            driverLicense,
            hireDate
        } = req.body;

        const  newDriver = await Driver.create({
            name,
            identityDocument,
            phone,
            status,
            driverLicense,
            hireDate
        });

        res.status(201).json({
            message: `Driver ${newDriver} creado exitosamente.`,
        });
    }catch (error){
        res.status(400).json({
            error: `Error al crear conductor: ${error.message}`,
        });
    }

};

export const getDrivers = async (req, res) =>{
    try{
        const drivers = await Driver.findAll();
        res.status(200).json({drivers});
    }catch(error){
        res.status(500).json({
             error: `Error buscando los conductores: ${error.message}`,
        });
    }
};