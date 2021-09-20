import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
//styles
import "./home.scss";
//materialUI
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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
          <Typography variant="h1" component="div" gutterBottom>
            Bienvenue sur
            <Typewriter
              onInit={(typewriter) => {
                
                typewriter.typeString("Stacker.io").pauseFor(2500).start();
              }}
            />
          </Typography>
          <Typography variant="h5" mt={2} ml={3} gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Button variant="outlined" color="error" size="large">
            Découvrir Stacker
          </Button>
        </div>
      </div>
      <div className="container__home--right">
        <div className="content--svg" ref={container}></div>
      </div>
      <div className="mask--color"></div>
    </div>
  );
};

export default Home;
