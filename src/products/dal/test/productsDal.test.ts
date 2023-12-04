import { getProductsFromDB } from "../productsDal";
import { MongoMemoryServer } from "mongodb-memory-server";
import ProductInterface from "../../interfaces/productInterface";
import mongoose, { ConnectOptions } from "mongoose";
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

describe("Products Database Functions", () => {
  // const testProduct :ProductInterface =
  it("checking getProductsFromDB dal func", async () => {
    const data = await getProductsFromDB();
    expect(data).toBeInstanceOf(Array);
  });
});
