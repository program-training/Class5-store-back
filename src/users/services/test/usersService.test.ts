import mongoose, { ConnectOptions } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import {
  getUsersService,
  getUserByIdService,
  registerUserService,
} from "../usersService";
import User from "../../models/mongoose/UserSchema";
import UserInterface from "../../interfaces/userInterface";

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

beforeEach(async () => {
  // Clear the database before each test
  await User.deleteMany({});
});

describe("User Service Functions", () => {
  const testUser: UserInterface = {
    email: "test@example.com",
    isAdmin: false,
    password: "testpassword",
  };

  // it("should register a user through the service", async () => {
  //   const registeredUser = await registerUserService(testUser);
  //   expect(registeredUser).toBeDefined();
  // expect(registeredUser?.email).toBe(testUser.email);
  // expect(registeredUser?.isAdmin).toBe(testUser.isAdmin);
  // expect(registeredUser?.password).toBe(testUser.password);
  // });

  it("should get all users through the service", async () => {
    await registerUserService(testUser);
    const users = await getUsersService();
    expect(users).toHaveLength(1);
    expect(users[0].email).toBe(testUser.email);
  });

  // it("should get a user by id through the service", async () => {
  //   const registeredUser = await registerUserService(testUser);
  //   const foundUser = await getUserByIdService(registeredUser._id.toString());
  //   expect(foundUser).toBeDefined();
  //   expect(foundUser?.email).toBe(testUser.email);
  // });

  // it("should check if a user exists through the service", async () => {
  //   await registerUserService(testUser);
  //   const userExists = await registerUserService(testUser); // Should return the existing user
  //   expect(userExists?.email).toBe(testUser.email);
  // });
});
