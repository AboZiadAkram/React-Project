import React from "react";
import Footer from "../Footer/Footer";
import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";
// import "./Addflag.css";
import Form from "react-bootstrap/Form";
import {Grid , Button , Card , CardContent , Typography , CardActionArea , CardMedia , CardActions } from "@mui/material";
import { useState } from "react";

export default function Addflag() {
  const [flag_arr , setFlag_arr] = useState([]);
  const [code, setCode] = useState("");
  const [display , setDisplay] = useState("");
  const [size, setSize] = useState("");


  // https://flagsapi.com/BR/shiny/64.png
  const flagAdd = async () => {
    setFlag_arr([ ...flag_arr , { image: `https://flagsapi.com/${code}/${display}/${size}.png`}]);
  }

  return (
    <>
      <Navbar />
      <Background />
      {/* This code gets the values from all the input fields and creates a new flag and add it to the addFlag array*/}
      <div className="about-container" style={{borderWidth: "3px"}}>
        <div className="about-text" >
          <h2>Add A Flag Here</h2>
          <div className="form-container">
          <Form >
      <Form.Group className="mb-3">
        <Form.Label>Country Code</Form.Label>
        <Form.Control type="text" required onChange={event => setCode(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Display</Form.Label>
        <Form.Control type="text" required onChange={event => setDisplay(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Flag Size</Form.Label>
        <Form.Control type="text" required onChange={event => setSize(event.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={flagAdd}>
        Submit
      </Button>
    </Form>
          </div>
        </div>
      </div>
      {/* This code maps through the addFlag array and displays all the flags that are stored in the array */}
      {flag_arr.map((flag, index) => (
        <Card
        sx={{ maxWidth: 190 }}
        style={{
          padding: "10px",
          marginBottom: "20px",
          background: "none",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={flag.image}
            alt="flag"
            style={{ borderRadius: "0px", borderColor: "white" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              style={{ color: "white", textAlign: "center" }}
            >
              {flag.countryName}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            style={{ color: "white" }}
          >
            Show Info
          </Button>
        </CardActions>
      </Card>
      ))}
      <Footer />
    </>
  );
}
