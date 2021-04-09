import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import SectionTitle from "../SectionTitle";
import Check from "../../images/check.inline.svg";

const Content = styled.p`
  line-height: 2.2;
`;

const Location = styled.div`
  h3 {
    color: ${props => props.theme.colors.red};
    font-size: 1rem;
  }
`;

const Services = () => {
  return (
    <Container id="servicios" className="pt-5 mt-5">
      <div className="text-center mb-5">
        <SectionTitle>Nuestros servicios</SectionTitle>
      </div>
      <Row className="mb-5">
        <Col lg={10} className="mx-auto">
          <Content className="text-center">
            Somos una empresa de servicios que se dedica a la producción y
            distribución de productos derivados del nixtamal y el trigo. Tenemos
            20 años surtiendo al mercado norteño, especializándonos en servicio
            a comedores industriales.
            <br />
            El compromiso con nuestros clientes es hacerles llegar sus pedidos a
            la hora y el lugar requerido para satisfacer a sus comensales.
          </Content>
        </Col>
      </Row>
      <Row className="text-center">
        <Col lg={6}>
          <Location>
            <Check className="mb-3" />
            <h3 className="mb-4">Equipo Reynosa, Tamaulipas</h3>
            <p>
              Locales de producción
              <br />
              Máquinas para producción de tortillas de maíz
              <br />
              Máquina para producción de tortillas de trigo
              <br />
              Flotilla de unidades de reparto
            </p>
          </Location>
        </Col>
        <Col lg={6}>
          <Location>
            <Check className="mb-3" />
            <h3 className="mb-4">Equipo Monterrey, Nuevo León</h3>
            <p>
              Local de producción
              <br />
              Máquina para producción de tortillas de maíz
              <br />
              Flotilla de unidades de reparto
            </p>
          </Location>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
