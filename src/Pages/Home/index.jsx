import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import lottie from "lottie-web";
//styles
import "./home.scss";
//materialUI
import Typography from "@mui/material/Typography";
import { Paper, Button } from "@material-ui/core";
//Typewriter
import Typewriter from "typewriter-effect";

const Home = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../Assets/Svg/Animation/stacker1.json"),
    });
  }, []);

  return (
    <div className="container__home">
      <div className="container__home--left">
        <div className="content--text">
          <Typography variant="h1" component="h1">
            Bienvenue sur
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Stacker.io").pauseFor(2500).start();
              }}
            />
          </Typography>
          <Typography variant="body1" sx={{ mt: 3, mb: 5 }}>
            Le site qui référence les entreprises selon leurs stacks techniques.
          </Typography>
          <Button
            component={Link}
            to="/search"
            size="large"
            variant="outlined"
            style={{
              color: "white",
              borderColor: "white"
            }}
          >
            découvrir
          </Button>
        </div>
      </div>
      <div className="container__home--right">
        <Paper elevation={10} className="mask--color"></Paper>
        <div className="content--svg" ref={container}></div>
      </div>
    </div>
  );
};

export default Home;
