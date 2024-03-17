import ClientErrorResponse from "../../../helper/client_error_response.js";
const APIClientErrorResponse = new ClientErrorResponse();


export function Validator_Create(req, res, next) {
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

export function Validator_Get(req, res, next) {
  const { id } = req.body;
  if (!id) {
    return APIClientErrorResponse.send(res);
  }
  if (typeof id !== 'number') {
    return APIClientErrorResponse.send(res);
  }
  return next();
}

export function Validator_Update(req, res, next) {
  const { id, username, email, password } = req.body;
  if (!id || !username || !email || !password) {
    return APIClientErrorResponse.send(res);
  }
  if (typeof id !== 'number' || typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
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

export function Validator_Delete(req, res, next) {
  const { id } = req.body;
  if (!id) {
    return APIClientErrorResponse.send(res);
  }
  if (typeof id !== 'number') {
    return APIClientErrorResponse.send(res);
  }
  return next();
}