import User from "../../../models/user.model.js";
import RouteHandler from "../../../helper/route_handler.js";
import SuccessResponse from "../../../helper/success_response.js";
import ServerErrorResponse from "../../../helper/server_error_response.js";
import { Create_User } from "./user.controller.js";
import { User_Validator } from "./user.validator.js";

const UserRouterHandler = new RouteHandler();
const APISuccessResponse = new SuccessResponse();
const APIServerErrorResponse = new ServerErrorResponse();

UserRouterHandler
  .setMethod("/user", "post")
  .setValidator(User_Validator)
  .setController(Create_User)
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
