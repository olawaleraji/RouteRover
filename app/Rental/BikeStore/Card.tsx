import React from "react";
import { Button } from "@nextui-org/react";

const Card = () => {
  // Array of card details
  const cardDetails = [
    {
      title: "Ducati Panigale V4",
      image: "/bikeImage/Panigale.jpg",
      leftDetails: [
        { label: "Seats", value: "2" },
        { label: "Luggage", value: "Limited" },
        { label: "Fuel", value: "Petrol" },
        { label: "Curb Weight", value: "423 lbs (192 kg)" }, // Optional detail
      ],
      rightDetails: [
        { label: "Horsepower", value: "214" },
        { label: "Engine", value: "998cc Desmodromic V4" },
        { label: "Drive", value: "Chain" },
        { label: "Type", value: "Sportbike" },
      ],
      price: "$28,595",
    },
    {
      title: "Harley-Davidson CVO Street Glide",
      image: "/bikeImage/Harley.jpg",
      leftDetails: [
        { label: "Seats", value: "2" },
        { label: "Luggage", value: "Large" },
        { label: "Fuel", value: "Petrol" },
        { label: "Fuel Capacity", value: "6 gallons (22.7 liters)" }, // Optional detail
      ],
      rightDetails: [
        { label: "Horsepower", value: "117" }, // Update based on specific engine option
        { label: "Engine", value: "Milwaukee-Eight 117 V-Twin" }, // Update based on specific engine option
        { label: "Drive", value: "Belt" },
        { label: "Type", value: "Tourer" },
      ],
      price: "Starting at $41,190", // Price might vary depending on options
    },
    {
      title: "Kawasaki Ninja H2 SX SE",
      image: "/bikeImage/Kawasaki.jpg",
      leftDetails: [
        { label: "Seats", value: "2" },
        { label: "Luggage", value: "Large" },
        { label: "Fuel", value: "Petrol" },
        { label: "Fuel Capacity", value: "6.1 gallons (23 liters)" }, // Optional detail
      ],
      rightDetails: [
        { label: "Horsepower", value: "200 hp (147.1 kW)" }, // Update based on model year
        { label: "Engine", value: "998cc Supercharged I4" },
        { label: "Drive", value: "Chain" },
        { label: "Type", value: "Sport Touring" },
      ],
      price: "$21,800", // Price might vary depending on model year
    },
    {
      title: "Neiman Marcus Limited Edition Fighter",
      image: "/bikeImage/Neiman.jpg",
      leftDetails: [
        { label: "Seats", value: "1" },
        { label: "Luggage", value: "None" },
        { label: "Fuel", value: "Petrol" },
        { label: "Weight", value: "500 lbs (227 kg)" }, // Estimated weight
      ],
      rightDetails: [
        { label: "Horsepower", value: "200+" }, // Exact figure not publicly available
        { label: "Engine", value: "1,200cc DOHC V-Twin" },
        { label: "Drive", value: "Chain" },
        { label: "Type", value: "Cruiser" },
      ],
      price: "$11,000,000 (auctioned in 2008)",
    },
    {
      title: "1949 E90 AJS Porcupine",
      image: "/bikeImage/Porcupine.jpg",
      leftDetails: [
        { label: "Seats", value: "1" },
        { label: "Luggage", value: "Minimal" },
        { label: "Fuel", value: "Petrol" },
        { label: "Weight", value: "350 lbs (159 kg)" }, // Estimated weight
      ],
      rightDetails: [
        { label: "Horsepower", value: 55 },
        { label: "Engine", value: "500cc Single Cylinder" },
        { label: "Drive", value: "Chain" },
        { label: "Type", value: "Racer" },
      ],
      price: "$7,000,000 (auctioned in 2018)",
    },
    {
      title: "The Legendary British Black",
      image: "/bikeImage/Legendary.jpg",
      leftDetails: [
        { label: "Seats", value: "1" },
        { label: "Luggage", value: "None" },
        { label: "Fuel", value: "Petrol" },
        { label: "Weight", value: "529 lbs (240 kg)" }, // Dry weight
      ],
      rightDetails: [
        { label: "Horsepower", value: 180 },
        { label: "Engine", value: "998cc DOHC V-Twin" },
        { label: "Drive", value: "Chain" },
        { label: "Type", value: "Cafe Racer" },
        {
          label: "Note",
          value:
            "The Legendary British Black is not a production motorcycle, but a concept design by Vincent Motorcycles. It is often referred to as the 'Black Shadow' due to its black color and high-performance nature.",
        }, // Optional note for clarity
      ],
    },
    {
      title: "Vyrus 987 C3 4V",
      image: "/bikeImage/Vyrus.jpg",
      leftDetails: [
        { label: "Seats", value: "1" },
        { label: "Luggage", value: "Minimal" },
        { label: "Fuel", value: "Petrol" },
        { label: "Weight", value: "370 lbs (168 kg)" }, // Dry weight
      ],
      rightDetails: [
        { label: "Horsepower", value: 200 },
        { label: "Engine", value: "1,285cc DOHC V4" },
        { label: "Drive", value: "Chain" },
        { label: "Type", value: "Sportbike" },
      ],
      price: "$100,000+", // Price may vary
    },
    {
      title: "MTT Y2K Turbine Superbike",
      image: "/bikeImage/MTTY2K.jpg",
      leftDetails: [
        { label: "Seats", value: "1" },
        { label: "Luggage", value: "Minimal" },
        { label: "Fuel", value: "Jet Fuel" },
        { label: "Weight", value: "529 lbs (240 kg)" },
      ],
      rightDetails: [
        { label: "Horsepower", value: 320 },
        { label: "Engine", value: "Rolls-Royce Allison 250-C18 turboshaft" },
        { label: "Drive", value: "Shaft" },
        { label: "Type", value: "Concept" },
      ],
      price: "Not for sale (prototype)",
    },
    {
      title: "Suzuki Hayabusa",
      image: "/bikeImage/Suzuki.jpg",
      leftDetails: [
        { label: "Seats", value: "2" },
        { label: "Luggage", value: "Limited" },
        { label: "Fuel", value: "Petrol" },
        { label: "Curb Weight", value: "565 lbs (256 kg)" },
      ],
      rightDetails: [
        { label: "Horsepower", value: 190 }, // Update based on model year
        { label: "Engine", value: "1,340cc DOHC I4" },
        { label: "Drive", value: "Chain" },
        { label: "Type", value: "Sport Touring" },
      ],
      price: "$18,599",
    },
    {
      title: "1949 E90 AJS Porcupine",
      image: "/bikeImage/AJS.jpg",
      leftDetails: [
        { label: "Seats", value: "1" },
        { label: "Luggage", value: "Minimal" },
        { label: "Fuel", value: "Petrol" },
        { label: "Weight", value: "350 lbs (159 kg)" }, // Estimated weight
      ],
      rightDetails: [
        { label: "Horsepower", value: 55 },
        { label: "Engine", value: "500cc Single Cylinder" },
        { label: "Drive", value: "Chain" },
        { label: "Type", value: "Racer" },
      ],
      price: "$7,000,000 (auctioned in 2018)",
    },
    {
      title: "Arch KRGT-1",
      image: "/bikeImage/Arch.jpg",
      leftDetails: [
        { label: "Seats", value: "2" },
        { label: "Luggage", value: "Limited" },
        { label: "Fuel", value: "Petrol" },
        { label: "Dry Weight", value: "542 lbs (246 kg)" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "200+" },
        { label: "Engine", value: "1,243cc SOHC V-Twin" },
        { label: "Drive", value: "Belt" },
        { label: "Type", value: "Cruiser" },
      ],
      price: "$85,000",
    },
    {
      title: "Brough Superior SS100",
      image: "/bikeImage/Brough.jpg",
      leftDetails: [
        { label: "Seats", value: "1" },
        { label: "Luggage", value: "Minimal" },
        { label: "Fuel", value: "Petrol" },
        { label: "Dry Weight", value: "341 lbs (155 kg)" }, // Dry weight
      ],
      rightDetails: [
        { label: "Horsepower", value: "100 " },
        { label: "Engine", value: "997cc DOHC V-Twin" },
        { label: "Drive", value: "Chain" },
        { label: "Type", value: "Cafe Racer" },
      ],
      price: "$60,000+", // Price may vary
    },
  ];

  return (
    <div className="max-w-[92rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardDetails.map((card, index) => (
          <a
            key={index}
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full h-72 rounded-xl"
                src={card.image}
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {card.title}
              </h3>
              {card.leftDetails.map((detail, index) => (
                <div className="flex justify-between" key={index}>
                  <p className="w-1/2 text-left">
                    {detail.label}: {detail.value}
                  </p>
                  {/* Only display value on the right */}
                  {index < card.rightDetails.length && (
                    <p className="w-1/2 text-right">
                      {card.rightDetails[index].label}:{" "}
                      {card.rightDetails[index].value}
                    </p>
                  )}
                </div>
              ))}
              <div className="flex justify-between mt-4">
                <p className="w-1/2  text-left">Per Hours</p>
              </div>

              <div className="flex justify-between mt-2">
                <p className="w-1/2 text-left font-bold">{card.price}</p>
                <p className="w-1/2 text-right">
                  <Button className="bg-black text-white">Rent Bike</Button>
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-blue-500 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          Read more
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
