import ClientErrorResponse from "../../../helper/client_error_response.js";
const APIClientErrorResponse = new ClientErrorResponse();


export function User_Validator(req, res, next) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return APIClientErrorResponse.send(res);
  }
  if (typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
    return APIClientErrorResponse.send(res);
  }
  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
    return APIClientErrorResponse.send(res);
  }
  if (password.length < 8) {
    return APIClientErrorResponse.send(res);
  }
  return next();
}