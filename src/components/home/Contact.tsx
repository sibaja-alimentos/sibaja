import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import axios, { AxiosRequestConfig } from "axios";

import Button from "../Button";
import Decoration from "../../images/decoration.inline.svg";

const Wrapper = styled.div`
  background-color: #f6f6f6;
`;

const Deco = styled(Decoration)`
  width: 100px;
  max-width: 80%;
  height: auto;
`;

const Form = styled.form`
  input,
  textarea {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: solid 1px #000;
    margin-bottom: 30px;
    padding: 10px 0;
    line-height: 1.5;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #000;
    }
  }
`;

const Copy = styled.p`
  line-height: 1.5;
  font-size: 1.2rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const axiosConfig: AxiosRequestConfig = {
      url: "/",
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: JSON.stringify({ "form-name": "contact", ...formData }),
    };
    axios(axiosConfig)
      .then(res => console.log("res: ", res))
      .catch(e => console.log("err: ", e));
  };

  return (
    <>
      <Wrapper id="contacto" className="mt-5 py-5 position-relative">
        <StaticImage
          src="../../images/tortillas-contacto.jpg"
          alt="tortilla de maíz"
          style={{
            position: "absolute",
            width: "40%",
            left: 0,
            top: 0,
            height: "100%",
            objectFit: "cover",
            borderTopRightRadius: "300px",
            borderBottomRightRadius: "300px",
          }}
          className="d-none d-md-block"
        />
        <Container>
          <Row>
            <Col lg={7} className="ml-auto">
              <Row className="mb-4">
                <Col lg={11} className="mx-auto text-center">
                  <Deco />
                  <h2 className="h3 mt-4">
                    Lleva nuestro servicio a tu comedor industrial
                  </h2>
                  <p>Déjanos tus datos y nos comunicaremos contigo</p>
                </Col>
              </Row>
              <Form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="address"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="hidden"
                  name="address"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  name="phone"
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Correo"
                  name="email"
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Ciudad"
                  name="city"
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  placeholder="Mensaje"
                  name="message"
                  onChange={handleInputChange}
                  required
                />
                <div className="text-center">
                  <Button type="submit">Enviar</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Container className="py-5">
        <Row>
          <Col lg={8} className="mx-auto">
            <Copy className="text-center">
              Nuestro personal e infraestructura se encuentran capacitados y
              enfocados para cubrir las gran demanda de comedores industriales.
            </Copy>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
