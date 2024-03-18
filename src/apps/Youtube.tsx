import { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import YouTube, { YouTubeProps } from "react-youtube";

const Youtube: React.FC<{
  animationCompleted: boolean;
  handleSetPlayedVideo: Function;
  handleSetIsPlaying: Function;
  isPlaying: boolean;
}> = ({
  animationCompleted,
  handleSetPlayedVideo,
  handleSetIsPlaying,
  isPlaying,
}) => {
  const playerRef = useRef<YouTube | null>(null);

  useEffect(() => {
    if (playerRef != null) {
      if (isPlaying) {
        playerRef.current?.internalPlayer?.playVideo();
      } else {
        playerRef.current?.internalPlayer?.pauseVideo();
      }
    }
  }, [isPlaying]);

  const onStateChange = (event: any) => {
    if (event.data > -1) {
      handleSetPlayedVideo(true);
    }
    if (event.data == 1) {
      handleSetIsPlaying(true);
    } else if (event.data == 2) {
      handleSetIsPlaying(false);
    }
  };

  const opts: YouTubeProps["opts"] = {
    height: "360",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      fs: 0,
    },
  };

  return (
    <div className="flex flex-col justify-start h-full bg-black">
      {/* Sticky nav bar */}
      <div className="sticky text-white top-0 shadow-md z-10 h-24 flex items-center bg-blue-400 justify-start">
        {animationCompleted && (
          <div className="h-full flex items-center w-full justify-center text-2xl">
            <h1 className="w-5/6 ml-4">Youtube</h1>
            <div className="h-full w-1/6 flex items-center justify-center text-5xl border-l-2 border-gray-800">
              <h1 className="hover:cursor-pointer">
                <FaArrowRight />
              </h1>
            </div>
          </div>
        )}
      </div>
      {/* Navbar ends */}

      <div className="flex flex-col justify-center h-full">
        <YouTube
          videoId="fgGlFmniFVY"
          opts={opts}
          onStateChange={onStateChange}
          ref={playerRef}
        />
      </div>
    </div>
  );
};

export default Youtube;
