import React from "react";
import portfolioImg from "../assets/portfolioFeed.png";
import instagramImg from "../assets/instagram.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Phone from "../Layout/Phone";

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

      translateY: "100%",
      ease: "expo.inOut",
      duration: 0.5,
      autoAlpha: 0.0,
    });
  });

  const closePortfolio = () => {
    if (timeline1.progress() === 0) {
      timeline1.play();
    } else {
      timeline1.restart();
    }
  };

  return (
    <Phone>
      <IoMdClose
        className="w-10 h-10 sticky text-black cursor-pointer  top-0 left-0 z-10"
        id="close"
        onClick={() => closePortfolio()}
      ></IoMdClose>
      <div className="flex flex-col">
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
          className="w-full h-full object-cover box1 cursor-pointer"
        />
        <h1 className="text-4xl">
          hi Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          pariatur perspiciatis, blanditiis doloribus corporis optio nisi esse
          eveniet sed atque voluptatem dolore nemo maxime odio sequi recusandae
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem tempora at eius, culpa autem nulla nemo aut quisquam
          consequuntur, aspernatur ab sit? Quo culpa unde deleniti cupiditate,
          temporibus aliquam numquam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Exercitationem tempora at eius, culpa autem nulla
          nemo aut quisquam consequuntur, aspernatur ab sit? Quo culpa unde
          deleniti cupiditate, temporibus aliquam numquam. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Exercitationem tempora at eius,
          culpa autem nulla nemo aut quisquam consequuntur, aspernatur ab sit?
          Quo culpa unde deleniti cupiditate, temporibus aliquam numquam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
          tempora at eius, culpa autem nulla nemo aut quisquam consequuntur,
          aspernatur ab sit? Quo culpa unde deleniti cupiditate, temporibus
          aliquam numquam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Exercitationem tempora at eius, culpa autem nulla nemo aut
          quisquam consequuntur, aspernatur ab sit? Quo culpa unde deleniti
          cupiditate, temporibus aliquam numquam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Exercitationem tempora at eius, culpa
          autem nulla nemo aut quisquam consequuntur, aspernatur ab sit? Quo
          culpa unde deleniti cupiditate, temporibus aliquam numquam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
          tempora at eius, culpa autem nulla nemo aut quisquam consequuntur,
          aspernatur ab sit? Quo culpa unde deleniti cupiditate, temporibus
          aliquam numquam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Exercitationem tempora at eius, culpa autem nulla nemo aut
          quisquam consequuntur, aspernatur ab sit? Quo culpa unde deleniti
          cupiditate, temporibus aliquam numquam. cupiditate, temporibus aliquam
          numquam.
        </h1>
      </div>
    </Phone>
  );
};

export default Portfolio;
