import React from "react";
import { Button } from "@nextui-org/react";

const Card = () => {
  // Array of card details
  const cardDetails = [
    {
      title: "Lamborghini Aventador",
      image: "/carsImage/lambo.jpg",
      leftDetails: [
        { label: "Seats", value: "2" },
        { label: "Luggage", value: "Limited" },
        { label: "Doors", value: "Scissor Doors" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "700" },
        { label: "Engine", value: "6.5L V12" },
        { label: "Drive", value: "AWD" },
        { label: "Type", value: "Coupe" },
      ],
      price: "$500,000",
    },
    {
      title: "Ferrari 488 GTB",
      image: "/carsImage/ferrari.jpg",
      leftDetails: [
        { label: "Seats", value: "2" },
        { label: "Luggage", value: "1" },
        { label: "Doors", value: "2" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "660" },
        { label: "Engine", value: "3.9L V8" },
        { label: "Drive", value: "RWD" },
        { label: "Type", value: "Coupe" },
      ],
      price: "$300,000",
    },
    {
      title: "Tesla Cybertruck",
      image: "/carsImage/teslatruck.jpg",
      leftDetails: [
        { label: "Seats", value: "5" }, // Update if needed for a different trim
        { label: "Storage", value: "6.5 ft bed" }, // Specify storage type (bed or total)
        { label: "Doors", value: "4" },
        { label: "Fuel", value: "Electric" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "600" }, // Update if needed for a different trim
        { label: "Battery", value: "217 kWh" }, // Update based on Cybertruck model
        { label: "Drive", value: "AWD" },
        { label: "Type", value: "Truck" },
      ],
      price: "$70,000", // Base price might change depending on availability
    },
    {
      title: "Jeep Renegade",
      image:
        "https://media.gettyimages.com/id/512689454/photo/jeep-renegade-crossover-suv.jpg?s=612x612&w=0&k=20&c=qxiykapMZTzcRtkIiZ2VJOGe51ypWJ-adWCwfumRxco=",
      leftDetails: [
        { label: "Seats", value: "5" },
        { label: "Luggage", value: "15.1 cu ft" }, // Update unit if preferred
        { label: "Doors", value: "4" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "Up to 180" }, // Specify range
        { label: "Engine", value: "Varies (typically 2.0L or 1.3L I4 Turbo)" },
        { label: "Drive", value: "FWD or AWD" },
        { label: "Type", value: "Subcompact SUV" },
      ],
      price: "Starting at $27,000", // Base price might change depending on availability
    },
    {
      title: "Tesla Semi",
      image: "/carsImage/teslasemi.jpg",
      leftDetails: [
        { label: "Seats", value: "2" },
        { label: "Cargo Capacity", value: "Varies depending on configuration" }, // Update if you find estimates
        { label: "Doors", value: "1 (center)" },
        { label: "Fuel", value: "Electric" },
      ],
      rightDetails: [
        {
          label: "Horsepower",
          value: "Powerful electric motors (estimated over 1000 hp)",
        }, // Update based on available info
        {
          label: "Battery",
          value: "Large battery pack (estimated range of 300 or 500 miles)",
        }, // Update based on available info
        { label: "Drive", value: "RWD (likely)" },
        { label: "Type", value: "Truck" },
      ],
      price: "Contact for Price",
    },
    {
      title: "McLaren P1",
      image: "/carsImage/Mclarenp1.jpg",
      leftDetails: [
        { label: "Seats", value: "2" },
        { label: "Luggage", value: "Limited" }, // Update if you find a specific value
        { label: "Doors", value: "2" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "903" },
        { label: "Engine", value: "3.8L V8 Hybrid" },
        { label: "Drive", value: "RWD (AWD in P1 GTR)" }, // Update if needed
        { label: "Type", value: "Coupe" },
      ],
      price: "$1,350,000",
    },
    {
      title: "Bugatti Chiron",
      image: "/carsImage/bugattichiron.jpg",
      leftDetails: [
        { label: "Seats", value: "2" },
        { label: "Luggage", value: "Limited" }, // Update if you find a specific value
        { label: "Doors", value: "2" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "1479" }, // Update if needed
        { label: "Engine", value: "8.0L Quad-Turbo W16" },
        { label: "Drive", value: "AWD" },
        { label: "Type", value: "Coupe" },
      ],
      price: "$3,000,000",
    },
    {
      title: "Pagani Huayra",
      image: "/carsImage/pagani.jpg",
      leftDetails: [
        { label: "Seats", value: "2" },
        { label: "Luggage", value: "Limited" }, // Update if you find a specific value
        { label: "Doors", value: "2" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "720" }, // Update if needed for a specific variant
        { label: "Engine", value: "6.0L Twin-Turbo V12" },
        { label: "Drive", value: "RWD" },
        { label: "Type", value: "Coupe" },
      ],
      price: "$3,400,000",
    },
    {
      title: "Koenigsegg Jesko",
      image: "/carsImage/jesko.jpg",
      leftDetails: [
        { label: "Seats", value: "2" },
        { label: "Luggage", value: "2" },
        { label: "Doors", value: "2" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "1280 (1600 on E85)" },
        { label: "Engine", value: "5.0L Twin-Turbo V8" },
        { label: "Drive", value: "RWD" }, // Update to AWD if referring to Jesko Attack
        { label: "Type", value: "Coupe" },
      ],
      price: "$2,800,000",
    },
    {
      title: "McLaren Speedtail",
      image: "/carsImage/MclarenSpeedtail.jpg",
      leftDetails: [
        { label: "Seats", value: "3" },
        { label: "Luggage", value: "Limited" }, // Update if you find a specific value
        { label: "Doors", value: "2" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "1070" },
        { label: "Engine", value: "4.0L Twin-Turbo V8 Hybrid" },
        { label: "Drive", value: "RWD" },
        { label: "Type", value: "Coupe" },
      ],
      price: "$2,250,000",
    },
    {
      title: "Aston Martin Valkyrie",
      image: "/carsImage/Aston2.jpg",
      leftDetails: [
        { label: "Seats", value: "2" },
        { label: "Luggage", value: "1" },
        { label: "Doors", value: "2" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "1160 (combined)" }, // Update value based on preference
        { label: "Engine", value: "6.5L V12 Hybrid" },
        { label: "Drive", value: "RWD" },
        { label: "Type", value: "Coupe" },
      ],
      price: "$3,250,000",
      note: "V12 engine alone produces 1001 horsepower.", // Optional note
    },
    {
      title: "Bugatti Divo",
      image: "/carsImage/BuggatiDivo.jpg",
      leftDetails: [
        { label: "Seats", value: "2" },
        { label: "Luggage", value: "1" },
        { label: "Doors", value: "2" },
        { label: "Fuel", value: "Petrol" },
      ],
      rightDetails: [
        { label: "Horsepower", value: "1479" }, // Updated for consistency with Chiron
        { label: "Engine", value: "8.0L Quad-Turbo W16" },
        { label: "Drive", value: "AWD" },
        { label: "Type", value: "Coupe" },
      ],
      price: "Starting at $5,800,000", // Price format remains the same
    },
    // Add more card details as needed
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
                  <Button className="bg-black text-white">Button</Button>
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
