import RomanNumerals from '../RomanNumerals';

describe('Roman numerals', () => {
  test('should be defined and expose a `count` function', () => {
    expect(RomanNumerals).toBeDefined();
    expect(RomanNumerals.count).toBeDefined();
    expect(typeof RomanNumerals.count).toBe('function');
  });
});
