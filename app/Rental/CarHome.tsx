import React from "react";
import TheHero from "./CarStore/TheHero";
import Card from "./CarStore/Card";
import Footer from "../Home/Footer";
import Product from "./Product";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <TheHero />
      <Card />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
