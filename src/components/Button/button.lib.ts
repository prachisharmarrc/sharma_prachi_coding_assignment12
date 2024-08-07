// Updated isButtonDisabled function
export const isButtonDisabled = (isLoading: boolean, hasError: boolean, isFormValid: boolean): boolean => {
  // The button is disabled if loading is in progress, there is an error, or the form is not valid
  return isLoading || hasError || !isFormValid;
};
