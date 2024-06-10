import React from 'react';
import styled from 'styled-components';
import { MyButtonProps } from './MyButton.types';

const StyledButton = styled.button<MyButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled, backgroundColor }) => (disabled ? 'grey' : backgroundColor || 'red')};
  color: white;
`;

const MyButton: React.FC<MyButtonProps> = ({ children, disabled, backgroundColor }) => {
  return <StyledButton disabled={disabled} backgroundColor={backgroundColor}>{children}</StyledButton>;
};

export default MyButton;
