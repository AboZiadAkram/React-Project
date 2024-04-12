import "./Navbarstyle.css";
import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';


export default class extends Component {
  render() {
    return (
        <div>
          {/* The following Navbar contains a : 
          1: The website's logo which is a text . by clicking on it , the user will be directed to the HomePage.
          This logo will be available in every page of the website */}
            <Navbar bg="dark" data-bs-theme="dark" fixed="light">
                <h3 className="navbar-logo"><a href="/">Flags Universe</a></h3>
                <ul className="navbar-menu">
                  {/* The HomePage */}
                    <li className="nav-link"><a href="/" className="navbar-links">Home</a></li>
                    {/* The AboutPage where the creator of this website explains the reason for choosing this topic*/}
                    <li className="nav-link"><a href="/about" className="navbar-links">About</a></li>
                    {/* The CountriesPage where all the flags are displayed and filtered by the continent*/}
                    <li className="nav-link"><a href="/countries" className="navbar-links">Countries</a></li>
                    {/* The AddFlagPage where the user can add a flag to the website*/}
                    <li className="nav-link"><a href="/addflag" className="navbar-links">AddFlag</a></li>
                </ul>
            </Navbar>
        </div>
      
    )
  }
}
