import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.red};
  color: #fff;
  border: 0;
  padding: 20px 35px;
  letter-spacing: 0.2em;
  line-height: 1;
  font-size: 0.8rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(0.95);
  }
  @media (min-width: 768px) {
    font-size: 1rem;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <StyledButton
      className={`rounded-pill text-uppercase ${className}`}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
