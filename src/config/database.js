import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const requiredEnvVars = [
    "DB_USER","DB_HOST", "DB_DATABASE", "DB_PASSWORD","DB_PORT"
];

requiredEnvVars.forEach((varName) =>{
    if (!process.env[varName]){
        console.error(`Falta la variable de entorno: ${varName}`);
        process.exit(1);
    }
});

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect: 'postgres',
        port:process.env.DB_PORT,
        pool:{
            max: 10,
            min:2,
            idle: 10000,
            acquire: 30000,
            queueLimit: 0
        }
    }
);

async function testConnection() {
    try{
        await sequelize.authenticate();
        console.log("Conexion a postgreSQL establecida.")
    }catch (err){
        console.error("error de conexión:", err.stack);
    }
}

testConnection();

export const connectDB = async() =>{
   try{
    await sequelize.authenticate();
    console.log("conexión a postgreSQL establecida correctamente.");
   } catch (err){
    console.log("Error de conexión:", err.stack);
    process.exit(1);
   }
};
export default sequelize;