import { isButtonDisabled } from './button.lib';

describe('Button Logic', () => {
  test('should return true when loading is in progress', () => {
    const result = isButtonDisabled(true, false, true);
    expect(result).toBe(true);
  });

  test('should return true when there is an error', () => {
    const result = isButtonDisabled(false, true, true);
    expect(result).toBe(true);
  });

  test('should return true when the form is not valid', () => {
    const result = isButtonDisabled(false, false, false);
    expect(result).toBe(true);
  });

  test('should return false when not loading, no errors, and the form is valid', () => {
    const result = isButtonDisabled(false, false, true);
    expect(result).toBe(false);
  });
});
