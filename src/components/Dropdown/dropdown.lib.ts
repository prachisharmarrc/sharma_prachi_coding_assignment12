// Logic to determine if an option is valid
export const isValidOption = (options: string[], option: string | null): boolean => {
  if (!option) {
    return false; // Return false if the option is null or an empty string
  }
  return options.includes(option);
};
