import React from 'react'
import marketTrends from "../../images/Market_trends.png";
import mlModelImprovement from "../../images/ml.jpg";
import login from "../../images/login.png";
import weatherForecasting from "../../images/precise-farming.png";

const Target = () => {
  return (
      <section
        id="target-section"
        className="lg:p-20 pb-10 md:p-11 md:relative h-auto md:h-screen flex flex-col md:flex-row items-center lg:items-start justify-between"
      >
        <h2
          id="target-title"
          className="text-5xl md:text-6xl lg:text-9xl w-full lg:w-[30%] md:h-full text-[#2e5b3c] font-extrabold text-center text-transparent bg-[url(/src/images/CTA-img.jpeg)] bg-no-repeat bg-clip-text flex items-center"
        >
          Our Vision for the Future
        </h2>
        <div id="cards" className="md:relative lg:pt-20 grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 w-[90vw] lg:w-[60%] h-full lg:gap-10 place-items-center">
        <p className="small-header text-center md:absolute md:top-[-5px] left-0 text-lg md:text-2xl font-bold text-gray-700 mt-10 md:mt-0 md:mb-10">
          We're committed to driving innovation in agriculture. Here's what we aim to achieve in the coming years.
        </p>
        <div
          className="group relative h-[15rem] w-full md:h-full md:w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
        >
          <img
            src={weatherForecasting}
            alt="weather-forecasting"
            className="h-full w-full object-cover hover:cursor-pointer group-hover:scale-125 transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-[100%] left-[50%] cursor-pointer transform -translate-x-[50%] -translate-y-[4.5rem] group-hover:top-[50%] group-hover:-translate-y-[50%] h-[95%] w-[95%] bg-[#2e5b3cc8] text-white text-[1.7rem] md:text-[1.8rem] p-6 flex flex-col items-start justify-start rounded-lg hover:rounded-md transition-all duration-700 ease-in-out">
            <h2 className="sub-header font-bold mx-auto text-center">
              Weather Forecasting
            </h2>
            <h3 className="pt-2 md:pt-4 pb-4 text-[0.6em] md:text-[0.65em]">
                Future versions can include real-time weather forecasting and its impact on crop health.
            </h3>
          </div>
        </div>
        <div
          className="group relative h-[15rem] w-full md:h-full md:w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
        >
          <img
            src={marketTrends}
            alt="marketTrends"
            className="h-full w-full object-cover hover:cursor-pointer group-hover:scale-125 transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-[100%] left-[50%] cursor-pointer transform -translate-x-[50%] -translate-y-[4.5rem] group-hover:top-[50%] group-hover:-translate-y-[50%] h-[95%] w-[95%] bg-[#2e5b3cc8] text-white text-[1.7rem] md:text-[1.8rem] p-6 flex flex-col items-start justify-start rounded-2xl hover:rounded-lg transition-all duration-700 ease-in-out">
            <h2 className="sub-header font-bold mx-auto text-center">
            Market Prices and Trends
            </h2>
            <h3 className="pt-2 md:pt-4 pb-4 text-[0.6em] md:text-[0.65em]">
              Incorporating data on market prices and trends for different crops would help farmers make better financial decisions.
            </h3>
          </div>
        </div>
        <div
           className="group relative h-[15rem] w-full md:h-full md:w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
        >
          <img
            src={mlModelImprovement}
            alt="Ml-model-improvement"
            className="h-full w-full object-cover hover:cursor-pointer group-hover:scale-125 transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-[100%] left-[50%] cursor-pointer transform -translate-x-[50%] -translate-y-[4.5rem] group-hover:top-[50%] group-hover:-translate-y-[50%] h-[95%] w-[95%] bg-[#2e5b3cc8] text-white text-[1.7rem] md:text-[1.8rem] p-6 flex flex-col items-start justify-start rounded-lg hover:rounded-md transition-all duration-700 ease-in-out">
            <h2 className="sub-header font-bold mx-auto text-center">
              ML Model Improvement
            </h2>
            <h3 className="pt-2 md:pt-4 text-[0.6em] md:text-[0.65em]">
              Continuously improve the crop disease detection system by training it with more data to identify a wider range of diseases.
            </h3>
          </div>
        </div>
        <div
          className="group relative h-[15rem] w-full md:h-full md:w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
        >
          <img
            src={login}
            alt="login"
            className="h-full w-full object-cover hover:cursor-pointer group-hover:scale-125 transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-[100%] left-[50%] cursor-pointer transform -translate-x-[50%] -translate-y-[4.5rem] group-hover:top-[50%] group-hover:-translate-y-[50%] h-[95%] w-[95%] bg-[#2e5b3cc8] text-white text-[1.7rem] md:text-[1.8rem] p-6 flex flex-col items-start justify-start rounded-lg hover:rounded-md transition-all duration-700 ease-in-out">
            <h2 className="sub-header font-bold mx-auto text-center">
              User Authentication
            </h2>
            <h3 className="pt-2 md:pt-4 text-[0.6em] md:text-[0.65em]">
             Provide secure login mechanisms for users, ensuring privacy and data security.            
            </h3>
          </div>
        </div>
        </div>
      </section>
  )
}

export default Target
