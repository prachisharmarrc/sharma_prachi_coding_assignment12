// Logic to determine if the label should be displayed
export const shouldDisplayLabel = (visible: boolean, disabled: boolean, isMandatory: boolean): boolean => {
  // Display the label if it's visible, not disabled, or it's mandatory
  return (visible && !disabled) || isMandatory;
};
