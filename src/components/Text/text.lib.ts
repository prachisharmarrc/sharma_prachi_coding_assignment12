// Logic to validate the text
export const validateText = (text: string, minLength: number = 1, pattern: RegExp | null = null): boolean => {
  // Check if the text meets the minimum length and is not whitespace-only
  if (text.trim().length < minLength) {
    return false;
  }

  // If a pattern is provided, validate the text against it
  if (pattern && !pattern.test(text)) {
    return false;
  }

  return true;
};
