import React from "react";
import Background from "../Background/Background";
import NavBar from "../Navbar/Navbar";
import "./Home.css";
import Footer from "../Footer/Footer";
import HomeData from "../Data/HomeData.json";
import { useState } from "react";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <NavBar />
      {/* Credits to the person who made the website */}
      <h2 className="creator">This Website Was Made By Akram Abo Zaid</h2>
      {/* The Home container and text are made to place all the texts , card components in the cneter
      of the HomePage  */}
      <div className="home-container">
        <div className="home-text">
          <input
          // This code creates a search bar that filters the flags based on the country name
            type="text"
            placeholder="  search..."
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          {/* whenever a letter is inserted in the search bar , all the flags that contains that letter
          , ignoring the cases , are displayed . a set of letters that is not contained in any flag ; 
          that flag will not be displayed */}
          {HomeData.filter((value) => {
            if (searchTerm === "") {
              return value;
            } else if (
              value.countryName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
            // By Default , all the flags are displayed
          }).map((value, key) => {
            return (
              <div className="flag-border">
                <div className="flag">
                  <img src={value.image}></img>
                  <p className="flag-text">{value.countryName}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* An Example Of a flag that is displayed with its information */}
      <h2 className="example-flag">An Example Of A Flag</h2>
      <div className="flag-border">
        <p className="flag-name">GREECE</p>
        <div className="flag">
          <img src="https://flagsapi.com/GR/shiny/64.png"></img>
          <p className="flag-text">
            Greece is a country in southeastern Europe with thousands of islands
            throughout the Aegean and Ionian seas. Influential in ancient times,
            it's often called the cradle of Western civilization. Athens, its
            capital, retains landmarks including the 5th-century B.C. Acropolis
            citadel with the Parthenon temple. Greece is also known for its
            beaches, from the black sands of Santorini to the party resorts of
            Mykonos.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
