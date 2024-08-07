import { validateText } from './text.lib';

describe('Text Logic', () => {
  test('should return true when text meets the minimum length', () => {
    const result = validateText('Hello', 3);
    expect(result).toBe(true);
  });

  test('should return false when text does not meet the minimum length', () => {
    const result = validateText('Hi', 3);
    expect(result).toBe(false);
  });

  test('should return true when text meets the default minimum length', () => {
    const result = validateText('Hi');
    expect(result).toBe(true);
  });

  test('should return false when text is empty', () => {
    const result = validateText('');
    expect(result).toBe(false);
  });

  test('should return false when text is whitespace only', () => {
    const result = validateText('    ', 3);
    expect(result).toBe(false);
  });

  test('should return false when text does not match the provided pattern', () => {
    const result = validateText('Hello@World', 1, /^[a-zA-Z\s]+$/);
    expect(result).toBe(false);
  });

  test('should return true when text matches the provided pattern', () => {
    const result = validateText('Hello World', 1, /^[a-zA-Z\s]+$/);
    expect(result).toBe(true);
  });
});
