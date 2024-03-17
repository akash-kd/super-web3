import SuccessResponse from "../../../helper/success_response.js"
import ServerErrorResponse from "../../../helper/server_error_response.js"
import Book from "../../../models/book.model.js";
import User from "../../../models/user.model.js";
const APISuccessResponse = new SuccessResponse();
const APIServerErrorResponse = new ServerErrorResponse();


export const Create_Book = async (req, res) => {
    const { title, desc, user_id } = req.body;
    console.log(user_id)
    const book = await Book.create({title, desc, user_id: user_id})
    console.log(book)
    return APISuccessResponse
        .setData(book)
        .send(res);
}

export const Get_All_Book = async (req, res) => {
    const books = await Book.findAll()
    return APISuccessResponse
        .setData(books)
        .send(res);
}

export const Get_Book_ByUseID = async (req, res) => {
    const { user_id } = req.body;
    const books = await Book.findAll({where: {user_id: user_id}})
    return APISuccessResponse
        .setData(books)
        .send(res);
}