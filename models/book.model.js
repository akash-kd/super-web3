import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/database.js';
import User from './user.model.js';


const Book_Def = {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}
export const Book = sequelize.define('book', Book_Def, {timestamps: true,})
Book.belongsTo(User, {foreignKey: 'user_id'})
export default Book;