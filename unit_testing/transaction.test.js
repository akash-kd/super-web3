import app from "../app/index.js";
import request from "supertest";
import Transaction from "../models/transactions.model.js";
import User from "../models/user.model.js";
let user1, user2;
let transaction;
beforeEach(async () => {
    user1 = await User.create({
        username: "User 1",
        email: "akk@gmail.com",
        password: "12345678",
    })

    user2 = await User.create({
        username: "User 2",
        email: "akk-2@gmail.com",
        password: "12345678",
    })

    transaction = await Transaction.create({
        amount: 100,
        name: "test",
        currency: "USD",
        status: "pending",
        from_user_id: user1.id,
        to_user_id: user2.id,
    });
});

describe.only("Transaction - Create", () => {
    describe("Transaction - Create Test", () => {
        test("Transaction - Create - Invalid Payload", async () => {
            const response = await request(app)
                .post("/transaction")
                .send({
                    from_user_id: user1.id,
                    to_user_id: user2.id,
                });
            expect(response.status).toBe(400);
        });

        test("Transaction - Create - Correct Payload", async () => {
            const response = await request(app)
                .post("/transaction")
                .send({
                    amount: 100,
                    name: "test",
                    current: "USD",
                    from_user_id: user1.id,
                    to_user_id: user2.id,
                });
            expect(response.status).toBe(200);
        })



    })


    describe("Transaction - Get Test", () => {
        test("Transaction - Get - Invalid ID", async () => {
            const response = await request(app)
                .get("/transaction");
            expect(response.status).toBe(400);
        });

        test("Transaction - Get - Valid ID", async () => {
    
            const response = await request(app)
                .get('/transaction')
                .send({
                    from_user_id: user1.id,
                });
            expect(response.status).toBe(200);
        });
    })


    describe("Transaction - Update Test", () => {

        test("Transaction - Update - Invalid ID", async () => {
            const response = await request(app)
                .put("/transaction")
                .send({
                    status: "approved"
                });
            expect(response.status).toBe(400);
        })

        test("Transaction - Update Status", async () => {
            const response = await request(app)
                .put("/transaction")
                .send({
                    id: transaction.id,
                    status: "approved"
                });
            expect(response.status).toBe(200);
        })
    })
})
