import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import RouteHandler from "../helper/route_handler.js";
import UserRouterHandler from "./module/user/user.app.js";
import BookRouterHandler from "./module/book/book.app.js";
import TransactionRouteHandler from "./module/transactions/transaction.app.js";
import SuccessResponse from "../helper/success_response.js";
import Book from "../models/book.model.js";
import cors from "cors";

const AppRouter = new RouteHandler();
const APIResponse = new SuccessResponse();

const app = express();
config({ path: ".env" });

var corsOptions = {
  origin: "http://localhost:8080"
}

// middleware
app.use(morgan("dev"));
app.use(cors(corsOptions))

app.use(express.json());
AppRouter.setMethod("/", "get")
  .setController((req, res) => {
    return APIResponse.setStatusCode(200).setMessage("Hello World").send(res);
  })
  .addMethod()
  .mount(app);


  
UserRouterHandler.mount(app);
BookRouterHandler.mount(app);
TransactionRouteHandler.mount(app);


export default app;
