import React from 'react';
import styled from 'styled-components';
import { DropdownProps, Option } from './Dropdown.types';

interface StyledSelectProps {
  isDisabled: boolean;
  backgroundColor: string;
}

const StyledSelect = styled.select<StyledSelectProps>`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: ${({ isDisabled, backgroundColor }) => (isDisabled ? 'grey' : backgroundColor || 'green')};
  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    background-color: ${({ isDisabled }) => (isDisabled ? 'grey' : '#f0f0f0')};
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled, backgroundColor }) => {
  return (
    <StyledSelect isDisabled={!!disabled} backgroundColor={backgroundColor || 'green'} disabled={disabled}>
      {options.map((option: Option, index: number) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
