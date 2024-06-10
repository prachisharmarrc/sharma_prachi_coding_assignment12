import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

interface StyledCardProps extends CardProps {
  backgroundColor?: string;
  visible?: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ disabled, backgroundColor }) => (disabled ? 'grey' : backgroundColor || 'pink')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  display: ${({ visible }) => (visible ? 'block' : 'none')}; // Handle visibility

  &:hover {
    box-shadow: ${({ disabled }) => (disabled ? '0 4px 8px rgba(0, 0, 0, 0.1)' : '0 8px 16px rgba(0, 0, 0, 0.2)')};
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-4px)')};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Card: React.FC<StyledCardProps> = ({ children, disabled, backgroundColor, visible = true }) => {
  return (
    <StyledCard disabled={disabled} backgroundColor={backgroundColor} visible={visible}>
      {children}
    </StyledCard>
  );
};

export default Card;
