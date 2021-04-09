import React, { useState } from "react";
import Headroom from "react-headroom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";

import Logo from "../images/logo.inline.svg";
import Facebook from "../images/facebook.inline.svg";
import Instagram from "../images/instagram.inline.svg";
import MenuIcon from "../images/menu.inline.svg";
import Close from "../images/close.inline.svg";

const StyledLogo = styled(Logo)`
  width: 100%;
  max-width: 150px;
  height: auto;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  &.opened {
    transform: translateX(0);
  }
  li {
    margin-bottom: 0.8rem;
    @media (min-width: 768px) {
      margin-bottom: 0;
      &:not(:last-of-type) {
        margin-right: 0.5rem;
      }
    }
  }
  button {
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${props => props.theme.colors.red};
    }
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background: #fff;
  top: 0;
  left: 0;
  z-index: 2000;
  transform: translateX(-100%);
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    background: transparent;
    border: 0;
    margin-bottom: 1rem;
    &:first-of-type {
      position: absolute;
      width: 40px;
      flex: 0 0 40px;
      top: 15px;
      right: 15px;
      svg {
        width: 100%;
        height: auto;
      }
    }
  }
  &.opened {
    transform: translateX(0);
  }
`;

const HamburgerWrapper = styled.button`
  min-width: 40px;
  background: transparent;
  border: 0;
  svg {
    width: 40px;
    height: auto;
  }
`;

const SocialItems = styled.div`
  a {
    svg path {
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      svg path {
        fill: ${props => props.theme.colors.red};
      }
    }
  }
`;

const menuItems = ["servicios", "productos", "clientes", "contacto"];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Headroom style={{ zIndex: 1999 }}>
        <header className="bg-white">
          <Container className="py-4">
            <Row className="align-items-center">
              <Col xs={6} lg={3}>
                <StyledLogo />
              </Col>
              <Col xs={6} className="d-lg-none text-right">
                <HamburgerWrapper onClick={() => setOpen(true)}>
                  <MenuIcon />
                </HamburgerWrapper>
              </Col>
              <Col xs={9} className="d-none d-lg-flex">
                <Menu className="ml-lg-auto list-unstyled m-0 p-0 d-none d-lg-flex">
                  {menuItems.map(menuItem => (
                    <li key={menuItem}>
                      <button
                        className="text-uppercase border-0 bg-transparent"
                        onClick={() => {
                          scrollTo(`#${menuItem}`);
                          setOpen(false);
                        }}
                      >
                        {menuItem}
                      </button>
                    </li>
                  ))}
                </Menu>
                <SocialItems className="ml-5 d-none d-lg-block">
                  <a
                    href="https://www.facebook.com/Sibaja-Alimentos-108239231330083/"
                    target="_blank"
                    rel="noreferrer"
                    className="d-inline-block"
                  >
                    <Facebook />
                  </a>
                  <a
                    href="https://www.instagram.com/sibaja_alimentos/"
                    target="_blank"
                    rel="noreferrer"
                    className="d-inline-block ml-2"
                  >
                    <Instagram />
                  </a>
                </SocialItems>
              </Col>
            </Row>
          </Container>
        </header>
      </Headroom>
      <MobileMenu className={`d-lg-none${open ? " opened" : ""}`}>
        <button onClick={() => setOpen(false)}>
          <Close />
        </button>
        {menuItems.map(menuItem => (
          <button
            key={menuItem}
            className="text-uppercase border-0 bg-transparent"
            onClick={() => {
              scrollTo(`#${menuItem}`);
              setOpen(false);
            }}
          >
            {menuItem}
          </button>
        ))}
      </MobileMenu>
    </>
  );
};

export default Header;
