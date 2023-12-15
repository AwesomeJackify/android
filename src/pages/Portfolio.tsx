import React from "react";
import portfolioImg from "../assets/portfolioFeed.png";
import instagramImg from "../assets/instagram.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const timeline1 = gsap.timeline({
    paused: true,
    onComplete: () => navigate("/"),
  });

  useGSAP(() => {
    timeline1.to(".box1", {
      width: "13rem",
      height: "13rem",
      ease: "expo.inOut",
      duration: 0.5,
    });
    timeline1.to(
      "#portfolioFeed",
      {
        display: "none",
        duration: 0,
      },
      "<.3"
    );
    timeline1.to(
      "#instagram",
      {
        display: "block",
        duration: 0,
      },
      "<"
    );
  });

  const closePortfolio = () => {
    if (timeline1.progress() === 0) {
      timeline1.play();
    } else {
      timeline1.restart();
    }
  };

  return (
    <div className="h-screen flex w-screen relative items-end justify-center">
      <div
        className="w-10 h-10 bg-red-500 absolute top-0 right-0 z-10"
        onClick={() => closePortfolio()}
      ></div>
      <div className="w-full h-full box1 relative">
        <img
          src={instagramImg}
          id="instagram"
          alt="instagram icon"
          className="absolute w-full h-full cursor-pointer object-cover hidden"
        />
        <img
          src={portfolioImg}
          id="portfolioFeed"
          alt="portfolio feed"
          className="absolute w-full h-full cursor-pointer object-cover -z-10"
        />
      </div>
    </div>
  );
};

export default Portfolio;
