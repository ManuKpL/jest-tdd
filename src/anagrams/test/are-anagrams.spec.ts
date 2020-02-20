import areAnagrams from '../are-anagrams';

describe('Are Anagrams', () => {
  test('should be a function', () => {
    expect(areAnagrams).toBeDefined();
    expect(typeof areAnagrams).toBe('function');
  });
});
