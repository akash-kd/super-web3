import RouteHandler from "../../../helper/route_handler.js";
import SuccessResponse from "../../../helper/success_response.js";
import ServerErrorResponse from "../../../helper/server_error_response.js";
import Book from "../../../models/book.model.js";
import { Create_Book } from "./book.controller.js";

const APIRouteHandler = new RouteHandler();
const APISuccessResponse = new SuccessResponse();
const APIServerErrorResponse = new ServerErrorResponse();


APIRouteHandler
    .setMethod('/book', 'post')
    .setController(Create_Book)
    .addMethod();


APIRouteHandler.setErrorHandler((err, req, res, next) => {
    const path = req.path;
    const method = req.method;
    console.error(`-> Book Router Error: path: ${path} method: ${method} ${err.message}`);
    return APIServerErrorResponse.send(res);
})

export default APIRouteHandler;