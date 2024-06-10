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

  &:hover {
    color: ${({ disabled }) => (disabled ? 'grey' : 'lavender')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;

const Text: React.FC<TextProps> = ({ children, disabled, backgroundColor }) => {
  return <StyledText disabled={disabled} backgroundColor={backgroundColor}>{children}</StyledText>;
};

export default Text;
