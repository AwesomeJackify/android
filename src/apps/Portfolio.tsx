import { FaArrowRight } from "react-icons/fa";

const Portfolio: React.FC<{ animationCompleted: boolean }> = ({
  animationCompleted,
}) => {
  return (
    <div className="flex min-h-screen flex-col justify-start">
      {/* Sticky nav bar */}
      <div className="sticky text-white top-0 shadow-md z-10 h-24 flex items-center bg-blue-400 justify-start">
        {animationCompleted && (
          <div className="h-full flex items-center w-full justify-center text-2xl">
            <h1 className="w-5/6 ml-4">Instagram</h1>
            <div className="h-full w-1/6 flex items-center justify-center text-5xl border-l-2 border-gray-800">
              <h1 className="hover:cursor-pointer">
                <FaArrowRight />
              </h1>
            </div>
          </div>
        )}
      </div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit possimus ab
      odio quisquam voluptatem quam. Eaque explicabo delectus ab commodi, nemo
      vitae facilis repellendus aspernatur dolore aut quam recusandae in qui!
      Dicta possimus quod atque officiis quibusdam libero repellat excepturi
      tempore reiciendis, ut ratione laborum doloremque animi voluptatibus,
      recusandae ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Sit possimus ab odio quisquam voluptatem quam. Eaque explicabo delectus ab
      commodi, nemo vitae facilis repellendus aspernatur dolore aut quam
      recusandae in qui! Dicta possimus quod atque officiis quibusdam libero
      repellat excepturi tempore reiciendis, ut ratione laborum doloremque animi
      voluptatibus, recusandae ipsa?
      {/* Navbar ends */}
    </div>
  );
};

export default Portfolio;
