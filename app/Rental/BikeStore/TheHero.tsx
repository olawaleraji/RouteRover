import React from "react";
import BreadCrumbs from "../../Home/BreadCrumbs";
import BRCRMB from "../Single/BRCRMB";

type Props = {};

const TheHero = (props: Props) => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-4xl px-4 md:px-8">
        <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          <img
            src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
          <div className="relative items-center p-4 sm:max-w-xl">
            <h1 className="whitespace-nowrap mb-8 text-center text-2xl font-bold text-white md:text-5xl md:mb-12">
              Rent A Bike, Rent Your Freedom
            </h1>
          </div>
        </section>
        <div className="-mt-12">
          <BRCRMB />
        </div>
      </div>
    </div>
  );
};

export default TheHero;
