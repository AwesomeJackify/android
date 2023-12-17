import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import instagramImg from "../assets/instagram.png";
import portfolioFeed from "../assets/portfolioFeed.png";
import { useNavigate } from "react-router-dom";
import Phone from "../Layout/Phone";

function App() {
  console.log("app loaded");
  const navigate = useNavigate();

  useEffect(() => {
    intro(); //When phone goes onto home page
  }, []);

  const portfolioTimeline = gsap.timeline({
    paused: true,
    onComplete: () => navigate("/portfolio"),
  });

  function intro() {
    console.log("intro");
    const tl = gsap.timeline();
    tl.to("#phone", { opacity: 0.8, duration: 0.4 });
    tl.to("#phone", { opacity: 1, duration: 1, ease: "elastic" });
    tl.play();
  }

  useGSAP(() => {
    portfolioTimeline
      .to("#instagramBox", {
        width: "1rem",
        height: "1rem",
        ease: "expo.inOut",
        duration: 1,
        autoAlpha: 0,
      })
      .to(
        "#instagram",
        {
          display: "none",
          duration: 0.5,
          ease: "expo.inOut",
          delay: 0.5,
        },
        "<"
      )
      .to(
        "#portfolioFeed",
        {
          display: "block",
          duration: 0,
        },
        "<"
      );
  });

  const openPortfolio = () => {
    if (portfolioTimeline.progress() === 0) {
      portfolioTimeline.play();
    } else {
      portfolioTimeline.restart();
    }
  };

  return (
    <Phone>
      <div
        id="instagramBox"
        className="  w-52 max-md:w-20 max-md:h-20 h-52 cursor-pointer"
      >
        <img
          src={instagramImg}
          id="instagram"
          alt="instagram icon"
          className="h-full w-full object-cover"
          onClick={() => openPortfolio()}
        />
        <img
          src={instagramImg}
          id="instagram"
          alt="instagram icon"
          className="h-full w-full object-cover"
          onClick={() => openPortfolio()}
        />
        <img
          src={instagramImg}
          id="instagram"
          alt="instagram icon"
          className="h-full w-full object-cover"
          onClick={() => openPortfolio()}
        />
      </div>
    </Phone>
  );
}

export default App;
