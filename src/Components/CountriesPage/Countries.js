import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import America from "../Data/America";
import Europe from "../Data/Europe";
import Africa from "../Data/Africa";
import CountryInfo from "./CountryInfo";
export default function Countries() {
  
  return (
    <>
      <Navbar />
      <America />
      <Europe />
      <Africa />
      <CountryInfo />
      <Footer />
    </>
  );
}

