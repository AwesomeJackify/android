import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import instagramImg from "../assets/instagram.png";
import youtubeImg from "../assets/youtube.png";
import itunesImg from "../assets/itunes.webp";
import aquaImg from "../assets/aqua.png";
import profileImg from "../assets/profile.jpeg";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import weatherImg from "../assets/weather.png";
import { createClient } from "../utils";
import getCollectionByIdQuery from "../queries/getCollectionByIdQuery";

import Instagram from "../apps/Instagram";
import Ball from "../apps/Ball";

function App() {
  enum Apps {
    Portfolio,
    Test1,
    Test2,
  }

  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const fetchCollection = async () => {
      const { data } = await createClient(
        import.meta.env.VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN
      ).request(getCollectionByIdQuery, {
        variables: {
          id: "gid://shopify/Collection/271423144007",
        },
      });

      console.log(data);
    };

    fetchCollection();
  });

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

  const dockItems = [
    {
      name: Apps.Portfolio,
      label: "Instagram",
      icon: instagramImg,
      ref: portfolioTimelineRef,
      timeline: portfolioTimeline,
      app: <Instagram animationCompleted={animationCompleted} />,
    },
    {
      name: Apps.Test1,
      icon: youtubeImg,
      label: "Youtube",
      ref: test1TimelineRef,
      timeline: test1Timeline,
      app: <Instagram animationCompleted={animationCompleted} />,
    },
    {
      name: Apps.Test2,
      icon: itunesImg,
      label: "Spotify",
      ref: test2TimelineRef,
      timeline: test2Timeline,
      app: <Ball animationCompleted={animationCompleted} />,
    },
  ];

  return (
    <>
      <img
        id="bgImage"
        src={aquaImg}
        alt="aqua"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="flex z-10 px-2 max-w-screen-xl pt-4 mx-auto w-full flex-col gap-4 relative grow">
        <div className="max-h-32 max-md:max-h-20 w-full rounded-2xl grow grid grid-cols-2 place-items-center gap-8">
          <div className="relative h-full w-full flex flex-col items-center justify-center">
            <img
              src={profileImg}
              alt={profileImg}
              className="h-32 max-md:h-20 max-md:w-2/3 z-10"
            />
          </div>
          <div className="relative h-full w-3/4 max-md:w-full bg-orange-500/50 text-black flex flex-col gap-1 p-2 overflow-scroll">
            <h1 className="font-bold text-base">Project</h1>
            <div className="flex flex-col gap-0">
              <p className="text-xs">@jackzebra626</p>
              <p className="text-xs">todo:</p>
              <p className="text-xs">[x]get cereal</p>
              <p className="text-xs">[]make money</p>
            </div>
          </div>
        </div>
        <div id="weather-card" className="grid grid-cols-3 place-items-center">
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
            <h1 className="text-2xl max-md:text-xl">30, March</h1>
            <div className="w-1 h-6 max-md:h-4 rounded-xl bg-gradient-to-r from-slate-500 opacity-70 to-slate-900"></div>
            <h1 className="text-2xl max-md:text-xl">Alarms</h1>
          </div>
          <div className="w-full h-1 bg-slate-500 opacity-70 rounded-2xl mb-3 max-md:mb-2"></div>
          <div className="flex justify-between">
            <div className="flex text-white items-center gap-2">
              <div className="bg-gradient-to-b from-gray-500 rounded-sm">
                <HiOutlineCalendarDays className="text-2xl max-md:text-xl" />
              </div>
              <h1 className="text-xl max-md:text-xl">Calendar</h1>
            </div>
            <div className="flex text-white items-end">
              <h1 className="text-xl max-md:text-xl">23:32</h1>
              <h2 className="max-md:text-lg text-sm">PM</h2>
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
                  className="w-28 border-4 rounded-2xl bottom-0 bg-black border-zinc-300 border-l-zinc-300 border-b-black border-r-black shadow-2xl"
                />
                <div
                  id={`appIconBackground${item.name}`}
                  className="left-0 right-0 aspect-square bottom-0 absolute bg-black opacity-0 rounded-2xl"
                  onClick={() => openApp(item.ref.current)}
                ></div>
              </div>

              <div className="no-scrollbar preview w-full h-full aspect-square absolute bottom-6 object-cover overflow-y-scroll bg-white hidden rounded-2xl z-10">
                {item.app}
              </div>
              <h1 className="text-center text-white max-md:text-sm mt-2">
                {item.label}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
