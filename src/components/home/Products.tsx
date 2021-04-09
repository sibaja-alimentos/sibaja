import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

import SectionTitle from "../SectionTitle";
import SanMateo from "../../images/san-mateo.inline.svg";
import Rubi from "../../images/rubi.inline.svg";

const ProductContent = styled.div`
  background-color: #f6f6f6;
  padding-top: 180px;
  height: calc(100% - 250px);
  //margin-top: -125px;
  transform: translateY(-125px);
`;

const products = [
  {
    title: "Tortillas de Maíz",
    items: [
      "Paquetes de 4 tortillas",
      "Tortilla de maseca",
      "Tortilla de maíz",
      "Tortilla de taco",
      "Tortilla Roja",
      "Tortilla Siberia",
      "Harina de maseca",
      "Totopos",
    ],
    image: "tortillas-maiz",
  },
  {
    title: "Tortillas de trigo",
    items: [
      "Tortilla de sincronizada 28 cm",
      "Tortilla para taco gigante 26 cm",
      "Tortilla para burrito 20 cm",
      "Tortilla de mesa 15 cm",
      "Tortilla para taco 13 cm",
      "Harina de trigo selecta",
    ],
    image: "tortillas-trigo",
  },
  {
    title: "Forman parte de nuestra familia",
    logos: true,
    image: "nuestra-familia",
  },
];

const Products = () => {
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          name: { in: ["tortillas-maiz", "tortillas-trigo", "nuestra-familia"] }
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
          name
        }
      }
    }
  `);

  return (
    <Container id="productos" className="mt-5 pt-5">
      <div className="text-center mb-5">
        <SectionTitle>Nuestros productos</SectionTitle>
      </div>
      <Row>
        {products.map(product => {
          const img = getImage(
            allFile.nodes.find((node: any) => node.name === product.image)
              .childImageSharp.gatsbyImageData
          );
          return (
            <Col lg={4} key={product.title} className="text-center">
              <GatsbyImage
                image={img!}
                alt={product.title}
                style={{
                  borderRadius: "100%",
                  width: 250,
                  height: 250,
                  objectFit: "cover",
                  zIndex: 2,
                }}
              />
              <ProductContent className="text-center pb-4">
                <div className="mb-4">
                  <SectionTitle className="h5">{product.title}</SectionTitle>
                </div>
                {product.items?.map(item => (
                  <p key={item} className="mb-0">
                    {item}
                  </p>
                ))}
                {product.logos && (
                  <Row className="pt-4">
                    <Col xs={4} className="ml-auto">
                      <SanMateo />
                    </Col>
                    <Col xs={4} className="mr-auto">
                      <a
                        href="https://tortilleriarubi.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Rubi />
                      </a>
                    </Col>
                  </Row>
                )}
              </ProductContent>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
