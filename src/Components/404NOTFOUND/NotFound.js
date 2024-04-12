import React, { Component } from 'react'
import { useState } from 'react'
import './Error.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


export default class extends Component {
  
  // This Page generates a 404 Not Found Page whenever a non-valid link is entered . if the link is not valid or
  // the page does not exist , the user will be redirected to this page
  render() {
    return (
      <div>
          <Navbar />
          <div className='error-container'>
              <div className='error-text'>
                <p>404 NOT FOUND</p>
                <br></br><br></br>
                <p>Sorry , But The Requested Page Cannot Be Found</p>
                <br></br>
                <p>Click On The Logo To Return To Home Page</p>
                {/* The Above message requests the user to click on the website logo which is located
                on the left side of the navbar to get redirected back to the home page */}
              </div>
          </div>
          <br></br>
          <Footer />
      </div>

      
    )
  }
}
