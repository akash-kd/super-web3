import Transaction from "../../../models/transactions.model.js";
import User from "../../../models/user.model.js";
import SuccessResponse from "../../../helper/success_response.js";
import ServerErrorResponse from "../../../helper/server_error_response.js";
import { debug } from "../../../helper/debug.js";
import e from "express";

const APISuccessResponse = new SuccessResponse();
const APIServerErrorResponse = new ServerErrorResponse();

export async function Create_Transaction(req, res) {
  const { from_user_id, to_user_id, name, amount, current } = req.body;
  const from_user = await User.findOne({ where: { id: from_user_id } })
  const to_user = await User.findOne({ where: { id: to_user_id } })

  if (!from_user || !to_user) {
    return APIServerErrorResponse.setStatusCode(404)
      .setMessage("User not found")
      .send(res);
  }


  Transaction.create({
    from_user_id: from_user_id,
    to_user_id: to_user_id,
    name: name,
    amount: amount,
    status: "pending",
    date: new Date(),
    currency: current,
  })
    .then((transaction) => {
      return APISuccessResponse.setStatusCode(200)
        .setMessage("Transaction Created")
        .send(res);
    })
    .catch((err) => {
      debug(err);
      return APIServerErrorResponse.send(res);
    });
}


export async function Get_Transactions_By_From_User_Id(req, res) {
  const { from_user_id } = req.body;
  const user = await User.findOne({ where: { id: from_user_id } })
  if (!user) {
    return APIServerErrorResponse.setStatusCode(404)
      .setMessage("User not found")
      .send(res);
  }

  const transactions = await Transaction.findAll({
    where: { from_user_id: from_user_id },
    attributes: ['name', 'amount', 'status', 'date', 'currency']
  })

  return APISuccessResponse
    .setStatusCode(200)
    .setMessage("Transactions found")
    .setData(transactions)
    .send(res)
}

export async function Get_Transactions_By_From_User_Id_Total(req, res) {
  const { from_user_id } = req.body;
  const user = await User.findOne({ where: { id: from_user_id } })
  if (!user) {
    return APIServerErrorResponse.setStatusCode(404)
      .setMessage("User not found")
      .send(res);
  }

  const transactions = await Transaction.findAll({
    where: { from_user_id: from_user_id },
    attributes: ['amount']
  })

  let total = 0;
  transactions.forEach(transaction => {
    total += transaction.amount;
  });

  return APISuccessResponse
    .setStatusCode(200)
    .setMessage("Total amount calulated")
    .setData({total_for_user: total})
    .send(res)
}
      

export async function Update_Transaction(req, res) {
  const { id, status } = req.body;
  const transaction = await Transaction.findOne({ where: { id: id } })
  if (!transaction) {
    return APIServerErrorResponse.setStatusCode(404)
      .setMessage("Transaction not found")
      .send(res);
  }

  transaction.status = status;
  transaction.save()
    .then((transaction) => {
      return APISuccessResponse.setStatusCode(200)
        .setMessage("Transaction Updated")
        .send(res);
    })
    .catch((err) => {
      debug(err);
      return APIServerErrorResponse.send(res);
    });
}

