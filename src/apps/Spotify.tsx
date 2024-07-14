import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Spotify: React.FC<{ animationCompleted: boolean }> = ({
  animationCompleted,
}) => {
  const [variant, setVariant] = useState();

  const handleButtonChange = (selectedVariant: any) => {
    setVariant(selectedVariant);
  };

  return (
    <section className="flex flex-col">
      <div className="flex flex-col max-w-md mx-auto w-full">
        <h1 className="bg-gradient-to-r from-[#323A84] via-[#6669BB] to-[#323A84] text-white text-center px-2 py-4 text-4xl">
          BURN DETAIL FAUX LEATHER SHORTS
        </h1>
        <div className="grid grid-cols-2">
          <h2 className="text-center text-2xl font-extralight text-gray-500">
            $400.62
          </h2>
          <div className="join justify-end pr-8 mx-auto gap-4 text-2xl bg-gradient-to-r from-10% to-gray-500 rounded-none from-transparent w-full">
            <button
              className={`${variant == "small" ? "text-white" : "text-black"}`}
              onClick={() => handleButtonChange("small")}
            >
              S
            </button>
            <button
              className={`${variant == "medium" ? "text-white" : "text-black"}`}
              onClick={() => handleButtonChange("medium")}
            >
              M
            </button>
            <button
              className={`${variant == "large" ? "text-white" : "text-black"}`}
              onClick={() => handleButtonChange("large")}
            >
              L
            </button>
          </div>
        </div>
        <button className="bg-black font-serif w-full p-2 text-sm text-center">
          ADD TO BAG
        </button>
      </div>
      <div className="w-full">
        <img
          src="https://kusikohc.com/cdn/shop/files/KUS4PT03KR-C5001.999_FT_1999x.jpg?v=1717666401"
          alt="product"
          width={800}
          height={800}
          className="w-full h-full object-contain"
        />
        <img
          src="https://kusikohc.com/cdn/shop/files/11062023-KUS4PT03KR-C5001.999_2_1999x.jpg?v=1716886891"
          alt="product"
          width={800}
          height={800}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mt-8">
        <p className="whitespace-pre-wrap max-w-sm text-black font-light text-xs ml-4">
          • Faux leather shorts, shaped with button waist and rider prints.
          <br />
          • 100% Polyurethane <br />
          • Straight fit <br />
          • Button closure <br />
          • Made in China <br />• Color: Black <br /> The Model is wearing a
          Size Medium
        </p>
      </div>
    </section>
  );
};

export default Spotify;
