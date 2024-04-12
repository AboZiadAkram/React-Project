import React, { useState } from "react";
import Container from "@mui/material/Container";
import {Grid , Card , CardContent , Typography , CardActionArea , CardMedia , CardActions } from "@mui/material";
import Button from 'react-bootstrap/Button';
import Australia from "../Australia/Australia.json";
// This component recieves all the flags from the Africa.json file and displays them in a grid

export default function Countries() {
  const [showAmerica, setShowAmerica] = useState(true);

  const toggleAmerica = () => {
    setShowAmerica(!showAmerica);
  };

  return (
    <>
      {/* The container below stacks all the flags and each flag is stored in a card of its own */}
      {/* Basically this component , Africa and Europe share the same purpose of displaying the flags 
      that are stored in JSON file respectively */}
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          style={{ marginTop: "140px", color: "white" }}
        >
          Australian Flags
        </Typography>
        <Button
          onClick={toggleAmerica}
          variant="outline-light"
        >
          {showAmerica ? "Hide Australian Flags" : "Show Australian Flags"}
        </Button>
        {showAmerica && (
          <Grid
            container
            spacing={4}
            style={{ marginTop: "20px", borderColor: "white" }}
          >
            {Australia.map((country, index) => (
              <Grid item xs={12} sm={3} ms={4} key={index}>
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
                      image={country.image}
                      alt="flag"
                      style={{ borderRadius: "0px", borderColor: "white" }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ color: "white", textAlign: "center" }}
                      >
                        {country.countryName}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      color="info"
                      size="small"
                      style={{ color: "white" }}
                    >
                      Show Info
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        {!showAmerica && null}
      </Container>
    </>
  );
}
