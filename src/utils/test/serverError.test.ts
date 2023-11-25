import ServerError from "../ServerError";

describe("ServerError", () => {
  it("should create an instance of ServerError with the correct properties", () => {
    const status = 500;
    const message = "Internal Server Error";

    const serverError = new ServerError(status, message);

    expect(serverError).toBeInstanceOf(ServerError);
    expect(serverError).toBeInstanceOf(Error);
    expect(serverError.status).toBe(status);
    expect(serverError.message).toBe(message);
  });

  it("should extend Error", () => {
    const serverError = new ServerError(500, "Internal Error");

    expect(serverError).toBeInstanceOf(Error);
  });

  it("should throw an error when an invalid status is provided", () => {
    const invalidStatus = "not a number";
    const message = "Invalid Status";

    const createServerError = () => {
      new ServerError(invalidStatus as any, message);
    };
    try {
      createServerError();
    } catch (error: any) {
      expect(error.message).toBe("Status must be a number");
    }
  });
  it("should throw on invalid status type", () => {
    const invalidStatus = 123;
    const message = 123;
    const createServerError = () => {
      new ServerError(invalidStatus, message as any);
    };
    try {
      createServerError();
    } catch (error: any) {
      expect(error.message).toBe("Message must be a string");
    }
  });
});
