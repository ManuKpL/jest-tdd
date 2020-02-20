import FizzBuzz from '../FizzBuzz';

describe('FizzBuzz', () => {
  test('should be defined and expose a `say` function', () => {
    expect(FizzBuzz).toBeDefined();
    expect(FizzBuzz.say).toBeDefined();
    expect(typeof FizzBuzz.say).toBe('function');
  });
});
