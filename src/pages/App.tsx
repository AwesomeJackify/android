import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import instagramImg from "../assets/instagram.png";
import portfolioFeed from "../assets/portfolioFeed.png";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const timeline1 = gsap.timeline({
    paused: true,
    onComplete: () => navigate("/portfolio"),
  });
  const timeline2 = gsap.timeline({ paused: true });

  useGSAP(() => {
    timeline1.to(".box1", {
      width: "100%",
      height: "100%",
      ease: "expo.inOut",
      duration: 0.5,
    });
    timeline1.to(
      "#instagram",
      {
        display: "none",
        duration: 0,
      },
      "<"
    );
    timeline1.to(
      "#portfolioFeed",
      {
        display: "block",
        duration: 0,
      },
      "<"
    );
  });

  const openPortfolio = () => {
    if (timeline1.progress() === 0) {
      timeline1.play();
    } else {
      timeline1.restart();
    }
  };

  return (
    <div className="h-screen flex w-screen relative items-end justify-center">
      <div className="w-52 h-52 box1 relative">
        <img
          src={instagramImg}
          id="instagram"
          alt="instagram icon"
          className="absolute w-full h-full cursor-pointer object-cover"
          onClick={() => openPortfolio()}
        />
        <img
          src={portfolioFeed}
          id="portfolioFeed"
          alt="portfolio feed"
          className="absolute w-full h-full cursor-pointer object-cover -z-10 hidden"
        />
      </div>
    </div>
  );
}

export default App;
