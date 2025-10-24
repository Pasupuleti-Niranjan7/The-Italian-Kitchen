
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

function About() {
  return (
    <>
      <section className="flex flex-col justify-between items-center md:justify-start md:flex-row gap-3 pr-4 my-15 bg-gray-50">
        <div className="order-2 mt-5 md:order-1">
          <img
            src="/public/image1.png"
            alt=""
            className="w-300 md:w-400 md:h-120"
          />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center gap-5 px-5 order-1 md:order-2 py-5">
          <h2 className="text-orange-400 text-4xl sm:text-5xl lg:text-6xl font-bold px-5 2xl:px-20">
            About Us
          </h2>
          <p className="text-pretty md:text-wrap text-sm sm:text-lg lg:text-xl 2xl:text-2xl font-medium px-5 text-center 2xl:px-20 md:text-left">
            Welcome to Niranjan's Food, where tradition meets taste.Our passion
            for authentic Italian cuisine is reflected in every dish we serve.
          </p>
          <p className="text-pretty text-sm sm:text-lg lg:text-xl 2xl:text-2xl font-medium px-5 text-center 2xl:px-20 md:text-left">
            From our family recipes to our warm and inviting atmosphere, we
            strive to bring the flavors of Italy to your table. Join us for an
            unforgettable dining experience.
          </p>
          <a
            href="tel:+918142686499"
            className="flex bg-orange-300 gap-2 items-center px-3 py-2 lg:px-4 lg:py-3 rounded-xl mx-4 2xl:mx-20 font-medium text-sm sm:text-base"
          >
            <FaPhoneAlt className="size-4 sm:size-5" />
            READY TO ORDER?
          </a>
        </div>
      </section>
    </>
  );
}

export default About