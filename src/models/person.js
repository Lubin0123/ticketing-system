import { DataTypes, Model } from 'sequelize';
import sequelize  from '../config/database.js';
class Person extends Model{}
Person.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        identifyDocument:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Person',
        tableName: 'Person',
        freezeTableName: true,
        schema: 'my_schema',
    }
);
export default Person;