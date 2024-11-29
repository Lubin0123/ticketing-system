import sequelize from '../config/database.js';
import '../models/person.js';
import '../models/passenger.js';
import '../models/driver.js';

(async () =>{
    try{
        await sequelize.sync({force: true});
        console.log("Base de datos sincronizada correctamente.");
    }catch (err){
        console.error("Error al sincronizar la Base de datos.", err);
    }finally{
        await sequelize.close();
    }
})();