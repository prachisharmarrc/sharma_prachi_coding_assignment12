import { shouldDisplayLabel } from './label.lib';

describe('Label Logic', () => {
  test('should return true when visible is true and disabled is false', () => {
    const result = shouldDisplayLabel(true, false, false);
    expect(result).toBe(true);
  });

  test('should return true when the label is mandatory, regardless of visibility or disability', () => {
    const result = shouldDisplayLabel(false, true, true);
    expect(result).toBe(true);
  });

  test('should return false when visible is false and not mandatory', () => {
    const result = shouldDisplayLabel(false, false, false);
    expect(result).toBe(false);
  });

  test('should return false when disabled is true and not mandatory', () => {
    const result = shouldDisplayLabel(true, true, false);
    expect(result).toBe(false);
  });

  test('should return true when both visible is false and disabled is true, but it is mandatory', () => {
    const result = shouldDisplayLabel(false, true, true);
    expect(result).toBe(true);
  });

  test('should return true when both visible is true and it is mandatory, regardless of disability', () => {
    const result = shouldDisplayLabel(true, true, true);
    expect(result).toBe(true);
  });
});
