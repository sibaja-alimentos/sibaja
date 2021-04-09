import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import SectionTitle from "../SectionTitle";

const Clients = () => {
  return (
    <Container id="clientes" className="text-center">
      <SectionTitle>Nuestros clientes finales</SectionTitle>
      <Row className="mt-5">
        <Col xs={6} lg={3} className="mb-3">
          <div className="px-3">
            <StaticImage src="../../images/01-corning.jpg" alt="Corning" />
          </div>
        </Col>
        <Col xs={6} lg={3} className="mb-3">
          <div className="px-3">
            <StaticImage src="../../images/02-panasonic.jpg" alt="Panasonic" />
          </div>
        </Col>
        <Col xs={6} lg={3} className="mb-3">
          <StaticImage src="../../images/alcom.jpg" alt="Alcom" />
        </Col>
        <Col xs={6} lg={3} className="mb-3">
          <StaticImage
            src="../../images/04-blackanddecker.jpg"
            alt="Black and Decker"
          />
        </Col>
        <Col xs={6} lg={3} className="mb-3">
          <StaticImage src="../../images/05-emerson.jpg" alt="Emerson" />
        </Col>
        <Col xs={6} lg={3} className="mb-3">
          <StaticImage src="../../images/06-nibco.jpg" alt="Nibco" />
        </Col>
        <Col xs={6} lg={3} className="mb-3">
          <StaticImage src="../../images/07-cornelius.jpg" alt="Cornelius" />
        </Col>
        <Col xs={6} lg={3} className="mb-3">
          <StaticImage src="../../images/08-kimbell.jpg" alt="Kimbell" />
        </Col>
        <Col xs={6} lg={3} className="mb-3">
          <StaticImage src="../../images/09-bbb.jpg" alt="BBB" />
        </Col>
      </Row>
    </Container>
  );
};

export default Clients;
