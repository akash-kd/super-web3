import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/database.js';
// import Book from './book.model.js';

const User_Def = {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
export const User = sequelize.define('user', User_Def, {timestamps: true,})

export default User;