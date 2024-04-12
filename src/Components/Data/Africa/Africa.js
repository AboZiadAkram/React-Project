import React , {useState} from 'react'
import Container from "@mui/material/Container";
import {Grid ,Card , CardContent , Typography, CardActionArea, CardMedia, CardActions} from "@mui/material";
import Button from 'react-bootstrap/Button';
import Africa from "../Africa/Africa.json";
// This component recieves all the flags from the Africa.json file and displays them in a grid
export default function Countries() {
  const [showAfrica, setShowAfrica] = useState(true);
  // This code creates a state called showAfrica and a function called setShowAfrica to change the state
  // The state is set to true by default . When it is changed to false , the flags will not be displayed.
  // When it is set to true, the flags will be displayed

  const toggleAfrica = () => {
    setShowAfrica(!showAfrica);
  };

  // This code creates a function called toggleAfrica that changes
  // the state of showAfrica to the opposite of what it is

  return (
    // This code returns the Navbar and the flags from the Africa.json file . In addition , if the paramater showAfrica is true , the flags will be displayed
    // Otherwise , they will not be displayed
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          style={{ marginTop: "140px", color: "white" }}
        >
          African Flags
        </Typography>
        <Button onClick={toggleAfrica} variant="outline-light">{showAfrica ? "Hide African Flags" : "Show African Flags"}</Button>
        {showAfrica && (
          <Grid container spacing={4} style={{ marginTop: "20px", borderColor: "white" }}>
            {Africa.map((country, index) => (
              <Grid item xs={12} sm={3} ms={4} key={index}>
                {/* Modifying each card with this style */}
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
                      {/* The below Typography displays the flag's name */}
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
                    {/* Upon clicking on the button below , the user will be directed to another page
                     and the flag will be displayed with an influental information */}
                    <Button
                      size="small"
                      style={{ color: "white" }}
                      color='info'
                    >
                      Show Info
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        {/* Line 80 will not display any flags if the paramter showAfrica is false */}
        {!showAfrica && (
          null
        )}
      </Container>
    </>
);
}
