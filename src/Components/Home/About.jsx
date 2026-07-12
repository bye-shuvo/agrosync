import React from "react";
import arrowRight from "../../images/arrow-right.svg";
import cropArrow from "../../images/crop-arrow.png";
import agriDrone from "../../images/drone-in-agri.png";
import borderBelow from "../../images/border-below.png";

const About = ({ aboutRef }) => {
  return (
    <section
      ref={aboutRef}
      id="about-section"
      className="relative p-10 lg:py-24 lg:pl-20 h-auto md:h-screen flex flex-col md:flex-row items-start justify-center gap-4 md:gap-16"
    >
      <div
        id="image"
        className="h-[13rem] md:h-[100%] w-full md:w-[45%] rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div
          id="text"
          className="absolute top-[20%] md:top-[2%] left-[5%] h-[12%] md:h-[20%] w-[50%] md:w-[20%] bg-[#2e5b3c] text-white text-center p-4 rounded-lg z-10"
        >
          Follow our journey...{" "}
          <i className="fa-regular fa-circle-play absolute top-12 md:top-16 left-[42%] text-3xl md:text-4xl lg:text-6xl text-[#FFD700]"></i>
        </div>
        <img
          className="h-full w-full object-cover hover:scale-125 md:hover:scale-110 transition-all duration-700 ease-in-out"
          src={agriDrone}
          alt="about-bg"
        />
      </div>
      <div
        id="headers"
        className="md:w-[60%] md:h-[85%] flex flex-col items-start md:justify-center lg:justify-center gap-2 lg:gap-3 text-[1.5rem]"
      >
        <h3 className="text-center font-bold text-[#2e5b3c] flex items-center justify-center text-[0.8em] md:text-[0.9em] lg:text-[1em] mt-2 md:mt-0">
          {" "}
          <img
            className="h-[0.7rem] md:h-[0.8rem] w-auto mr-2"
            src={cropArrow}
            alt="crop-arrow"
          />{" "}
          Why Choose Us?
        </h3>
        <h2 id="about-subtitle" className="md:text-4xl lg:text-5xl text-[#2e5b3c]">
          Our app is designed to empower farmers with innovative agri-tech
          solutions.
        </h2>
        <div className="lg:pb-8 text-[0.7em] lg:text-[0.8em] leading-[1rem] lg:leading-[1.5rem]">
          <div className="pt-2">
            <img
              src={arrowRight}
              alt="arrow"
              className="inline-block h-[1.1rem] lg:h-[1.4rem] pr-2"
            />{" "}
            Detect Crop Diseases
          </div>
          <div className="pt-2">
            <img
              src={arrowRight}
              alt="arrow"
              className="inline-block h-[1.1rem] lg:h-[1.4rem] pr-2"
            />{" "}
            Calculate Seed Requirements
          </div>
          <div className="pt-2">
            <img
              src={arrowRight}
              alt="arrow"
              className="inline-block h-[1.1rem] lg:h-[1.4rem] pr-2"
            />{" "}
            Instant Support
          </div>
        </div>
      </div>
      <div
        id="causes"
        className="relative md:absolute md:top-[70%] md:left-[20%] p-2 md:p-9 text-sm md:text-[1rem] lg:text-[1.2em] text-white rounded-lg bg-[#2e5b3c] md:min-h-[25%] w-full md:w-[70%] flex justify-center items-center overflow-y-hidden overflow-x-scroll no-scrollbar"
      >
        <div className="items border-r-2 border-dotted border-[#FFD700] w-[30%] p-3">
          <h3 className="small-header group cursor-pointer text-[#FFD700] font-bold text-[1.2em] mb-2 md:mb-4 relative">
            <img
              className="absolute opacity-0 group-hover:opacity-100 -bottom-1 md:-bottom-[0.8rem] left-0 transition-all duration-300 ease-in-out"
              src={borderBelow}
              alt="border-below"
            />
            Increased Efficiency
          </h3>{" "}
          <p className="text-[0.9em] leading-4 lg:leading-6">
            Streamline your farming operations with our time-saving tools.
          </p>
        </div>
        <div className="items border-r-2 border-dotted border-[#FFD700] w-[30%] p-3">
          <h3 className="small-header group cursor-pointer text-[#FFD700] font-bold text-[1.2em] mb-2 md:mb-4 relative">
            <img
              className="absolute opacity-0 group-hover:opacity-100 -bottom-1 md:-bottom-[0.8rem] left-0 transition-all duration-300 ease-in-out"
              src={borderBelow}
              alt="border-below"
            />
            Reduced Costs
          </h3>{" "}
          <p className="text-[0.9em] leading-4 lg:leading-6">
            {" "}
            Prevent financial losses due to crop diseases and optimize seed
            usage.
          </p>
        </div>
        <div className="items border-r-2 border-dotted border-[#FFD700] w-[30%] p-3">
          <h3 className="small-header group cursor-pointer text-[#FFD700] font-bold text-[1.2em] mb-2 md:mb-4 relative">
            <img
              className="absolute opacity-0 group-hover:opacity-100 -bottom-1 md:-bottom-[0.8rem] left-0 transition-all duration-300 ease-in-out"
              src={borderBelow}
              alt="border-below"
            />
            Improved Yields
          </h3>{" "}
          <p className="text-[0.9em] leading-4 lg:leading-6">
            Make informed decisions for better crop health and higher yields.
          </p>
        </div>
        <div className="items w-[30%] p-3">
          <h3 className="small-header group cursor-pointer text-[#FFD700] font-bold text-[1.2em] mb-2 md:mb-4 relative">
            <img
              className="absolute opacity-0 group-hover:opacity-100 -bottom-1 md:-bottom-[0.8rem] left-0 transition-all duration-300 ease-in-out"
              src={borderBelow}
              alt="border-below"
            />
            Sustainable Farming
          </h3>{" "}
          <p className="text-[0.9em] leading-4 lg:leading-6">
            Contribute to sustainable practices by utilizing AI for efficient
            resource management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
