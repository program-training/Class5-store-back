import supertest from "supertest";
import express from "express";

import corsHandler from "../cors";

const app = express();

app.use(corsHandler);

app.get("/test", (req, res) => {
  res.send("Test route");
});

describe("CORS Test", () => {
  it("should allow requests from whiteListed origin", async () => {
    const response = await supertest(app)
      .get("/test")
      .set("Origin", "http://127.0.0.1");

    expect(response.status).toBe(200);
  });

  it("should reject requests from unauthorized origin", async () => {
    const response = await supertest(app)
      .get("/test")
      .set("Origin", "http://example.com");

    expect(response.status).toBe(401);
  });
});
