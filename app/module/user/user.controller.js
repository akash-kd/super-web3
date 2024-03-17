import SuccessResponse from "../../../helper/success_response.js"
import ServerErrorResponse from "../../../helper/server_error_response.js"
import User  from "../../../models/user.model.js"
import { debug } from "../../../helper/debug.js";
const APISuccessResponse = new SuccessResponse();
const APIServerErrorResponse = new ServerErrorResponse();



export async function Create_User(req, res) {
    const { username, email, password } = req.body;

    const user = await User.create({username, email, password})
    console.log(user)
    return APISuccessResponse
        .setData(user)
        .send(res);
}