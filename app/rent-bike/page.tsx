"use client";
import React, { useState } from "react";
import Home from "../Rental/BikeHome";
import Bikes from "../Bike";
import Contact from "../Contact";
import Share from "../Sh";
import Link from "next/link";
import Cars from "../Cars";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    // Close the menu when a page is selected
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="relative bg-white dark:bg-gray-900">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="flex-none italic text-xl font-semibold">
                RouteRover
              </h1>
            </Link>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {!isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center md:justify-between`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <a
                className={`my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 ${
                  currentPage === "Home"
                    ? "hover:text-blue-500 dark:hover:text-blue-400"
                    : "hover:text-gray-600 dark:hover:text-gray-300"
                } md:mx-4 md:my-0`}
                href="#"
                onClick={() => navigateTo("Home")}
              >
                Home
              </a>
              <a
                className={`my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 ${
                  currentPage === "Cars"
                    ? "hover:text-blue-500 dark:hover:text-blue-400"
                    : "hover:text-gray-600 dark:hover:text-gray-300"
                } md:mx-4 md:my-0`}
                href="#"
                onClick={() => navigateTo("Cars")}
              >
                Cars
              </a>
              <a
                className={`my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 ${
                  currentPage === "Bikes"
                    ? "hover:text-blue-500 dark:hover:text-blue-400"
                    : "hover:text-gray-600 dark:hover:text-gray-300"
                } md:mx-4 md:my-0`}
                href="#"
                onClick={() => navigateTo("Bikes")}
              >
                Bikes
              </a>
              <a
                className={`my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 ${
                  currentPage === "Share"
                    ? "hover:text-blue-500 dark:hover:text-blue-400"
                    : "hover:text-gray-600 dark:hover:text-gray-300"
                } md:mx-4 md:my-0`}
                href="#"
                onClick={() => navigateTo("Share")}
              >
                Share
              </a>
              <a
                className={`my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 ${
                  currentPage === "Contact"
                    ? "hover:text-blue-500 dark:hover:text-blue-400"
                    : "hover:text-gray-600 dark:hover:text-gray-300"
                } md:mx-4 md:my-0`}
                href="#"
                onClick={() => navigateTo("Contact")}
              >
                Contact
              </a>
            </div>
            <div className="flex flex-col mt-6 lg:mt-2 space-y-3 lg:space-y-0 lg:flex-row">
              <a
                href="#"
                className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
              >
                Sign In
              </a>
              <a
                href="#"
                className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Render content based on currentPage state */}
      {currentPage === "Home" && <Home />}
      {currentPage === "Cars" && <Cars />}
      {currentPage === "Bikes" && <Bikes />}
      {currentPage === "Contact" && <Contact />}
      {currentPage === "Share" && <Share />}
    </div>
  );
};

export default Navbar;
