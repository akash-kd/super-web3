import ClientErrorResponse from "../../../helper/client_error_response.js";
const APIClientErrorResponse = new ClientErrorResponse();

export function Validator_Create(req, res, next) {
    const { amount, from_user_id, to_user_id } = req.body;
    // amount, from_user_id and to_user_id should be present
    if (!amount || !from_user_id || !to_user_id) {
        return APIClientErrorResponse
            .setMessage("Amount, From User id and To User id should be present")
            .send(res);
    }

    // from id and to id should be different
    if (from_user_id === to_user_id) {
        return APIClientErrorResponse
            .setMessage("From User id and To User id should be different")
            .send(res);
    }

    // status should not be mentioned
    if (req.body.status) {
        return APIClientErrorResponse
            .setMessage("Status should not be mentioned")
            .send(res);
    }


    next();
}


export function Validator_ByFromUserId(req, res, next) {
    const { from_user_id } = req.body;
    if (!from_user_id) {
        return APIClientErrorResponse
            .setMessage("From User id should be present")
            .send(res);
    }
    next();
}

export function Validator_Update(req, res, next) {
    const { id, status } = req.body;
    if (!status || !id) {
        return APIClientErrorResponse
            .setMessage("Id and Status should be present")
            .send(res);
    }
    next();
}