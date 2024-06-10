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
  width: 100%; // Make button responsive
  max-width: 200px; // Set a max width
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')}; // Handle visibility

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

const MyButton: React.FC<MyButtonProps> = ({ children, disabled, backgroundColor, visible = true }) => {
  return (
    <StyledButton disabled={disabled} backgroundColor={backgroundColor} visible={visible}>
      {children}
    </StyledButton>
  );
};

export default MyButton;
