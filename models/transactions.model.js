import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database.js";
import User from "./user.model.js";

// possible values for status: "pending", "approved", "rejected"
const Transaction_Def = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: true,
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

export const Transaction = sequelize.define("transaction", Transaction_Def, {
  timestamps: true,
});

Transaction.belongsTo(User, { foreignKey: "from_user_id" });
Transaction.belongsTo(User, { foreignKey: "to_user_id" });

export default Transaction;
