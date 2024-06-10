export interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: { value: string; label: string }[];
  disabled?: boolean;
  backgroundColor?: string;
  visible?: boolean; // Add visible property
}
