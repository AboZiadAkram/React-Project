import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import "./Aboutstyle.css";
import Footer from '../Footer/Footer';

export default class About extends Component {
  render() {
    return (
    <div>
      <Navbar /> 
      <div className='about-container'>
        <div className='about-text'>
          {/* Introducing myself */}
            <h2>I'm a 25 Years Old Student At Ariel University</h2>
            <br></br>
            <h4>Why Did I Choose The Flags Topic?</h4>
            <br></br>
            {/* The reason for choosing this topic */}
            <p>I've always been fond of Flags And curiousity always hits me when I see an unfamiliar flag that I haven't seen before.
                I've also wanted to know the meaning behind the colors, the symbols, and the history of the flag.
                So I decided to make a website that would help me and others to learn about flags and their meanings.
            </p>
        </div>
      </div>
      <Footer />
    </div>
    )
  }
}
