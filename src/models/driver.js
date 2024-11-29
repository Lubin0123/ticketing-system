
import { DataTypes } from 'sequelize';
import sequelize  from '../config/database.js';
import Person from './person.js';

class Driver extends Person{}
Driver.init(
    {
        driverLicense:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        hireDate:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Driver',
        tableName: 'Driver',
        freezeTableName: true,
        schema: 'my_schema',
    }
);
export default Driver;