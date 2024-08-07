import { shouldDisplayCard } from './card.lib';

describe('Card Logic', () => {
  test('should return true when visible is true, disabled is false, and hasContent is true', () => {
    const result = shouldDisplayCard(true, false, true);
    expect(result).toBe(true);
  });

  test('should return false when visible is false, even if not disabled and has content', () => {
    const result = shouldDisplayCard(false, false, true);
    expect(result).toBe(false);
  });

  test('should return false when disabled is true, even if visible and has content', () => {
    const result = shouldDisplayCard(true, true, true);
    expect(result).toBe(false);
  });

  test('should return false when hasContent is false, even if visible and not disabled', () => {
    const result = shouldDisplayCard(true, false, false);
    expect(result).toBe(false);
  });

  test('should return false when all conditions are false', () => {
    const result = shouldDisplayCard(false, true, false);
    expect(result).toBe(false);
  });

  test('should return false when visible is false and hasContent is false, even if not disabled', () => {
    const result = shouldDisplayCard(false, false, false);
    expect(result).toBe(false);
  });
});
