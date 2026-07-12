import React from 'react'

const Hero = ({landingRef , scrollToAbout , scrollToFeatures}) => {
  return (
      <section
        id="hero-section"
        ref={landingRef}
        className="bg-[url(/src/images/agri_bg.jpeg)] bg-cover bg-no-repeat bg-center md:bg-center h-[93vh] md:min-h-screen flex flex-col md:justify-evenly items-center"
      >
        <div className="mt-[50%] md:mt-10 flex flex-col items-center justify-start md:items-start md:max-w-[80%]">
          <h1
            id="headline"
            className="text-3xl leading-[2.5rem] md:leading-[5rem] text-[#ffffffea] md:text-7xl max-w-[80%] md:max-w-[80%] font-extrabold"
          >
            Empowering Farmers with Innovative Agri-Tech Solutions
          </h1>
          <p className="sub-header w-[80%] md:w-[55%] text-[1em] md:text-[1.8em] md:leading-[2rem] font-light text-[#FFD700] mt-3 md:mt-5">
            Detect crop diseases, calculate seed requirements and get instant
            support with our AI chatbot.
          </p>
        </div>
        <div
          id="buttons"
          className="flex justify-around md:justify-center items-center md:w-[90%] w-full"
        >
          <button
            onClick={scrollToFeatures}
            className="bg-[#FFD700] w-[10rem] md:w-[20rem] p-[1rem] md:mr-[10rem] text-[0.8rem] md:text-[1.3rem] font-extrabold text-[#2e5b3c] rounded-lg border-r-4 border-[#2e5b3c] hover:bg-[#2e5b3c] hover:text-[#FFD700] hover:border-l-4 hover:border-[#FFD700] hover:border-r-0 transition-all duration-300 ease-in-out"
          >
            EXPLORE TOOLS
          </button>
          <button
            onClick={scrollToAbout}
            className="bg-[#FFD700] w-[10rem] md:w-[20rem] p-[1rem] text-[0.8rem] md:text-[1.3rem] font-extrabold text-[#2e5b3c] rounded-lg border-r-4 border-[#2e5b3c] hover:bg-[#2e5b3c] hover:text-[#FFD700] hover:border-l-4 hover:border-[#FFD700] hover:border-r-0 transition-all duration-300 ease-in-out"
          >
            LEARN MORE
          </button>
        </div>
      </section>
  )
}

export default Hero
