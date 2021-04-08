import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Cover from "../components/home/Cover";
import Services from "../components/home/Services";
import Products from "../components/home/Products";
import Experience from "../components/home/Experience";
import Clients from "../components/home/Clients";
import Contact from "../components/home/Contact";

const Homepage = () => {
  return (
    <Layout>
      <Seo title="Inicio" />
      <Cover />
      <Services />
      <Products />
      <Experience />
      <Clients />
      <Contact />
    </Layout>
  );
};

export default Homepage;
