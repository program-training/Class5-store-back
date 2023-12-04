import mongoose, { ConnectOptions } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import UserModel from "../UserSchema";

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  jest.setTimeout(30000);
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("User Model", () => {
  it("should create and save a new user", async () => {
    const userData = {
      email: "test@example.com",
      isAdmin: false,
      password: "testpassword",
    };

    const user = new UserModel(userData);
    const savedUser = await user.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.email).toBe(userData.email);
    expect(savedUser.isAdmin).toBe(userData.isAdmin);
    expect(savedUser.password).toBe(userData.password); 
  });

  it("should not save a user without required fields", async () => {
    const userWithoutRequiredField = new UserModel({});

    let error: any; // Change the type to 'any' to handle different error types
    try {
      await userWithoutRequiredField.save();
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error instanceof mongoose.Error.ValidationError).toBe(true);

    if (error instanceof mongoose.Error.ValidationError) {
      expect(error.errors.email).toBeDefined();
      expect(error.errors.isAdmin).toBeUndefined();
      expect(error.errors.password).toBeUndefined();
    }
  });
});
