// Logic to determine if the card should be displayed
export const shouldDisplayCard = (visible: boolean, disabled: boolean, hasContent: boolean): boolean => {
  return visible && !disabled && hasContent;
};
