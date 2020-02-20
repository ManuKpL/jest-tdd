import isLeapYear from '../is-leap-year';

describe('Leap year', () => {
  test('should be a function', () => {
    expect(isLeapYear).toBeDefined();
    expect(typeof isLeapYear).toBe('function');
  });
});
