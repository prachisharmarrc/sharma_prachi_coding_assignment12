import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  font-size: 26px;
  color: ${({ disabled }) => (disabled ? 'grey' : 'violet')};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'}; // Use backgroundColor prop
  margin: 0;
  padding: 8px 0;
  transition: color 0.3s ease;
  display: ${({ visible }) => (visible ? 'block' : 'none')}; // Handle visibility

  &:hover {
    color: ${({ disabled }) => (disabled ? 'grey' : 'lavender')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Text: React.FC<TextProps> = ({ children, disabled, backgroundColor, visible = true }) => {
  return (
    <StyledText disabled={disabled} backgroundColor={backgroundColor} visible={visible}>
      {children}
    </StyledText>
  );
};

export default Text;
