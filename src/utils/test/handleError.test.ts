import { Response } from "express";
import ServerError from "../ServerError";
import { handleError } from "../handleErrors";

describe("handleError", () => {
  let mockResponse: Response;

  beforeEach(() => {
    // Mock the Express response object
    mockResponse = {
      status: jest.fn().mockReturnThis(), // Mock the status method
      send: jest.fn(), // Mock the send method
    } as unknown as Response;
  });

  it("handles ServerError correctly", () => {
    const serverError = new ServerError(404, "Not Found");

    handleError(mockResponse, serverError);

    // Verify that the status and send methods are called with the correct arguments
    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.send).toHaveBeenCalledWith("Not Found");
  });

  it("handles generic Error correctly", () => {
    const genericError = new Error("Generic Error");

    handleError(mockResponse, genericError);

    // Verify that the status and send methods are called with the correct arguments
    expect(mockResponse.status).toHaveBeenCalledWith(400); // Default status for generic errors
    expect(mockResponse.send).toHaveBeenCalledWith("Generic Error");
  });

  it("handles other types of errors correctly", () => {
    const otherError = "This is not an instance of Error or ServerError";

    handleError(mockResponse, otherError);

    // Verify that the status and send methods are called with the correct arguments
    expect(mockResponse.status).toHaveBeenCalledWith(400); // Default status for other errors
    expect(mockResponse.send).toHaveBeenCalledWith("Oops... an error accorded");
  });

  it("uses provided status for non-ServerError errors", () => {
    const otherError = new Error("Another Generic Error");

    handleError(mockResponse, otherError, 500);

    // Verify that the status and send methods are called with the correct arguments
    expect(mockResponse.status).toHaveBeenCalledWith(500); // Provided status should be used
    expect(mockResponse.send).toHaveBeenCalledWith("Another Generic Error");
  });
});
