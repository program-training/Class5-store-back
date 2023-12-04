import { morganTime, morganDay } from "../timeService";

describe("morganTime", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2020-01-01 12:34:56"));
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("returns time in correct format", () => {
    const result = morganTime()
    expect(result).toBe("[2020/01/01 12:34:56]");
  });
});
