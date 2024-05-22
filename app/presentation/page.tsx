"use client";
import React, { useState } from "react";
import Layout from "../../components/Common/Layout";
// Components for different sections
import Presentation from "../../components/Presentation/Presentation";
import Cheatsheets from "../../components/Presentation/Cheatsheets";
import Installations from "../../components/Presentation/Installations";
import Miscellaneous from "../../components/Presentation/Miscellaneous";
import Software from "../../components/Presentation/Software";
import Books from "../../components/Presentation/Books";
type ComponentType =
  | "presentation"
  | "cheatsheets"
  | "installation"
  | "miscellaneous"
  | "books"
  | "software";
export default function Recordings() {
  // State to manage active component
  const [activeComponent, setActiveComponent] =
    useState<ComponentType>("presentation"); // Specify the type of activeComponent

  // Function to set active component
  const handleButtonClick = (component: ComponentType) => {
    setActiveComponent(component);
  };

  // Render component based on activeComponent state
  const renderComponent = () => {
    switch (activeComponent) {
      case "presentation":
        return <Presentation />;
      case "cheatsheets":
        return <Cheatsheets />;
      case "books":
        return <Books />;
      case "software":
        return <Software />;
      case "installation":
        return <Installations />;
      case "miscellaneous":
        return <Miscellaneous />;
      default:
        return null;
    }
  };

  return (
    <div className=" ">
      {/* Main content */}
      <main className=" mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {/* Navbar */}
        <nav className="mt-24 flex items-center justify-between ">
          <h1 className="text-4xl font-bold">
            Course Material
            <span className="text-2xl font-light"> (PDF)</span>
          </h1>
          <Layout currentPage="Presentation"/>
        </nav>

        <section className="mb-8   flex justify-between">
          {/* Left side */}
          <div className="mt-10  flex h-1/2">
            <div className="flex flex-col ">
              <button
                className={`mb-1 w-36 rounded-md   dark:text-white   bg-blue-500 px-4 py-2 text-white   hover:bg-blue-600 ${
                  activeComponent === "presentation" ? " bg-blue-500" : ""
                }`}
                onClick={() => handleButtonClick("presentation")}
              >
                Presentation
              </button>
              <button
                className={`mb-1 rounded-md  dark:text-white   bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 ${
                  activeComponent === "cheatsheets" ? " bg-blue-500" : ""
                }`}
                onClick={() => handleButtonClick("cheatsheets")}
              >
                Cheatsheets
              </button>
              <button
                className={`mb-1 rounded-md  dark:text-white  bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 ${
                  activeComponent === "software" ? " bg-blue-500" : ""
                }`}
                onClick={() => handleButtonClick("software")}
              >
                Software
              </button>

              <button
                className={`mb-1 rounded-md  dark:text-white  bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 ${
                  activeComponent === "installation" ? " bg-blue-500" : ""
                }`}
                onClick={() => handleButtonClick("installation")}
              >
                Installation
              </button>
              <button
                className={`mb-1 rounded-md  dark:text-white  bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 ${
                  activeComponent === "books" ? " bg-blue-500" : ""
                }`}
                onClick={() => handleButtonClick("books")}
              >
                Books
              </button>
              <button
                className={`mb-1 rounded-md  dark:text-white  bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 ${
                  activeComponent === "miscellaneous" ? "bg-blue-500" : ""
                }`}
                onClick={() => handleButtonClick("miscellaneous")}
              >
                Miscellaneous
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="ml-20  flex-grow ">{renderComponent()}</div>
        </section>
      </main>
    </div>
  );
}
