import React , {useState} from 'react'
import Container from "@mui/material/Container";
import {Grid , Button ,Card , CardContent , Typography, CardActionArea, CardMedia, CardActions} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Europe from "../Data/Europe.json"

export default function Countries() {
  const [showEurope, setShowEurope] = useState(true);

  const toggleEurope = () => {
    setShowEurope(!showEurope);
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
          European Flags
        </Typography>
        <Button onClick={toggleEurope} style={{ color: "white", backgroundColor: "black" }} >{showEurope ? "Hide European Flags" : "Show European Flags"}</Button>
        {showEurope && (
          <Grid container spacing={4} style={{ marginTop: "20px", borderColor: "white" }}>
            {Europe.map((country, index) => (
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
        {!showEurope && (
          null
        )}
      </Container>
    </>
);
}
