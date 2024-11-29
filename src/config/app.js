import express from "express";
import dotenv  from "dotenv";
import sequelize from './database.js';
import passengerRoutes from '../routes/passengerRoutes.js'
import driverRoutes from '../routes/driverRoutes.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//definir las rutas de cada modelo para que puedan ser arrancadas desde aca.
app.use('/passengers', passengerRoutes)
app.use('/drivers', driverRoutes)


app.listen(PORT, async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Conexion exitosa a la Base de datos.");
        console.log(`servidor corriendo en http://localhost${PORT}`);
    }catch (err){
        console.log("Error en la conexion a la base de datos:", err);
    }
});

