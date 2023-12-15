import { useEffect, useState } from "react";
import { gsap } from "gsap";
import instagramImg from "./assets/instagram.png";
import portfolioFeed from "./assets/portfolioFeed.png";

function App() {
  const timeline1 = gsap.timeline({ paused: true });
  const timeline2 = gsap.timeline({ paused: true });

  timeline1.to(".box1", {
    width: "100%",
    height: "100%",
    ease: "expo.inOut",
    duration: 0.5,
  });
  timeline1.to(
    "#instagram",
    {
      visibility: "hidden",
      duration: 0,
    },
    "<"
  );
  timeline1.to(
    "#portfolioFeed",
    {
      visibility: "visible",
      duration: 0,
    },
    "<"
  );

  timeline2.to(".box1", {
    width: "13rem",
    height: "13rem",
    ease: "expo.inOut",
    duration: 0.5,
  });
  timeline2.to(
    "#portfolioFeed",
    {
      visibility: "hidden",
    },
    "<.3"
  );
  timeline2.to(
    "#instagram",
    {
      visibility: "visible",
    },
    "<"
  );

  return (
    <div className="h-screen flex w-screen relative items-end justify-center">
      <div
        className="w-10 h-10 bg-red-500 absolute top-0 right-0 z-10"
        onClick={() => timeline2.restart()}
      ></div>
      <div
        className="w-52 h-52 cursor-pointer box1 relative"
        onClick={() => timeline1.restart()}
      >
        <img
          src={instagramImg}
          id="instagram"
          alt="instagram icon"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <img
          src={portfolioFeed}
          alt="portfolio feed"
          id="portfolioFeed"
          className="absolute top-0 left-0 w-full h-full object-cover invisible"
        />
      </div>
    </div>
  );
}

export default App;
