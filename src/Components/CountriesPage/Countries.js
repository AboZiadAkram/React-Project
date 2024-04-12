import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NorthAmerica from "../Data/NorthAmerica/NorthAmerica";
import SouthAmerica from "../Data/SouthAmerica/SouthAmerica";
import Europe from "../Data/Europe/Europe";
import Africa from "../Data/Africa/Africa";
import Asia from "../Data/Asia/Asia";
import Australia from "../Data/Australia/Australia";
import Antaractica from "../Data/Antaractica/Antaractica";

export default function Countries() {
  
  return (
    <>
      <Navbar />
      <Europe />
      <Africa />
      <Asia />
      <NorthAmerica />
      <SouthAmerica />
      <Australia />
      <Antaractica /> 
      <Footer />
    </>
  );
}

