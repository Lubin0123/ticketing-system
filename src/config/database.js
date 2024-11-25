import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pg;

const requiredEnvVars = [
    "DB_USER","DB_HOST", "DB_DATABASE", "DB_PASSWORD","DB_PORT"
];

requiredEnvVars.forEach((varName) =>{
    if (!process.env[varName]){
        console.error(`falta la variable de entorno: ${varName}`);
        process.exit(1);
    }
});

const pool = new Pool ({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

async function testConnection() {
    try{
        const client = await pool.connect();
        console.log("conexión a postgres establecida.");
        client.release();
    }catch (err){
        console.error("error de conexión:", err.stack);
    }
}

testConnection();

export const connectDB = async() =>{
   try{
    await pool.connect();
    console.log("conexión a postgres establecida correctamente.");
   } catch (err){
    console.log("Error de conexión:", err.stack);
    process.exit(1);
   }
};
export default pool;