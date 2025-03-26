const request = require("supertest");
const express = require("express");
const userRoutes = require("./userRoutes");
const UserController = require("../controllers/userController");

// Mock the UserController methods
jest.mock("../controllers/userController");

const app = express();
app.use(express.json());
app.use("/users", userRoutes);

describe("User Routes", () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  test("POST /users/register - should register a user successfully", async () => {
    const mockResponse = {
      message: "User registered successfully",
      user: { email: "test@example.com" },
    };
    UserController.prototype.registerUser = jest.fn((req, res) =>
      res.status(201).json(mockResponse)
    );

    const response = await request(app).post("/users/register").send({
      firstName: "John",
      lastName: "Doe",
      email: "test@example.com",
      password: "A@12345678",
    });

    expect(response.status).toBe(201);
    expect(response.body).toEqual(mockResponse);
    expect(UserController.prototype.registerUser).toHaveBeenCalled();
  }, 10000); // Set timeout to 10 seconds

  test("POST /users/login - should log in a user successfully", async () => {
    const mockResponse = {
      message: "Login successful",
      user: { email: "test@example.com" },
    };
    UserController.prototype.loginUser = jest.fn((req, res) =>
      res.status(200).json(mockResponse)
    );

    const response = await request(app)
      .post("/users/login")
      .send({ email: "test@example.com", password: "A@12345678" });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockResponse);
    expect(UserController.prototype.loginUser).toHaveBeenCalled();
  });

  test("GET /users/details/:email - should fetch user details successfully", async () => {
    const mockResponse = {
      firstName: "John",
      lastName: "Doe",
      email: "test@example.com",
    };
    UserController.prototype.getUserDetails = jest.fn((req, res) =>
      res.status(200).json(mockResponse)
    );

    const response = await request(app).get("/users/details/test@example.com");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockResponse);
    expect(UserController.prototype.getUserDetails).toHaveBeenCalled();
  });
});
