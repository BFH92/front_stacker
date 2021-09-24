import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
//styles
import "./about.scss";
//materialUI
import Typography from "@mui/material/Typography";
//Typewriter
import Typewriter from "typewriter-effect";
import { Paper, Button } from "@material-ui/core";

const About = () => {
  const container = useRef(null);

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
                  .typeString("aider : ")
                  .pauseFor(2500)
                  .start()
                  .pauseFor(200)
                  .deleteChars(8)
                  .typeString("soutenir : ")
                  .pauseFor(2500)
                  .start()
                  .pauseFor(200)
                  .deleteChars(14)
                  .typeString("faire grandir : ")
              }}
            />
          </Typography>

          <br></br>
          <br></br>
          
          <Typography variant="h2" component="h2">
            Les autres, dans leurs recherches.
          </Typography>
          <Typography variant="body1" sx={{ mt: 5, mb: 5 }}>
          Développeurs, freelance ou salariés, qui veulent coller à la réalité du marché,
          ESN ou cabinets de recrutement, qui veulent en connaître le potentiel : la recherche par Stack est un outil puissant ! 
          Une recherche combinée des entreprises selon leurs stack avec le lieu, le type d'entreprise, 
          la taille de l'équipe technique, permet de créer un paradigme novateur et efficace. Fini la chasse aux informations,
          Stacker réunit tout au même endroit.

          </Typography>
          <Typography variant="h2" component="h2">
            Les entreprises par un référencement unique.
          </Typography>
          <Typography variant="body1" sx={{ mt: 5, mb: 5 }}>
            Recherche de talents, entretien de son image employeur, les entreprises viennent présenter leur univers technique,
             leur stack, leurs bonnes pratiques, signalent leur recherche active de profils, 
             auprès d'une audience Tech qualifiée.
          </Typography>
          <Typography variant="h2" component="h2">
            Un projet  produit par tous et pour tous.
          </Typography>
          <Typography variant="body1" sx={{ mt: 5, mb: 5 }}>
          100% Open-source, 100% collectif, Stacker a l'ambition de référencer 
          toutes les entreprises du Monde selon ce paradigme, pour le bien de la communauté Tech. 
          Un service gratuit pour vous et qui le sera toujours ! 
          </Typography>
          <div className="CTA--about">
            <Button
              component={Link}
              to="/search"
              size="large"
              variant="outlined"
              style={{
                color: "white",
                borderColor: "white",
              }}
            >
              découvrir
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
