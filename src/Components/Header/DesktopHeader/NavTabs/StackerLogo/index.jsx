import React from "react";
import StackerLogoWhite from "../../../../../Assets/Svg/StackerLogo/StackerLogoWhite";
import { Link } from "react-router-dom";

const StackerLogo = () => {

  return (
    <Link to='/'>
      <StackerLogoWhite />
    </Link>
  );
};

export default StackerLogo;
