import pg, { Pool } from "pg";
import dotenv from 'dotenv';

dotenv.config( {path: '../.env'});
const { pool } = pg;

async function createDatabase(){
    const defaultPool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: 'postgres'

    });

    try{
        //create database
        await defaultPool.query(`
            CREATE DATABASE ${process.env.DB_DATABASE}
        `);
        console.log('Base de datos creada exitosamente');

        //conet database for create tables
        const appPool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_PORT,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
            database: process.env.DB_DATABASE

        })

    }catch{

    }
}