import { morganDay } from "../timeService";

describe("morganDay", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2020-01-01 12:34:56"));
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  
  it("returns date in correct format", () => {
    const result = morganDay();
    expect(result).toBe("2020-01-01");
  });
});
