import RouteHandler from "../../../helper/route_handler.js";
import SuccessResponse from "../../../helper/success_response.js";
import ServerErrorResponse from "../../../helper/server_error_response.js";
import Book from "../../../models/book.model.js";
import { Create_Book, Get_Book_ByUseID} from "./book.controller.js";
import { Validator_Create, Validator_Get_ByUserId} from "./book.validator.js";


const BookRouteHandler = new RouteHandler();
const APIServerErrorResponse = new ServerErrorResponse();


BookRouteHandler
    .setMethod('/book', 'post')
    .setValidator(Validator_Create)
    .setController(Create_Book)
    .addMethod();

BookRouteHandler
    .setMethod('/book', 'get')
    .setValidator(Validator_Get_ByUserId)
    .setController(Get_Book_ByUseID)
    .addMethod();


BookRouteHandler.setErrorHandler((err, req, res, next) => {
    const path = req.path;
    const method = req.method;
    console.error(`-> Book Router Error: path: ${path} method: ${method} ${err.message}`);
    return APIServerErrorResponse.send(res);
})

export default BookRouteHandler;