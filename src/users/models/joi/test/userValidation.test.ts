import UserInterface from "../../../interfaces/userInterface";
import userValidation from "../userValidation";

describe("userValidation", () => {
  it("validates a valid user", () => {
    const user = {
      email: "test@example.com",
      password: "Test123!",
    };

    const result = userValidation(user);

    expect(result.error).toBeUndefined();
  });

  it("returns error for invalid user email is required", () => {
    const { error } = userValidation({} as UserInterface);

    expect(error).toBeDefined();
    expect(error?.details[0].message).toBe("user email is required");
  });

  it("returns error for invalid email", () => {
    const user = {
      email: "invalidEmail",
    };

    const { error } = userValidation(user);

    expect(error).toBeDefined();
    expect(error?.details[0].message).toBe("email must be a valid email");
  });

  it("returns error for invalid password", () => {
    const user = {
      email: "test@example.com",
      password: "short",
    };

    const { error } = userValidation(user);

    expect(error).toBeDefined();
    expect(error?.details[0].message).toEqual(
      expect.stringContaining("must be at least nine characters long")
    );
  });
});
