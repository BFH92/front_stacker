import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import './notfound.scss'
export const NotFoundPage = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../Assets/Svg/Animation/notfound.json"),
    });
  }, []);

  return (
    <div className="container__notfound">
      <div
        className="content--svg"
        ref={container}
      >
      </div>
    </div>
  );
};
