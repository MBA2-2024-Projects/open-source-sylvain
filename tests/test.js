const { getRandomJoke } = require('../index');

describe('getRandomJoke Function', () => {
  test('should return a string', () => {
    const joke = getRandomJoke();
    expect(typeof joke).toBe('string');
  });

  test('should not return an empty string', () => {
    const joke = getRandomJoke();
    expect(joke).not.toBe('');
  });
});
