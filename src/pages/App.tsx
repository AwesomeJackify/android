import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import instagramImg from "../assets/instagram.png";
import safariImg from "../assets/safari.png";
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

  const createTimeline = () =>
    gsap.timeline({
      paused: true,
      delay: 0,
    });

  const configureAppTimeline = (appId: number, timeline: gsap.core.Timeline) =>
    timeline
      .to("#app" + appId + ">.preview", {
        display: "block",
        visibility: "hidden",
        duration: 0,
      })
      .to("#app" + appId + ">.preview", {
        width: "100%",
        height: "100%",
        top: 0,
        right: 0,
        left: 0,
        borderRadius: 0,
        ease: "expo.inOut",
        duration: 0.4,
      })
      .to(
        "#app" + appId + ">.preview",
        {
          visibility: "visible",
        },
        0.1
      );

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

  const openApp = (timeline: gsap.core.Timeline) => {
    if (timeline.progress() === 0) {
      timeline.play();
    } else {
      timeline.restart();
    }
  };

  const closeApp = () => {
    timelines.forEach((timeline) => {
      timeline.reverse();
    });
  };

  const dockItems = [
    {
      name: Apps.Portfolio,
      icon: instagramImg,
      timeline: portfolioTimeline,
    },
    {
      name: Apps.Test1,
      icon: safariImg,
      timeline: test1Timeline,
    },
    {
      name: Apps.Test2,
      icon: itunesImg,
      timeline: test2Timeline,
    },
  ];

  return (
    <div>
      <div className="bg-black overflow-hidden">
        <div className="flex min-h-screen flex-col max-w-lg mx-auto relative">
          {/* Background Image - Covers whole screen */}
          <img
            src={aquaImg}
            alt="aqua"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          {/* Nav top */}
          <div className="flex w-full py-2 z-10 bg-gradient-to-b from-gray-500 via-black to-black">
            <div className="flex text-white justify-between w-full items-center mx-4 z-10">
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
          <div className="flex z-10 px-2 max-w-screen-xl pt-4 mx-auto w-full flex-col gap-2 max-md:gap-8  max-md:pt-8 relative grow">
            <div className="background-blur bg-gradient-to-b from-gray-500  to-black border-white mt-4    grow max-h-40 w-full -z-10 rounded-2xl  ">
              <div className="flex w-full  items-center justify-evenly gap-x-8 ">
                <div className="bg-gradient-to-b ml-8 relative  from-slate-100 to-slate-200 border border-white    bottom-4 shadow-large    rounded-md h-36 w-48 ">
                  <h1 className="text-9xl bg-gradient-to-b from-gray-500 via-black to-slate-600 inline-block bg-clip-text text-transparent absolute left-6  ">
                    11
                  </h1>
                  <h1 className="text-xl  left-2 shadow-md bg-gradient-to-r font-light from-gray-900 via-black to-slate-600 inline-block bg-clip-text text-transparent  absolute bottom-3   ">
                    PM
                  </h1>
                  <div className="absolute bg-gradient-to-b from-slate-200 to-slate-900 top-[8rem] h-4 36 w-full z-10 "></div>
                  <div className="absolute bg-gradient-to-b from-slate-200 to-slate-400 bottom-[8.1rem] h-2 36 w-full z-10 "></div>
                  <div className="absolute bg-gradient-to-b from-blue-200 to-gray-400 bottom-[8.5rem] opacity-40 rounded-full h-2 36 w-full z-10 "></div>
                </div>
                <div className="bg-gradient-to-b mr-8 from-slate-100 to-slate-200  relative border border-white   bottom-4 shadow-large    rounded-md h-36 w-48 ">
                  <h1 className="text-9xl bg-gradient-to-b from-white via-black to-slate-600 inline-block bg-clip-text text-transparent absolute right-6  ">
                    30
                  </h1>
                  <div className="absolute bg-gradient-to-b from-slate-200 to-slate-900 top-[8rem]           h-4 36 w-full z-10 "></div>

                  <div className="absolute bg-gradient-to-b from-slate-200 to-slate-400 bottom-[8.1rem] h-2 36 w-full z-10 "></div>
                  <div className="absolute bg-gradient-to-b from-blue-200 to-gray-400 bottom-[8.5rem] opacity-40 rounded-full h-2 36 w-full z-10 "></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 place-items-center">
              <div className="flex flex-col text-white gap-1">
                <h1 className="text-4xl max-md:text-xl">Salt Lake City</h1>
                <h2 className="text-xl">Mostly Cloudy</h2>
              </div>
              <img
                src={weatherImg}
                alt="weather"
                className="w-full scale-150 hover:opacity-50 transition duration-1000"
              />
              <div className="flex flex-col text-white gap-1 items-end">
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

            <div className="flex flex-col opacity-70 bg-gradient-to-b from-slate-100 from-10% via-slate-900 to-slate-900 rounded-md p-4 border-slate-400 border-2">
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
                  <div>
                    <img
                      src={item.icon}
                      alt={item.name.toString()}
                      className="w-32 border-4 rounded-2xl bottom-0 bg-black border-zinc-300 border-l-zinc-300 border-b-black border-r-black shadow-2xl"
                    />
                    <div
                      className="h-32 aspect-square bottom-6 absolute bg-gradient-to-b from-10% from-white opacity-30 rounded-2xl"
                      onClick={() => openApp(item.timeline)}
                    ></div>
                  </div>

                  <div className="preview h-32 aspect-square absolute bottom-6 object-cover  overflow-y-scroll bg-white hidden rounded-2xl z-10">
                    <Portfolio />
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
    </div>
  );
}

export default App;
