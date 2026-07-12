import React from 'react'
import grassline from "../../images/grass-line.png";
import magnifyingGlass from "../../images/magnify.jpeg";
import chatbubble from "../../images/chat-bubble.png";
import seeds from "../../images/seeds.png";
import arrowRight from "../../images/arrow-right.svg";
import { Link } from "react-router-dom";

const Features = ({featuresRef}) => {
  return (
      <section
        id="features-section"
        ref={featuresRef}
        className="md:p-20 relative h-auto md:h-screen grid grid-cols-1 md:grid-cols-3 md:gap-14 gap-10 place-items-center"
      >
        <img
          src={grassline}
          alt="grass-line"
          className="absolute top-[-1.4rem] md:top-[-1.5rem] left-0 w-full h-[1.5rem] object-cover"
        />
        <h2
          id="features-title"
          className="text-3xl md:text-6xl md:absolute md:top-[5%] md:left-[30%] text-[#2e5b3c] font-extrabold text-center justify-self-center"
        >
          Features of AgroSync
        </h2>
        <div
          id="crop-disease"
          className="group relative md:mt-20 h-[50vh] overflow-hidden md:h-[85%] w-[90%] md:w-[100%] rounded-lg transition-all duration-500 ease-in-out"
        >
          <img
            src={magnifyingGlass}
            alt="magnifying-glass"
            className="h-full w-full object-cover hover:cursor-pointer group-hover:scale-125 transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-[100%] left-[50%] cursor-pointer transform -translate-x-[50%] -translate-y-[18%] group-hover:top-[50%] group-hover:-translate-y-[50%] w-[95%] bg-[#2e5b3cc8] text-white text-[1.7rem] md:text-[1.8rem] p-5 flex flex-col items-start justify-start rounded-2xl hover:rounded-lg transition-all duration-700 ease-in-out">
            <h2 className="sub-header font-bold mx-auto text-center text-[0.9em] md:text-[1em]">
              Crop Disease Detection
            </h2>
            <h3 className="pt-2 md:pt-4 pb-2 md:pb-3 text-[0.55em] md:text-[0.65em]">
              Our Agri-Tech tool uses AI to identify crop diseases and provide
              instant support.
            </h3>
            <div className="pb-[0.8rem] text-[0.55em] md:text-[0.65em] leading-[1.2rem] md:leading-[1.5rem]">
              <span className="text-[1.4em] md:text-[1.5em] text-[#FFD700] font-bold">
                Benifits:
              </span>
              <div className="pt-2">
                <img
                  src={arrowRight}
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Increased efficiency{" "}
              </div>
              <div className="pt-2">
                <img
                  src={arrowRight}
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Improved crop yields{" "}
              </div>
              <div className="pt-2">
                <img
                  src={arrowRight}
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Reduced losses{" "}
              </div>
              <div className="pt-2">
                <img
                  src={arrowRight}
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Enhanced farm profitability
              </div>
            </div>
            <button
              className="bg-[#FFD700] w-full p-[0.6rem] md:p-[1rem] text-[1rem] md:text-[1.1rem] font-extrabold text-[#2e5b3c] rounded-lg border-r-4 border-[#2e5b3c] hover:bg-[#2e5b3c] hover:text-[#FFD700] hover:border-l-4 hover:border-[#FFD700] hover:border-r-0 transition-all duration-300 ease-in-out"
            >
              <Link className="btn block h-full w-full" to="/detector">Try Now</Link>
            </button>
          </div>
        </div>
        <div
          id="AI-chatbot"
          className="group relative md:mt-20 h-[50vh] md:h-[85%] w-[90%] md:w-[100%] rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
        >
          <img
            src={chatbubble}
            alt="Chat-Bubble"
            className="h-full w-full object-cover hover:cursor-pointer group-hover:scale-125 transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-[100%] left-[50%] cursor-pointer transform -translate-x-[50%] -translate-y-[18%] group-hover:top-[50%] group-hover:-translate-y-[50%] w-[95%] bg-[#2e5b3cc8] text-white text-[1.7rem] md:text-[1.8rem] p-5 flex flex-col items-start justify-start rounded-2xl hover:rounded-lg transition-all duration-700 ease-in-out">
            <h2 className="sub-header font-bold mx-auto text-center text-[0.9em] md:text-[1em]">
              AI Chatbot
            </h2>
            <h3 className="pt-2 md:pt-4 pb-2 md:pb-3 text-[0.55em] md:text-[0.65em]">
              Get instant answers to your agricultural queries with our
              intelligent chatbot.
            </h3>
            <div className="pb-[1rem] text-[0.55em] md:text-[0.65em] leading-[1.2rem] md:leading-[1.5rem]">
              <span className="text-[1.4em] md:text-[1.5em] text-[#FFD700] font-bold">
                Benifits:
              </span>
              <div className="pt-2">
                <img
                  src={arrowRight}
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Immediate assistance
              </div>
              <div className="pt-2">
                <img
                  src={arrowRight}
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Improved decision-making
              </div>
              <div className="pt-2">
                <img
                  src={arrowRight}
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Increased confidence in farming
              </div>
              <div className="pt-2">
                <img
                  src={arrowRight}
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Understand Native language
              </div>
            </div>
            <button
              onClick={() => setIsClicked(!isClicked)}
              className="bg-[#FFD700] w-full p-[0.6rem] md:p-[1rem] text-[1rem] md:text-[1.1rem] font-extrabold text-[#2e5b3c] rounded-lg border-r-4 border-[#2e5b3c] hover:bg-[#2e5b3c] hover:text-[#FFD700] hover:border-l-4 hover:border-[#FFD700] hover:border-r-0 transition-all duration-300 ease-in-out"
            >
              Chat Now
            </button>
          </div>
        </div>
        <div
          id="seed-calculator"
          className="group relative md:mt-20 h-[50vh] md:h-[85%] w-[90%] md:w-[100%] rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
        >
          <img
            src={seeds}
            alt="seeds"
            className="h-full w-full object-cover hover:cursor-pointer group-hover:scale-125 transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-[100%] left-[50%] cursor-pointer transform -translate-x-[50%] -translate-y-[18%] group-hover:top-[50%] group-hover:-translate-y-[50%] w-[95%] bg-[#2e5b3cc8] text-white text-[1.7rem] md:text-[1.8rem] p-5 flex flex-col items-start justify-start rounded-2xl hover:rounded-lg transition-all duration-700 ease-in-out">
            <h2 className="sub-header font-bold mx-auto text-center text-[0.9em] md:text-[1em]">
              Seed Calculator
            </h2>
            <h3 className="pt-2 md:pt-4 pb-2 md:pb-3 text-[0.55em] md:text-[0.65em]">
              Calculate the optimal seed quantity for your field size and crop
              type.
            </h3>
            <div className="pb-[1rem] text-[0.55em] md:text-[0.65em] leading-[1.2rem] md:leading-[1.5rem]">
              <span className="text-[1.4em] md:text-[1.5em] text-[#FFD700] font-bold">
                Benifits:
              </span>
              <div className="pt-2">
                <img
                  src={arrowRight}
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Increased yield
              </div>
              <div className="pt-2">
                <img
                  src={arrowRight}
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Reduced wastage of seeds
              </div>
              <div className="pt-2">
                <img
                  src={arrowRight}
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Improved farm economics
              </div>
              <div className="pt-2">
                <img
                  src={arrowRight}
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Enhanced farm profitability
              </div>
            </div>
            <button
              className="bg-[#FFD700] w-[100%] p-[0.6rem] md:p-[1rem] text-[1rem] md:text-[1.1rem] font-extrabold text-[#2e5b3c] rounded-lg border-r-4 border-[#2e5b3c] hover:bg-[#2e5b3c] hover:text-[#FFD700] hover:border-l-4 hover:border-[#FFD700] hover:border-r-0 transition-all duration-300 ease-in-out"
            >
              <Link className="btn block h-full w-full" to="/calculator">Calculate Now</Link>
            </button>
          </div>
        </div>
      </section>
  )
}

export default Features
