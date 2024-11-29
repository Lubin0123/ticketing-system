import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Person from './person.js';

class Passenger extends Person{}
Passenger.init(
    {
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true,
            },
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthDate:{
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true,
            },
        },
        registrationDate:{
            type:DataTypes.DATE,
            allowNull:false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
    sequelize,
    modelName: 'Passenger',
    tableName: 'Passenger',
    freezeTableName: true,
    schema: 'my_schema',
    }
);
export default Passenger;