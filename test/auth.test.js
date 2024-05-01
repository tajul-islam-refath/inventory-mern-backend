const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
const UserModel = require("../src/models/Users/UserModel");
const UserCreateService = require("../src/services/user/UserCreateService");
const UserLoginService = require("../src/services/user/UserLoginService");

// database
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASS;
let URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ltldm.mongodb.net/inventoryTest?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true,
};

let token = null;
let user = null;

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

    // let res = await UserCreateService({ body: user }, UserModel);
    let res = await request(app).post("/api/v1/Registration").send(user);
    // console.log(res);

    expect(res.body.status).toMatch(/success/);
    expect(res.body.data._id).toBeDefined();
    expect(res.body.data.email).toBe("refath@gmail.com");
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
    token = response.body.token;

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  test("user profile GET/", async () => {
    let response = await request(app)
      .get("/api/v1/ProfileDetails")
      .set("token", token);

    expect(response.status).toBe(200);
    expect(response.body.status).toMatch(/success/);
  });

  test("unauthorized user", async () => {
    let response = await request(app).get("/api/v1/ProfileDetails");

    expect(response.status).toBe(401);
    expect(response.body.status).toMatch(/unauthorized/);
  });
});
