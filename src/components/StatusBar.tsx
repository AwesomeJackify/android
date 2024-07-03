import { useEffect, useState } from "react";
import { MdMusicNote } from "react-icons/md";
import { MdMusicOff } from "react-icons/md";
import { MdSignalCellularAlt } from "react-icons/md";
import { MdWifi } from "react-icons/md";
import { PiClockFill } from "react-icons/pi";
import { MdBatteryChargingFull } from "react-icons/md";
import { MdOutlineSignalCellularAlt2Bar } from "react-icons/md";
import { BsSkipBackwardFill, BsSkipForwardFill } from "react-icons/bs";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";

const StatusBar = () => {
  const [playedVideo, setPlayedVideo] = useState(false);
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setPlayedVideo(true);
  }, []);

  useEffect(() => {
    console.log(showMusicPlayer);
  }, [playedVideo]);

  return (
    <div className="relative z-50">
      <div className="flex w-full py-2 z-10 bg-gradient-to-b from-gray-500 via-black to-black">
        <div className="flex text-white justify-between w-full items-center mx-4">
          <div
            className="flex gap-2 max-md:gap-1 items-center"
            id="header-left"
          >
            <div className="relative">
              <MdSignalCellularAlt
                id="signalFull"
                className="text-2xl max-md:text-base"
              />
              <MdOutlineSignalCellularAlt2Bar className="text-2xl absolute top-0 left-0 max-md:text-base" />
            </div>
            <p className="font-bold text-lg max-md:text-base">AT&T</p>
            <MdWifi className="text-2xl max-md:text-base" />
          </div>
          <h1 className="font-semibold text-xl max-md:text-base">9:41 AM</h1>
          <div className="flex gap-2 items-center max-md:gap-1">
            <PiClockFill className="text-2xl max-md:text-base" />
            <p className="text-lg max-md:text-base">100%</p>
            <MdBatteryChargingFull className="text-4xl rotate-90 max-md:text-base" />
            {playedVideo && (
              <>
                {isPlaying ? (
                  <MdMusicNote
                    className="text-2xl max-md:text-base"
                    onClick={() => setShowMusicPlayer(!showMusicPlayer)}
                  />
                ) : (
                  <MdMusicOff
                    className="text-2xl max-md:text-base"
                    onClick={() => setShowMusicPlayer(!showMusicPlayer)}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {showMusicPlayer && (
        <div className="w-2/5 max-md:w-3/5 p-1 rounded-lg border-2 border-slate-700 bg-gradient-to-tr from-[#a7e3ff88] to-sky-200/40 from-30% to-40% absolute top-full right-0 z-10">
          <div className="flex justify-center">
            {/* play/pause button */}
            <div
              className="h-12 relative aspect-square bg-gradient-to-b z-20 from-blue-400 border-blue-900 border-[1px] via-blue-950  to-sky-500 rounded-full"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <div className="flex justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-1">
                {isPlaying ? (
                  <>
                    <div className="h-6 w-2 rounded-2xl bg-gradient-to-b from-white to-slate-500"></div>
                    <div className="h-6 w-2 rounded-2xl bg-gradient-to-b from-white to-slate-500"></div>
                  </>
                ) : (
                  <TbPlayerSkipForwardFilled className="text-2xl text-slate-300" />
                )}
              </div>
            </div>
            {/* left and right butttons */}
            <div className="border-[1px] border-slate-400 flex items-center justify-between px-5 w-36 h-6 bg-gradient-to-b from-sky-200 to-slate-500 from-40% absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg">
              <BsSkipBackwardFill className="text-blue-800" />
              <BsSkipForwardFill className="text-blue-800" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusBar;
