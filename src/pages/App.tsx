import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import instagramImg from "../assets/instagram.png";
import portfolioFeed from "../assets/portfolioFeed.png";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const portfolioTimeline = gsap.timeline({
    paused: true,
    onComplete: () => navigate("/portfolio"),
  });

  const portfolioTimeline2 = gsap.timeline({
    paused: true,
    onComplete: () => navigate("/portfolio"),
  });

  const portfolioTimeline3 = gsap.timeline({
    paused: true,
    onComplete: () => navigate("/portfolio"),
  });

  useGSAP(() => {
    portfolioTimeline
      .to("#instagramBox", {
        width: "100%",
        height: "100%",
        ease: "expo.inOut",
        duration: 0.3,
      })
      .to(
        "#instagram",
        {
          display: "none",
          duration: 0,
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

    portfolioTimeline2
      .to("#instagramBox2", {
        width: "100%",
        height: "100%",
        ease: "expo.inOut",
        duration: 0.3,
      })
      .to(
        "#instagram2",
        {
          display: "none",
          duration: 0,
        },
        "<"
      )
      .to(
        "#portfolioFeed2",
        {
          display: "block",
          duration: 0,
        },
        "<"
      );

    portfolioTimeline3
      .to("#instagramBox3", {
        width: "100%",
        height: "100%",
        ease: "expo.inOut",
        duration: 0.3,
      })
      .to(
        "#instagram3",
        {
          display: "none",
          duration: 0,
        },
        "<"
      )
      .to(
        "#portfolioFeed3",
        {
          display: "block",
          duration: 0,
        },
        "<"
      );

    // timeline1.to(
    //   "#instagram",
    //   {
    //     display: "none",
    //     duration: 0,
    //   },
    //   "<"
    // );
    // timeline1.to(
    //   "#portfolioFeed",
    //   {
    //     display: "block",
    //     duration: 0,
    //   },
    //   "<"
    // );
  });

  const openPortfolio = () => {
    if (portfolioTimeline.progress() === 0) {
      portfolioTimeline.play();
    } else {
      portfolioTimeline.restart();
    }
  };

  const openPortfolio2 = () => {
    if (portfolioTimeline.progress() === 0) {
      portfolioTimeline2.play();
    } else {
      portfolioTimeline3.restart();
    }
  };

  const openPortfolio3 = () => {
    if (portfolioTimeline.progress() === 0) {
      portfolioTimeline3.play();
    } else {
      portfolioTimeline3.restart();
    }
  };

  return (
    <div className="min-h-screen flex min-w-[1200px] max-md:min-w-0 relative">
      <div
        id="instagramBox"
        className="absolute left-[20%] -translate-x-[20%] bottom-0 w-52 max-md:w-20 max-md:h-20 h-52 cursor-pointer"
      >
        <img
          src={instagramImg}
          id="instagram"
          alt="instagram icon"
          className="h-full w-full object-cover"
          onClick={() => openPortfolio()}
        />
        <img
          src={portfolioFeed}
          id="portfolioFeed"
          alt="portfolio feed"
          className="h-full w-full object-cover z-10"
        />
      </div>
      <div
        id="instagramBox2"
        className="absolute left-[50%] -translate-x-[50%] bottom-0 w-52 max-md:w-20 max-md:h-20 h-52 cursor-pointer"
      >
        <img
          src={instagramImg}
          id="instagram2"
          alt="instagram icon"
          className="h-full w-full object-cover"
          onClick={() => openPortfolio2()}
        />
        <img
          src={portfolioFeed}
          id="portfolioFeed2"
          alt="portfolio feed"
          className="h-full w-full object-cover z-10"
        />
      </div>
      <div
        id="instagramBox3"
        className="absolute left-[80%] -translate-x-[80%] bottom-0 w-52 max-md:w-20 max-md:h-20 h-52 cursor-pointer"
      >
        <img
          src={instagramImg}
          id="instagram3"
          alt="instagram icon"
          className="h-full w-full object-cover"
          onClick={() => openPortfolio3()}
        />
        <img
          src={portfolioFeed}
          id="portfolioFeed3"
          alt="portfolio feed"
          className="h-full w-full object-cover z-10"
        />
      </div>

      {/* <div className="w-52 h-52 relative self-end" id="instagramBox">
        <img
          src={instagramImg}
          
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
      <div className="w-52 h-52 relative self-end box">
        <img
          src={instagramImg}
          
          alt="instagram icon"
          className="absolute w-full h-full cursor-pointer object-cover"
        />
        <img
          src={portfolioFeed}
          id="portfolioFeed"
          alt="portfolio feed"
          className="absolute w-full h-full cursor-pointer object-cover -z-10 hidden"
        />
      </div> */}
    </div>
  );
}

export default App;
