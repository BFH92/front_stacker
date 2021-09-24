import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
//styles
import "./about.scss";
import Aos from "aos";
import "aos/dist/aos.css";
//materialUI
import Typography from "@mui/material/Typography";
//Typewriter
import Typewriter from "typewriter-effect";
import { Paper, Button } from "@material-ui/core";

const About = () => {
  const container = useRef(null);

  useEffect(() => {
    Aos.init({});
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../Assets/Svg/Animation/stacker2.json"),
    });
  }, []);

  return (
    <div className="container__about">
      <div className="container__about--left">
        <div className="content--text--about">
          <Typography variant="h1" component="h1">
            Stacker c'est
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("répérer")
                  .pauseFor(2500)
                  .start()
                  .pauseFor(200)
                  .deleteChars(7)
                  .typeString("découvrir")
                  .pauseFor(2500)
                  .start()
                  .pauseFor(200)
                  .deleteChars(9)
                  .typeString("trouver");
              }}
            />
          </Typography>
          <Typography variant="body1" sx={{ mt: 5, mb: 5 }}>
            Stacker.io offre de naviguer des entreprises par leur Stack pour les
            devlopeurs freelance ou en recherche d'emploi. <br />
            En tant que devs en fin de formation, nous voulions rendre plus
            souple et transparent le processus pour chacun de trouver sa niche
            selon son expertise.
          </Typography>
          <Typography variant="h2" component="h2">
            Pour Devs
          </Typography>
          <Typography variant="body1" sx={{ mt: 5, mb: 5 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="h2" component="h2">
            Pour Entreprise
          </Typography>
          <Typography variant="body1" sx={{ mt: 5, mb: 5 }}>
            Référencez-vous sur Stacker.io et faîtes découvrir vos atouts auprès
            de nos milliers de développeurs.
          </Typography>
          <div className="CTA--about">
            <Button
              component={Link}
              to="/search/company"
              size="large"
              variant="outlined"
              style={{
                color: "white",
                borderColor: "white",
              }}
            >
              découvrir stacker.io
            </Button>
          </div>
        </div>
      </div>
      <div className="container__aboutsvg--right">
        <Paper elevation={10} className="mask--color--about"></Paper>
        <div className="content--svg--about" ref={container}></div>
      </div>
    </div>
  );
};

export default About;
