import { FaArrowRight } from "react-icons/fa";

const Spotify: React.FC<{ animationCompleted: boolean }> = ({
  animationCompleted,
}) => {
  return (
    <div className="flex flex-col justify-start h-full bg-black">
      {/* Sticky nav bar */}
      <div className="sticky text-white top-0 shadow-md z-10 h-24 flex items-center bg-blue-400 justify-start">
        {animationCompleted && (
          <div className="h-full flex items-center w-full justify-center text-2xl">
            <h1 className="w-5/6 ml-4">Spotify</h1>
            <div className="h-full w-1/6 flex items-center justify-center text-5xl border-l-2 border-gray-800">
              <h1 className="">
                <FaArrowRight />
              </h1>
            </div>
          </div>
        )}
      </div>
      {/* Navbar ends */}

      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/artist/5zIE5XrsBLymJoVVYznZlL?utm_source=generator&theme=2"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Spotify;
