import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";

import Box from "../Box";
import Button from "../Button";

const Filter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Content = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  p {
    font-size: 1.2rem;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const Cover = () => {
  return (
    // <Box
    //   height={45}
    //   mobileHeight={150}
    //   tabletHeight={100}
    //   className="position-relative"
    // >
    <div className="position-relative">
      <StaticImage
        src="../../images/cover.jpg"
        alt="Sibaja alimentos"
        aspectRatio={1 / 1.5}
        className="d-md-none"
      />
      <StaticImage
        src="../../images/cover.jpg"
        alt="Sibaja alimentos"
        aspectRatio={1}
        className="d-none d-md-block d-lg-none"
      />
      <StaticImage
        src="../../images/cover.jpg"
        alt="Sibaja alimentos"
        aspectRatio={1 / 0.45}
        className="d-none d-lg-block"
      />
      <Filter />
      <Content className="d-flex align-items-center justify-content-center">
        <Container className="text-center">
          <Row>
            <Col lg={7} className="mx-auto">
              <p className="text-white mb-5">
                Renovamos y mejoramos la calidad en el servicio y el producto
                más importante de México: La tortilla
              </p>
              <Button onClick={() => scrollTo("#contacto")}>Contáctanos</Button>
            </Col>
          </Row>
        </Container>
      </Content>
    </div>
    // </Box>
  );
};

export default Cover;
