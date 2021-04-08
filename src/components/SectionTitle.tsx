import React from "react";
import styled from "styled-components";

import Decoration from "../images/decoration.inline.svg";

interface IProps {
  color?: string;
}

const Deco = styled(Decoration)`
  width: 100px;
  max-width: 90%;
  height: auto;
  display: block;
  margin: auto;
  path {
    fill: ${props => props.color || "#000"};
  }
`;

const Title = styled.h2`
  color: ${props => props.color || "#000"};
`;

const SectionTitle: React.FC<IProps & React.HTMLAttributes<HTMLDivElement>> = ({
  color,
  className,
  children,
}) => {
  return (
    <div className="d-inline-block">
      <Title className={`font-weight-bold mb-2 ${className}`} color={color}>
        {children}
      </Title>
      <Deco color={color} />
    </div>
  );
};

export default SectionTitle;
