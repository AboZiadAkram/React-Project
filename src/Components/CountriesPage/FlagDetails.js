import React from "react";
import { Container, Typography } from "@mui/material";

// This component is created to recieve the country object
// and display the flag image and the country name in the center of the page

export default function FlagDetails({ country }) {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
        {country.countryName}
      </Typography>
      <img src={country.image} alt={country.countryName} style={{ display: "block", margin: "auto", marginTop: "20px", maxWidth: "100%" }} />
    </Container>
  );
}