import ClientErrorResponse from "../../../helper/client_error_response.js";
const APIClientErrorResponse = new ClientErrorResponse();

export function Validator_Create(req, res, next) {
  const { title, desc, user_id } = req.body;
  if (!title || !desc || !user_id) {
    return APIClientErrorResponse.send(res);
  }
  if (
    typeof title !== "string" ||
    typeof desc !== "string" ||
    typeof user_id !== "number"
  ) {
    return APIClientErrorResponse.send(res);
  }
  return next();
}


export function Validator_Get_ByUserId(req, res, next) {
  const { user_id } = req.body;
  if (!user_id) {
    return APIClientErrorResponse.send(res);
  }
  if (typeof user_id !== "number") {
    return APIClientErrorResponse.send(res);
  }
  return next();
}