import React from "react";
import TheHero from "./CarStore/TheHero";
import Card from "./BikeStore/Card";
import Footer from "../Home/Footer";
import Product from "./Product";

type Props = {};

const BikeHome = (props: Props) => {
  return (
    <div>
      <TheHero />
      {/* <Product /> */}
      <Card />
      <Footer />
    </div>
  );
};

export default BikeHome;
