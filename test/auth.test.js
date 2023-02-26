const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
const UserModel = require("../src/models/Users/UserModel");
const UserCreateService = require("../src/services/user/UserCreateService");
const UserLoginService = require("../src/services/user/UserLoginService");

// database
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASS;
let URL = `mongodb+srv://DB_USER:DB_PASSWORD@cluster0.ltldm.mongodb.net/inventoryTest?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true,
};

describe("auth test suit", () => {
  beforeAll(async () => {
    // connect data base
    await mongoose.connect(URL, options);
  });

  afterAll(async () => {
    await UserModel.deleteMany();
    await mongoose.connection.close();
  });

  test("user creates an account successfully", async () => {
    let user = {
      email: "refath@gmail.com",
      firstName: "Tajul Islam",
      lastName: "Refath",
      password: "12345678",
    };

    let res = await UserCreateService({ body: user }, UserModel);
    // console.log(res);

    expect(res.status).toMatch(/success/);
    expect(res.data._id).toBeDefined();
    expect(res.data.email).toBe(res.data.email);
    expect(res.data.password).toBe(res.data.password);
  });

  test("user should not create an account with a duplicate email", async () => {
    let user = {
      email: "refath@gmail.com",
      firstName: "Tajul Islam",
      lastName: "Refath",
      password: "12345678",
    };

    let res = await UserCreateService({ body: user }, UserModel);
    // console.log(res);

    expect(res.status).toMatch(/fail/);
  });

  test("user login successfully", async () => {
    const response = await request(app).post("/api/v1/Login").send({
      email: "refath@gmail.com",
      password: "12345678",
    });

    // console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });
});
