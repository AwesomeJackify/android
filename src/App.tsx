import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { gsap } from "gsap";
gsap.to(".box", { x: 200 });

function App() {
  const [count, setCount] = useState(0);

  let tween = gsap
    .to(".box1", {
      duration: 0.5,
      width: "100%",
      height: "100%",
      ease: "expo.inOut",
    })
    .pause();

  return (
    <div className="h-screen flex w-screen relative">
      <div
        className="w-10 h-10 bg-red-500 absolute top-0 right-0 z-10"
        onClick={() => tween.reverse()}
      ></div>
      <div className="flex w-full justify-evenly items-end">
        {/* <div className="w-52 h-52 bg-green-500 cursor-pointer"></div> */}
        <div
          className="w-52 h-52 bg-green-500 cursor-pointer box1"
          onClick={() => tween.play()}
        ></div>
      </div>
    </div>
  );
}

export default App;
