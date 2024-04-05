import React from "react";

const Home = () => {
  return (
    <div>
      <header className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-5xl">
                  Unlock Endless Driving With RouteRover
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Embark on a journey of discovery and convenience with Route
                  Rover, your reliable navigator for exploring new horizons,
                  experiencing unforgettable adventures, and making every mile
                  memorable.
                </p>

                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                  <a
                    href="#"
                    className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
                  >
                    Rent Car
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
                  >
                    Rent Bike
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src="https://media.istockphoto.com/id/1150425295/photo/3d-illustration-of-generic-hatchback-car-perspective-view.webp?b=1&s=170667a&w=0&k=20&c=QKVzqIOrSi8pYPDM90tUOpECoLcfbe8GVIkJDBI7cb8="
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;