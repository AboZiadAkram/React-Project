import React from "react";
import Footer from "../Footer/Footer";
import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";
import "./Addflag.css";
import { useState } from "react";

const addFlag = [];

export default function Addflag() {
  const [code, setCode] = useState("BG");
  const [size, setSize] = useState("64");

  return (
    <>
      <Navbar />
      <Background />
      {/* This code gets the values from all the input fields and creates a new flag and add it to the addFlag array*/}
      <div className="about-container">
        <div className="about-text">
          <h2>Add A Flag Here</h2>
          <div className="form-container">
            <form>
              <label>Country Code: </label>
              <input
                type="text"
                name="countryCode"
                placeholder="BD"
                required
                onChange={event => setCode(event.target.value)}
                // This code gets the value from the input field and sets it to the code state
              />
              <label>Flag Size: </label>
              <input type="text" name="flagSize" placeholder="16" required onChange={event => setSize(event.target.value)}/>
              {/* This code gets the value from the input field and sets it to the size state */}
              <button className="form-button">Add Flag</button>
              {/* This code creates a button that when clicked, it creates a new flag and adds it to the addFlag array */}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
