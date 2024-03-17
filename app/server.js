import app from "./index.js";
import { sequelize } from "../db/database.js";
import nodeNotifier from "node-notifier";
import path from "path";
import { config } from "dotenv";
import { debug } from "../helper/debug.js";
import User from "../models/user.model.js";
import Book from "../models/book.model.js";

config({ path: ".env" });

async function main() {
  const port = 8080;
  // set force to true to overwrite any existing tables - all data will be lost!
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true }); 
    debug(nodeNotifier.notify({
      title: "Server Running On",
      message: `http://localhost:${port}`,
    }))
    app.listen(port, () => {
      console.log(`-> Environment: ${process.env.ENVIRONMENT}`);
      console.log(`-> Listeningo On Port: http://localhost${port}`);
    });
  } catch (error) {
    debug(nodeNotifier.notify({
      title: "Server Error",
      message: `${error.message}`,
    }))
    console.error("-> Unable to connect to the database:", error);
  }
}

main();

