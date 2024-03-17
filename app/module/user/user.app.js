import User from "../../../models/user.model.js";
import RouteHandler from "../../../helper/route_handler.js";
import SuccessResponse from "../../../helper/success_response.js";
import ServerErrorResponse from "../../../helper/server_error_response.js";
import { Create_User, Get_User, Update_User, Delete_User} from "./user.controller.js";
import { Validator_Create, Validator_Get, Validator_Update, Validator_Delete} from "./user.validator.js";

const UserRouterHandler = new RouteHandler();
const APISuccessResponse = new SuccessResponse();
const APIServerErrorResponse = new ServerErrorResponse();

UserRouterHandler
  .setMethod("/user", "post")
  .setValidator(Validator_Create)
  .setController(Create_User)
  .addMethod();

UserRouterHandler
  .setMethod("/user", "get")
  .setValidator(Validator_Get)
  .setController(Get_User)
  .addMethod();

UserRouterHandler
  .setMethod("/user", "put")
  .setValidator(Validator_Update)
  .setController(Update_User)
  .addMethod();


UserRouterHandler
  .setMethod("/user", "delete")
  .setValidator(Validator_Delete)
  .setController(Delete_User)
  .addMethod();
  

// Error Handler must in the end
UserRouterHandler.setErrorHandler((err, req, res, next) => {
  const path = req.path;
  const method = req.method;
  console.error(
    `-> User Router Error: path: ${path} method: ${method} ${err.message}`
  );
  return APIServerErrorResponse.send(res);
});

export default UserRouterHandler;
