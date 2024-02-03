import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import instagramImg from "../assets/instagram.png";
import aquaImg from "../assets/aqua.png";

import { MdSignalCellularAlt } from "react-icons/md";
import { MdWifi } from "react-icons/md";
import { PiClockFill } from "react-icons/pi";
import { MdBatteryChargingFull } from "react-icons/md";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { SlPeople } from "react-icons/sl";

import weatherImg from "../assets/weather.png";

import Portfolio from "../apps/Portfolio";
function App() {
  enum Apps {
    Portfolio,
    Test,
  }

  const createTimeline = () =>
    gsap.timeline({
      paused: true,
      delay: 0,
    });

  const configureTimeline = (appId: number, timeline: gsap.core.Timeline) =>
    timeline
      .to("#app" + appId + ">.preview", {
        display: "block",
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
      });

  const portfolioTimeline = createTimeline();
  const testTimeline = createTimeline();

  useGSAP(() => {
    configureTimeline(0, portfolioTimeline);
    configureTimeline(1, testTimeline);
  });

  const openApp = (timeline: gsap.core.Timeline) => {
    if (timeline.progress() === 0) {
      timeline.play();
    } else {
      timeline.restart();
    }
  };

  const closeApp = () => {
    if (portfolioTimeline.progress() == 1) {
      portfolioTimeline.reverse();
    } else if (testTimeline.progress() == 1) {
      testTimeline.reverse();
    }
  };

  const dockItems = [
    {
      name: Apps.Portfolio,
      icon: instagramImg,
      timeline: portfolioTimeline,
    },
    {
      name: Apps.Test,
      icon: instagramImg,
      timeline: testTimeline,
    },
    {
      name: "test2",
      icon: instagramImg,
      timeline: testTimeline,
    },
  ];

  return (
    <div className="bg-black overflow-hidden">
      <div className="flex min-h-screen flex-col max-w-lg mx-auto relative">
        <img
          src={aquaImg}
          alt="aqua"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="flex w-full py-2 z-10 bg-gradient-to-b from-gray-500 via-black to-black">
          <div className="flex text-white justify-between w-full items-center mx-4">
            <div className="flex gap-2 max-md:gap-1 items-center">
              <MdSignalCellularAlt className="text-2xl" />
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
        <div className="flex z-10 px-2 max-w-screen-xl mx-auto w-full flex-col gap-4 max-md:gap-8  max-md:pt-8 relative grow">
          <div className="bg-black grow max-h-32 w-full rounded-2xl border-white border-t-2 border-x-[1px]">
            <div className="bg-gradient-to-b from-zinc-700 to-zinc-900 h-1/2 w-full rounded-2xl"></div>
          </div>
          <div className="grid grid-cols-3 place-items-center">
            <div className="flex flex-col text-white gap-1">
              <h1 className="text-4xl max-md:text-xl">Salt Lake City</h1>
              <h2 className="text-xl">Mostly Cloudy</h2>
            </div>
            <img src={weatherImg} alt="weather" className="w-full scale-150" />
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

          <div className="flex flex-col gap-2 opacity-70 bg-gradient-to-b from-slate-100 from-10% via-slate-900 to-slate-900 rounded-md p-4 border-slate-400 border-2">
            <div className="flex text-white justify-between">
              <h1 className="text-4xl">30, March</h1>
              <div className="w-1 rounded-xl bg-gradient-to-r from-slate-500 to-black"></div>
              <h1 className="text-4xl">Alarms</h1>
            </div>
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
            className="flex z-10 justify-center gap-6 mt-auto mb-6"
          >
            {dockItems.map((item) => (
              <div id={`app${item.name.toString()}`} key={item.name}>
                <img
                  src={item.icon}
                  alt={item.name.toString()}
                  className="w-32"
                  onClick={() => openApp(item.timeline)}
                />
                <div className="preview h-32 aspect-square absolute bottom-6 object-cover  overflow-y-scroll bg-white hidden rounded-2xl">
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
  );
}

export default App;
