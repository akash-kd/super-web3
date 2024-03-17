import app from "../app/index.js";
import request from "supertest";

beforeEach(() => {
  console.log("beforeEach");
});

afterEach(() => {
  console.log("afterEach");
});

test("Sending Valid Data", async () => {
  const data = {
    username: "test",
    email: "akk@gmail.com",
    // password: "12345678",
  };
  const res = await request(app)
    .post("/")
    .send(data)
    .set("Accept", "application/json");

  const status = res.status;
  const res_data = res.body;

  expect(status).toBe(500);
  expect(res_data.status).toBe(500);
  expect(res_data.message).toBe("Internal Server Error");
});
