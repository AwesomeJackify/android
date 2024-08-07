import { FaArrowRight } from "react-icons/fa";
import { InstagramEmbed } from "react-social-media-embed";

const Instagram: React.FC<{ animationCompleted: boolean }> = ({
  animationCompleted,
}) => {
  return (
    <div className="flex flex-col justify-start">
      {/* Sticky nav bar */}
      <div className="sticky text-white top-0 shadow-md z-10 h-24 flex items-center bg-blue-400 justify-start">
        {animationCompleted && (
          <div className="h-full flex items-center w-full justify-center text-2xl">
            <h1 className="w-5/6 ml-4">Instagram</h1>
            <div className="h-full w-1/6 flex items-center justify-center text-5xl border-l-2 border-gray-800">
              <h1 className="">
                <FaArrowRight />
              </h1>
            </div>
          </div>
        )}
      </div>
      {/* Navbar ends */}

      <InstagramEmbed url="https://www.instagram.com/p/C4oZUuSyonM" />
    </div>
  );
};

export default Instagram;
