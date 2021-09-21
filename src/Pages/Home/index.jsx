import React, { useEffect, useRef } from "react";
import lottie from 'lottie-web';
//styles
import "./home.scss";
//materialUI
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
//Typewriter
import Typewriter from "typewriter-effect";
import { Paper } from "@material-ui/core";

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
          <Typography variant="body1" sx={{ mt: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Button variant="outlined" color="inherit" size="large" sx={{ mt: 5 }}>
            Découvrir Stacker
          </Button>
        </div>
      </div>
      <div className="container__home--right">
        <Paper elevation={10} className="mask--color"></Paper>
        <div className="content--svg" ref={container}></div>
      </div>
      <div className="container__infos--bottom">        
        <Link href="https://github.com/BFH92/front_stacker" target="_blank" underline="none">GitHub Frontend</Link>
        <Link href="https://github.com/BFH92/back_stacker" target="_blank" underline="none">GitHub Backend</Link>
      </div>
    </div>
  );
};

export default Home;
