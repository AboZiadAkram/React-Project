import React, { Component } from 'react'
import "./Footerstyle.css";
import github from './github-logo-24.png';
import linkedin from './linkedin-logo-24.png';

// The Footer component is created to display the footer of the website .
// and it is Added to each page of the website.

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='footer-div'>
          <br></br>
          {/* All Rights Reserved */}
            <p className='rights'>@ {"2024Flags Universe . All Rights Reserved."}</p>
            <br></br>
            {/* The icons in the footer . The icons images are located in the Footer Folder*/}
            <div className='footer-icons'>
                <a href="https://github.com/AboZiadAkram" target='_blank'><img src={github} alt="" /></a>
                <a href="https://www.linkedin.com/in/storm-knight-9073942bb/" target='_blank'><img src={linkedin} alt="" /></a>
            </div>
            
        </footer>
      </div>
    )
  }
}
