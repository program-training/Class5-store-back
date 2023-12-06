import mongoose, { ConnectOptions } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import {
  getUsersFromDB,
  getUserByIdFromDB,
  registerUserToDB,
  initialDataToDB,
  deleteUsersFromDB,
  userExistInDB,
} from "../../../_users/dal/usersDal";
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
  await deleteUsersFromDB();
});

describe("User Database Functions", () => {
  const testUser: UserInterface = {
    email: "test@example.com",
    isAdmin: false,
    password: "testpassword",
  };

  it("should register a user to the database", async () => {
    const registeredUser = await registerUserToDB(testUser);
    expect(registeredUser).toBeDefined();
    expect(registeredUser?.email).toBe(testUser.email);
    expect(registeredUser?.isAdmin).toBe(testUser.isAdmin);
    expect(registeredUser?.password).toBe(testUser.password);
  });

  it("should get all users from the database", async () => {
    await registerUserToDB(testUser);
    const users = await getUsersFromDB();
    expect(users).toHaveLength(1);
    expect(users[0].email).toBe(testUser.email);
  });

  it("should get a user by id from the database", async () => {
    const registeredUser = await registerUserToDB(testUser);
    const foundUser = await getUserByIdFromDB(registeredUser!._id.toString());
    expect(foundUser).toBeDefined();
    expect(foundUser?.email).toBe(testUser.email);
  });

  it("should check if a user exists in the database", async () => {
    await registerUserToDB(testUser);
    const userExists = await userExistInDB(testUser.email);
    expect(userExists.email).toBe(testUser.email);
  });

  it("should insert initial data to the database", async () => {
    const initialData: UserInterface[] = [
      { email: "user1@example.com", isAdmin: false, password: "password1" },
      { email: "user2@example.com", isAdmin: true, password: "password2" },
    ];

    const result = await initialDataToDB(initialData);
    expect(result).toBeDefined();
    expect(result).toHaveLength(initialData.length);

    const users = await getUsersFromDB();
    expect(users).toHaveLength(initialData.length);
  });

  it("should delete all users from the database", async () => {
    await registerUserToDB(testUser);
    let users = await getUsersFromDB();
    expect(users).toHaveLength(1);

    await deleteUsersFromDB();
    users = await getUsersFromDB();
    expect(users).toHaveLength(0);
  });
});
