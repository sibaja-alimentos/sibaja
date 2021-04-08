import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import SectionTitle from "../SectionTitle";
import BannerTop from "../../images/banner-top.inline.svg";
import BannerBottom from "../../images/banner-bottom.inline.svg";
import Tortilla from "../../images/tortilla.inline.svg";

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.red};
  margin-top: -1px;
`;

const Art = styled(Tortilla)`
  position: absolute;
  bottom: 0;
  right: 30px;
  width: 250px;
  height: auto;
`;

const clients = [
  "ARAMARK MÉXICO, S.A. DE C.V.",
  "ALIMENTOS LOZ-CAR S.A. DE C.V.",
  "COMEDORES INDUSTRIALES INARI S.A. DE C.V.",
  "ALIMENTOS GASTRONÓMICOS MUNDIALES S.A. DE C.V.",
  "COMEDORES INDUSTRIALES Y EVENTOS ESPECIALES JML S.A. DE C.V. ",
  "YOLIT ALIMENTOS S.A. DE C.V.",
  "DELICIEUX BON-A-PETIT S.A. DE C.V.",
];

const Experience = () => {
  return (
    <div className="position-relative pb-5">
      <BannerTop className="w-100 h-auto d-block" />
      <Wrapper className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={7} className="mx-auto">
              <SectionTitle color="#fff">
                Nuestra experiencia en comedores industriales
              </SectionTitle>
            </Col>
          </Row>
          <Row>
            {clients.map(client => (
              <Col lg={4} key={client} className="mx-auto mb-5">
                <h3 className="h6 text-center text-white">{client}</h3>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
      <BannerBottom
        className="w-100 h-auto"
        style={{ marginTop: "-1px", display: "block" }}
      />
      <Art className="d-none d-md-block" />
    </div>
  );
};

export default Experience;
