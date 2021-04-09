import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import Logo from "../images/logo.inline.svg";
import SanMateo from "../images/san-mateo.inline.svg";
import Rubi from "../images/rubi.inline.svg";
import Facebook from "../images/fb-footer.inline.svg";
import Instagram from "../images/ig-footer.inline.svg";

const Divider = styled.div`
  height: 10px;
  background-color: ${props => props.theme.colors.red};
`;

const StyledFooter = styled.footer`
  background-color: #f6f6f6;
  .logos {
    svg {
      &:first-of-type {
        width: 30%;
        flex: 0 0 30%;
        margin-right: 30px;
      }
      &:nth-of-type(2) {
        width: 20%;
        flex: 0 0 20%;
        margin-right: 30px;
      }
      &:last-of-type {
        width: 20%;
        flex: 0 0 20%;
      }
    }
  }
  h4 {
    color: ${props => props.theme.colors.red};
  }
  a {
    color: #000;
    display: block;
  }
`;

const Footer = () => {
  return (
    <>
      <Divider />
      <StyledFooter className="py-5">
        <Container className="py-5">
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="logos d-flex align-items-center">
                <Logo />
                <SanMateo />
                <Rubi />
              </div>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={8} className="mb-4 mb-lg-0">
                  <h4 className="h6 mb-3">SIBAJA ALIMENTOS S.A DE C.V</h4>
                  <a
                    href="mailto:informacion@sibajaalimentos.com"
                    className="mb-2"
                  >
                    Correo: informacion@sibajaalimentos.com
                  </a>
                  <a href="tel:8999231748" className="mb-2">
                    Teléfono: (899) 923 1748
                  </a>
                  <a href="">Visita: Tortillería Rubí</a>
                </Col>
                <Col lg={3} className="ml-auto">
                  <h4 className="h6 mb-3 text-uppercase">Síguenos</h4>
                  <div className="d-flex">
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="mr-2"
                    >
                      <Facebook />
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                      <Instagram />
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;