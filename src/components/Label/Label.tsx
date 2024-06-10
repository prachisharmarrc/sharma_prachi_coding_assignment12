import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  color: ${({ disabled }) => (disabled ? 'grey' : 'black')};
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  width: 100%;
  max-width: 200px;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const Label: React.FC<LabelProps> = ({ children, disabled, backgroundColor, visible = true }) => {
  return (
    <StyledLabel backgroundColor={backgroundColor} disabled={disabled} visible={visible}>
      {children}
    </StyledLabel>
  );
};

export default Label;
