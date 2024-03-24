import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Grid , Button , Card , CardContent , Typography , CardActionArea , CardMedia , CardActions} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Data from "../Data/Data.json";

export default function Countries() {
  const [showCountries, setShowCountries] = useState(true);

  const toggleCountries = () => {
    setShowCountries(!showCountries);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          style={{ marginTop: "140px", color: "white" }}
        >
          All Available Flags
        </Typography>
        <Button
          onClick={toggleCountries}
          style={{ color: "white", backgroundColor: "black" }}
        >
          {showCountries ? "Hide The Flags" : "Show The Flags"}
        </Button>
        {showCountries && (
          <Grid
            container
            spacing={4}
            style={{ marginTop: "20px", borderColor: "white" }}
          >
            {Data.map((country, index) => (
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
                        variant="h4"
                        component="div"
                        style={{ color: "white", textAlign: "center" }}
                      >
                        {country.countryName}
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
              </Grid>
            ))}
          </Grid>
        )}
        {!showCountries && null}
      </Container>
    </>
  );
}
