import React from "react";
import styled from "styled-components";

interface IProps {
  height?: number;
  mobileHeight?: number;
  tabletHeight?: number;
}

const StyledBox = styled.div<IProps>`
  background-color: lightgray;
  &:after {
    content: "";
    display: block;
    padding-top: ${props => `${props.mobileHeight || props.height}%`};
    @media (min-width: 768px) {
      padding-top: ${props => `${props.tabletHeight || props.height}%`};
    }
    @media (min-width: 992px) {
      padding-top: ${props => `${props.height}%`};
    }
  }
`;

const Box: React.FC<IProps & React.HTMLAttributes<HTMLDivElement>> = ({
  height = 100,
  mobileHeight,
  tabletHeight,
  ...props
}) => {
  return (
    <StyledBox
      height={height}
      mobileHeight={mobileHeight}
      tabletHeight={tabletHeight}
      {...props}
    />
  );
};

export default Box;
