import React, { useState } from "react";
import Headroom from "react-headroom";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";
import { Squash as Hamburger } from "hamburger-react";

import Logo from "../images/logo.inline.svg";
import Facebook from "../images/facebook.inline.svg";
import Instagram from "../images/instagram.inline.svg";

const StyledLogo = styled(Logo)`
  width: 40%;
  max-width: 150px;
  height: auto;
`;

const Menu = styled.ul`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #fff;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 992px) {
    position: relative;
    width: auto;
    height: auto;
    background: transparent;
    flex-direction: row;
    transform: translateX(0);
  }
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

const HamburgerWrapper = styled.div`
  z-index: 2;
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
    <Headroom style={{ zIndex: 1999 }}>
      <header className="bg-white">
        <Container className="py-4">
          <div className="d-flex align-items-center">
            <StyledLogo />
            <HamburgerWrapper className="ml-auto d-lg-none">
              <Hamburger color="#000" toggled={open} toggle={setOpen} />
            </HamburgerWrapper>
            <Menu
              className={`ml-lg-auto list-unstyled m-0 p-0${
                open ? " opened" : ""
              }`}
            >
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
                href=""
                target="_blank"
                rel="noreferrer"
                className="d-inline-block"
              >
                <Facebook />
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="d-inline-block ml-2"
              >
                <Instagram />
              </a>
            </SocialItems>
          </div>
        </Container>
      </header>
    </Headroom>
  );
};

export default Header;
