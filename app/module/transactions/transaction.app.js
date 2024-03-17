import RouteHandler from "../../../helper/route_handler.js";
import SuccessResponse from "../../../helper/success_response.js";
import ServerErrorResponse from "../../../helper/server_error_response.js";
import Transaction from "../../../models/transactions.model.js";

import {
  Create_Transaction,
  Get_Transactions_By_From_User_Id,
  Update_Transaction,
  Get_Transactions_By_From_User_Id_Total,
} from "./transaction.controller.js";
import {
  Validator_Create,
  Validator_ByFromUserId,
  Validator_Update,
} from "./transaction.validator.js";

const TransactionRouteHandler = new RouteHandler();
const APISuccessResponse = new SuccessResponse();
const APIClientErrorResponse = new ServerErrorResponse();
const APIServerErrorResponse = new ServerErrorResponse();

TransactionRouteHandler.setMethod("/transaction", "post")
  .setValidator(Validator_Create)
  .setController(Create_Transaction)
  .addMethod();

TransactionRouteHandler.setMethod("/transaction", "get")
  .setValidator(Validator_ByFromUserId)
  .setController(Get_Transactions_By_From_User_Id)
  .addMethod();

TransactionRouteHandler.setMethod("/transaction", "put")
  .setValidator(Validator_Update)
  .setController(Update_Transaction)
  .addMethod();

TransactionRouteHandler.setMethod("/transaction_total", "get")
  .setValidator(Validator_ByFromUserId)
  .setController(Get_Transactions_By_From_User_Id_Total)
  .addMethod();

// Error should alway be at the bottom
TransactionRouteHandler.setErrorHandler((err, req, res, next) => {
  const path = req.path;
  const method = req.method;
  console.error(
    `-> Transaction Router Error: path: ${path} method: ${method} ${err.message}`
  );
  return APIServerErrorResponse.send(res);
});

export default TransactionRouteHandler;
