
import { Link } from "react-router";
import video from "/banner_video.mp4";

let HomeBanner = () => {
  return (
    <>
      <section className="flex flex-col justify-between md:flex-row sm:ml-10 mt-5">
        <section className="flex flex-col items-center md:items-start justify-center gap-5 mt-5 md:ml-8 xl:ml-10">
          {/* Welcome content */}
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center md:text-left text-nowrap">
              Welcome To
            </h1>
            <div className="flex md:flex-col gap-3">
              <span className="text-orange-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:text-left">
                Niranjan's
              </span>
              <span className="text-orange-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center md:text-left">
                Food
              </span>
            </div>
          </div>

          <p className="text-base sm:text-xl md:text-xl lg:text-2xl font-semibold text-preeety text-center md:text-left">
            Experience Authentic <br /> Italian Cuisine
          </p>

          {/* Buttons */}
          <section className="flex gap-4 md:flex-col w-full items-center justify-center md:items-start">
            <button className="bg-orange-300 px-3 py-2 md:py-3 md:px-4 lg:px-5 lg:py-4 lg:text-lg text-wrap font-medium text-base rounded-xl ">
              <Link to="menu">View Menu</Link>
            </button>
            <button className="bg-black text-white px-3 py-2 md:py-3 md:px-4 font-medium text-base rounded-xl lg:px-7 lg:py-4 lg:text-lg">
              <Link to="reservation">RESERVE A TABLE</Link>
            </button>
          </section>
        </section>

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/thumbnail.jpg"
          className="h-130 md:h-110 lg:h-150 2xl:h-180 -mt-5 sm:mt-10"
        >
          <source src={video} type="video/mp4" />
        </video>
      </section>
    </>
  );
};

export default HomeBanner;
