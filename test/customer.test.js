const request = require("supertest");
const app = require("../app");
const jwt = require("jsonwebtoken");

// database
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASS;
let URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ltldm.mongodb.net/inventoryTest?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true,
};

describe("customer test suit", () => {
  let authToken = "";
  beforeAll(async () => {
    const payload = {
      data: "refath@gmail.com",
    };

    authToken = jwt.sign(payload, "SecretKey123456789");
  });

  test("should create a new customer when authenticated", async () => {
    const reqBody = {
      CustomerName: "test user",
      Phone: "01988775828",
      Email: "test@gmail.com",
      Address: "dhaka bangladesh",
    };

    let response = await request(app)
      .post("/api/v1/CreateCustomers")
      .send(reqBody)
      .set("token", authToken);

    expect(response.status).toMatch(/success/);
    expect(response.status).toBe(200);
  });

  test("should not create a new customer when not authenticated", async () => {
    const reqBody = {
      CustomerName: "test user",
      Phone: "01988775828",
      Email: "test@gmail.com",
      Address: "dhaka bangladesh",
    };

    let response = await request(app)
      .post("/api/v1/CreateCustomers")
      .send(reqBody)
      .set("token", authToken);

    expect(response.status).toBe(401);
    expect(response.body.status).toMatch(/unauthorized/);
  });
});
