import { gsap } from "gsap";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import instagramImg from "../assets/instagram.png";
import youtubeImg from "../assets/youtube.png";
import itunesImg from "../assets/itunes.webp";
import aquaImg from "../assets/aqua.png";
import { MdSignalCellularAlt } from "react-icons/md";
import { MdWifi } from "react-icons/md";
import { PiClockFill } from "react-icons/pi";
import { MdBatteryChargingFull } from "react-icons/md";
import { MdOutlineSignalCellularAlt2Bar } from "react-icons/md";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { SlPeople } from "react-icons/sl";

import weatherImg from "../assets/weather.png";

import Portfolio from "../apps/Portfolio";
function App() {
  enum Apps {
    Portfolio,
    Test1,
    Test2,
  }

  const [animationCompleted, setAnimationCompleted] = useState(false);

  const createTimeline = () =>
    gsap.timeline({
      paused: true,
      delay: 0,
    });

  const configureAppTimeline = (
    appId: number,
    timeline: gsap.core.Timeline
  ) => {
    timeline
      // Makes app button opacity go lower
      .to("#appIcon" + appId, {
        opacity: 0.5,
        duration: 0.15,
        ease: "easeOutBack",
      })
      // Opens/closes app
      .to("#app" + appId + ">.preview", {
        display: "block",
        opacity: 0,
        duration: 0,
      })
      // Blur background
      .to("#bgImage", {
        filter: "blur(5px)",
        opacity: 0.8,
        duration: 0.12,
      })
      // Make app start small on screen
      .to("#app" + appId + ">.preview", {
        scale: "0.15",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",

        // bottom: 0,
        borderRadius: 0,
        ease: "expo.inOut",
        opacity: 1,
        // delay: 0.4,
        duration: 0.0,
      })
      .to(
        "#date-alarm-card",
        {
          scale: 0.98,
          opacity: 0.5,
          duration: 0.25,
        },
        0
      )
      .to(
        "#weather-img",
        {
          opacity: 0.5,
          duration: 0.2,
        },
        0
      )
      .to(
        ".weather-text",
        {
          opacity: 0.5,
          duration: 0.15,
        },
        0
      )

      .to("#app" + appId + ">.preview", {
        scaleX: "1",
        scaleY: "1",
        filter: "blur(0px)",

        ease: "expo.inOut",
        // delay: 0.4,
        duration: 0.5,
      })
      .to(
        "#app" + appId + ">.preview",
        {
          visibility: "visible",
        },
        0.1
      );
    timeline.eventCallback("onComplete", () => {
      setAnimationCompleted(true);
    });
  };

  let portfolioTimelineRef = useRef<gsap.core.Timeline>();
  let test1TimelineRef = useRef<gsap.core.Timeline>();
  let test2TimelineRef = useRef<gsap.core.Timeline>();

  const timelineRefs = [
    portfolioTimelineRef,
    test1TimelineRef,
    test2TimelineRef,
  ];

  const portfolioTimeline = createTimeline();
  const test1Timeline = createTimeline();
  const test2Timeline = createTimeline();

  const timelines = [portfolioTimeline, test1Timeline, test2Timeline];

  const headerTimeline = gsap.timeline({
    repeat: -1,
  });

  useGSAP(() => {
    timelines.forEach((timeline, index) => {
      configureAppTimeline(index, timeline);
    });

    timelineRefs.forEach(
      (timelineRef, index) => (timelineRef.current = timelines[index])
    );

    headerTimeline
      .to("#signalFull", {
        visibility: "hidden",
        duration: gsap.utils.random(0.5, 1.5),
      })
      .to("#signalFull", {
        visibility: "visible",
        duration: gsap.utils.random(2, 4),
      })
      .play();
  });

  const openApp = (timeline: gsap.core.Timeline | undefined) => {
    setAnimationCompleted(false); //restarts animation
    if (timeline) {
      if (timeline.progress() === 0) {
        timeline.play();
      } else {
        timeline.restart();
      }
    }
  };

  const closeApp = () => {
    timelineRefs.forEach((timeline) => {
      if (timeline.current) {
        timeline.current.reverse();
      }
    });
  };

  const dockItems = [
    {
      name: Apps.Portfolio,
      icon: instagramImg,
      ref: portfolioTimelineRef,
      timeline: portfolioTimeline,
    },
    {
      name: Apps.Test1,
      icon: youtubeImg,
      ref: test1TimelineRef,
      timeline: test1Timeline,
    },
    {
      name: Apps.Test2,
      icon: itunesImg,
      ref: test2TimelineRef,
      timeline: test2Timeline,
    },
  ];

  return (
    <div className="bg-black overflow-hidden">
      <div className="flex min-h-screen flex-col max-w-lg mx-auto relative">
        <img
          id="bgImage"
          src={aquaImg}
          alt="aqua"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="flex w-full py-2 z-10 bg-gradient-to-b from-gray-500 via-black to-black">
          <div className="flex text-white justify-between w-full items-center mx-4">
            <div
              className="flex gap-2 max-md:gap-1 items-center"
              id="header-left"
            >
              <div className="relative">
                <MdSignalCellularAlt id="signalFull" className="text-2xl" />
                <MdOutlineSignalCellularAlt2Bar className="text-2xl absolute top-0 left-0" />
              </div>

              <p className="font-bold text-lg max-md:text-base">AT&T</p>
              <MdWifi className="text-2xl max-md:text-base" />
            </div>
            <h1 className="font-semibold text-xl">11:30 PM</h1>
            <div className="flex gap-2 items-center max-md:gap-1">
              <PiClockFill className="text-2xl " />
              <p className="text-lg">100%</p>
              <MdBatteryChargingFull className="text-4xl rotate-90" />
            </div>
          </div>
        </div>
        <div className="flex z-10 px-2 max-w-screen-xl pt-4 mx-auto w-full flex-col gap-4 max-md:gap-8  max-md:pt-8 relative grow">
          <div className="bg-slate-100 opacity-10 grow max-h-32 w-full rounded-2xl border-white border-y-2 border-x-[1px]">
            <div className="bg-gradient-to-b from-zinc-700 to-zinc-900 h-1/2 w-full rounded-2xl"></div>
          </div>
          <div
            id="weather-card"
            className="grid grid-cols-3 place-items-center"
          >
            <div className="flex flex-col text-white gap-1">
              <h1 className="weather-text text-4xl max-md:text-xl">
                Salt Lake City
              </h1>
              <h2 className="text-xl weather-text">Mostly Cloudy</h2>
            </div>
            <img
              id="weather-img"
              src={weatherImg}
              alt="weather"
              className="w-full scale-150"
            />
            <div className="weather-text flex flex-col text-white gap-1 items-end">
              <h1 className="text-3xl max-md:text-xl">Wed, Mar 30</h1>
              <div className="flex justify-end gap-4 items-center">
                <h2 className="text-5xl max-md:text-3xl">47°</h2>
                <div>
                  <h2 className="text-xl">H:55°</h2>
                  <h2 className="text-xl">L:44°</h2>
                </div>
              </div>
            </div>
          </div>

          <div
            id="date-alarm-card"
            className="flex flex-col opacity-70 bg-gradient-to-b from-slate-100 from-10% via-slate-900 to-slate-900 rounded-md p-4 border-slate-400 border-2"
          >
            <div className="flex text-white justify-between">
              <h1 className="text-4xl">30, March</h1>
              <div className="w-1 h-12 rounded-xl bg-gradient-to-r from-slate-500 opacity-70 to-slate-900"></div>
              <h1 className="text-4xl">Alarms</h1>
            </div>
            <div className="w-full h-1 bg-slate-500 opacity-70 rounded-2xl mb-4"></div>
            <div className="flex justify-between">
              <div className="flex text-white items-center gap-2">
                <div className="bg-gradient-to-b from-gray-500 rounded-sm">
                  <HiOutlineCalendarDays className="text-4xl " />
                </div>
                <h1 className="text-3xl">Calendar</h1>
              </div>
              <div className="flex text-white items-end">
                <h1 className="text-3xl">23:32</h1>
                <h2>PM</h2>
              </div>
            </div>
          </div>
          <div
            id="dock"
            className="flex z-10 justify-center gap-6 mt-auto mb-6 items-end"
          >
            {dockItems.map((item) => (
              <div id={`app${item.name.toString()}`} key={item.name}>
                <div className="relative">
                  <img
                    src={item.icon}
                    alt={item.name.toString()}
                    id={`appIcon${item.name}`}
                    className="w-32 border-4 rounded-2xl bottom-0 bg-black border-zinc-300 border-l-zinc-300 border-b-black border-r-black shadow-2xl"
                  />
                  <div
                    id={`appIconBackground${item.name}`}
                    className="left-0 right-0 aspect-square bottom-0 absolute bg-black opacity-0 rounded-2xl"
                    onClick={() => openApp(item.ref.current)}
                  ></div>
                </div>

                <div className="no-scrollbar preview w-full h-full aspect-square absolute bottom-6 object-cover  overflow-y-scroll bg-white hidden rounded-2xl z-10">
                  <Portfolio animationCompleted={animationCompleted} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* bottom nav */}
        <div className="grid z-10 grid-cols-[1fr_2fr_1fr] border-2 border-t-white border-b-slate-500 mt-auto border-r-slate-600 rounded-md">
          <div className="bg-slate-800 flex justify-center items-center">
            <FaPhoneAlt className="text-2xl text-white" />
          </div>
          <div
            className="bg-slate-900 flex justify-center p-2 items-center"
            onClick={() => closeApp()}
          >
            <MdArrowBackIosNew className="text-4xl rotate-90 text-white" />
          </div>
          <div className=" bg-slate-800 flex justify-center p-2 items-center">
            <SlPeople className="text-4xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
