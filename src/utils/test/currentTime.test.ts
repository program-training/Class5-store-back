import { currentTime } from "../timeService";

describe('currentTime', () => {
  it('should return an object with current time details', () => {
    const result = currentTime();

    // Ensure the expected properties exist
    expect(result).toHaveProperty('year');
    expect(result).toHaveProperty('month');
    expect(result).toHaveProperty('day');
    expect(result).toHaveProperty('hours');
    expect(result).toHaveProperty('minutes');
    expect(result).toHaveProperty('seconds');
    expect(result).toHaveProperty('milliseconds');

    // Ensure the properties have the correct data type
    expect(typeof result.year).toBe('number');
    expect(typeof result.month).toMatch(/^(number|string)$/);
    expect(typeof result.day).toMatch(/^(number|string)$/);
    expect(typeof result.hours).toMatch(/^(number|string)$/);
    expect(typeof result.minutes).toMatch(/^(number|string)$/);
    expect(typeof result.seconds).toMatch(/^(number|string)$/);
    expect(typeof result.milliseconds).toBe('number');

    // Ensure the properties have valid values
    expect(result.year).toBeGreaterThan(0);
    expect(Number(result.month)).toBeGreaterThanOrEqual(1);
    expect(Number(result.month)).toBeLessThanOrEqual(12);
    expect(Number(result.day)).toBeGreaterThanOrEqual(1);
    expect(Number(result.day)).toBeLessThanOrEqual(31);
    expect(Number(result.hours)).toBeGreaterThanOrEqual(0);
    expect(Number(result.hours)).toBeLessThanOrEqual(23);
    expect(Number(result.minutes)).toBeGreaterThanOrEqual(0);
    expect(Number(result.minutes)).toBeLessThanOrEqual(59);
    expect(Number(result.seconds)).toBeGreaterThanOrEqual(0);
    expect(Number(result.seconds)).toBeLessThanOrEqual(59);
    expect(result.milliseconds).toBeGreaterThanOrEqual(0);
    expect(result.milliseconds).toBeLessThanOrEqual(999);
  });
});
