import express from "express";
import dotenv  from "dotenv";
import { connectDB } from "./database.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//definir las rutas de cada modelo para que puedan ser arrancadas desde aca.

(async () => {
    await connectDB();
    app.listen(PORT, () =>{
        console.log(
            `Servidor corriendo en el puerto: http://localhost:${PORT}`
        );
    } );
})();

