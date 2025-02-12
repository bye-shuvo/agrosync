import React, { useRef , useState} from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Chatbot from "./Chatbot.jsx";
import Newsletter from "./Newsletter.jsx";

const Home = () => {
  const [isVisible , setIsVisible] = useState(false);
  const [lastScrollY , setLastScrollY] = useState(0);
  const [isClicked , setIsClicked] = useState(false);

  const handleScroll = () =>{
    if(lastScrollY > 740){
      setIsVisible(true);
    }else{
      setIsVisible(false);
    }
    setLastScrollY(window.scrollY);
  }
  window.addEventListener("scroll" , handleScroll);

  const aboutRef = useRef();
  const featuresRef = useRef();
  const landingRef = useRef();
  const newsLetterRef = useRef();
  const ctaRef = useRef();
  const footerRef = useRef();

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToLanding = () => {
    landingRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToNewsletter = () => {
    newsLetterRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="landing-page" className="scroll-smooth">
      <Navbar hero = {scrollToLanding} about = {scrollToAbout} tools = {scrollToFeatures} footer = {scrollToFooter} newsLetter={scrollToNewsletter}/>
      <section
        id="hero-section"
        ref={landingRef}
        className="bg-[url(/src/images/agri_bg.jpeg)] bg-cover bg-no-repeat bg-center md:bg-center h-[93vh] md:h-screen md:w-screen flex flex-col md:justify-start items-center"
      >
        <div className="relative top-[20%] flex flex-col items-center justify-start md:items-start md:max-w-[80%]">
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
          className="relative top-[50%] md:top-[40%] flex justify-around md:justify-center items-center md:w-[90%] w-full"
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
      <section
        id="features-section"
        ref={featuresRef}
        className="md:p-20 relative h-auto md:h-screen md:w-screen grid grid-cols-1 md:grid-cols-3 md:gap-14 gap-10 place-items-center"
      >
        <img
          src="/grass-line.png"
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
          className="group relative md:mt-20 h-[50vh] md:h-[80%] w-[90%] md:w-[100%] rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
        >
          <img
            src="/src/images/magnify.jpeg"
            alt="magnifying-glass"
            className="h-full w-full object-cover hover:cursor-pointer group-hover:scale-125 transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-[100%] left-[50%] cursor-pointer transform -translate-x-[50%] -translate-y-[18%] group-hover:top-[50%] group-hover:-translate-y-[50%] h-[95%] w-[95%] bg-[#2e5b3cc8] text-white text-[1.7rem] md:text-[1.8rem] p-6 flex flex-col items-start justify-start rounded-2xl hover:rounded-lg transition-all duration-700 ease-in-out">
            <h2 className="sub-header font-bold mx-auto text-center text-[0.9em] md:text-[1em]">
              Crop Disease Detection
            </h2>
            <h3 className="pt-2 md:pt-4 pb-2 md:pb-4 text-[0.55em] md:text-[0.65em]">
              Our Agri-Tech tool uses AI to identify crop diseases and provide
              instant support.
            </h3>
            <div className="pb-[2rem] text-[0.55em] md:text-[0.65em] leading-[1.2rem] md:leading-[1.5rem]">
              <span className="text-[1.4em] md:text-[1.5em] text-[#FFD700] font-bold">
                Benifits:
              </span>
              <div className="pt-2">
                <img
                  src="/src/images/arrow-right.svg"
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Increased efficiency{" "}
              </div>
              <div className="pt-2">
                <img
                  src="/src/images/arrow-right.svg"
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Improved crop yields{" "}
              </div>
              <div className="pt-2">
                <img
                  src="/src/images/arrow-right.svg"
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Reduced losses{" "}
              </div>
              <div className="pt-2">
                <img
                  src="/src/images/arrow-right.svg"
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Enhanced farm profitability
              </div>
            </div>
            <button
              className="bg-[#FFD700] w-[100%] p-[0.6rem] md:p-[1rem] text-[1rem] md:text-[1.1rem] font-extrabold text-[#2e5b3c] rounded-lg border-r-4 border-[#2e5b3c] hover:bg-[#2e5b3c] hover:text-[#FFD700] hover:border-l-4 hover:border-[#FFD700] hover:border-r-0 transition-all duration-300 ease-in-out"
            >
              <Link className="btn block h-full w-full" to="/detector">Try Now</Link>
            </button>
          </div>
        </div>
        <div
          id="AI-chatbot"
          className="group relative md:mt-20 h-[50vh] md:h-[80%] w-[90%] md:w-[100%] rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
        >
          <img
            src="/src/images/chat-bubble.png"
            alt="magnifying-glass"
            className="h-full w-full object-cover hover:cursor-pointer group-hover:scale-125 transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-[100%] left-[50%] cursor-pointer transform -translate-x-[50%] -translate-y-[18%] group-hover:top-[50%] group-hover:-translate-y-[50%] h-[95%] w-[95%] bg-[#2e5b3cc8] text-white text-[1.7rem] md:text-[1.8rem] p-6 flex flex-col items-start justify-start rounded-2xl hover:rounded-lg transition-all duration-700 ease-in-out">
            <h2 className="sub-header font-bold mx-auto text-center text-[0.9em] md:text-[1em]">
              AI Chatbot
            </h2>
            <h3 className="pt-2 md:pt-4 pb-2 md:pb-4 text-[0.55em] md:text-[0.65em]">
              Get instant answers to your agricultural queries with our
              intelligent chatbot.
            </h3>
            <div className="pb-[2rem] text-[0.55em] md:text-[0.65em] leading-[1.2rem] md:leading-[1.5rem]">
              <span className="text-[1.4em] md:text-[1.5em] text-[#FFD700] font-bold">
                Benifits:
              </span>
              <div className="pt-2">
                <img
                  src="/src/images/arrow-right.svg"
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Immediate assistance
              </div>
              <div className="pt-2">
                <img
                  src="/src/images/arrow-right.svg"
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Improved decision-making
              </div>
              <div className="pt-2">
                <img
                  src="/src/images/arrow-right.svg"
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Increased confidence in farming
              </div>
              <div className="pt-2">
                <img
                  src="/src/images/arrow-right.svg"
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Understand Native language
              </div>
            </div>
            <button
              onClick={() => setIsClicked(!isClicked)}
              className="bg-[#FFD700] w-[100%] p-[0.6rem] md:p-[1rem] text-[1rem] md:text-[1.1rem] font-extrabold text-[#2e5b3c] rounded-lg border-r-4 border-[#2e5b3c] hover:bg-[#2e5b3c] hover:text-[#FFD700] hover:border-l-4 hover:border-[#FFD700] hover:border-r-0 transition-all duration-300 ease-in-out"
            >
              Chat Now
            </button>
          </div>
        </div>
        <div
          id="seed-calculator"
          className="group relative md:mt-20 h-[50vh] md:h-[80%] w-[90%] md:w-[100%] rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
        >
          <img
            src="/src/images/seeds.png"
            alt="magnifying-glass"
            className="h-full w-full object-cover hover:cursor-pointer group-hover:scale-125 transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-[100%] left-[50%] cursor-pointer transform -translate-x-[50%] -translate-y-[18%] group-hover:top-[50%] group-hover:-translate-y-[50%] h-[95%] w-[95%] bg-[#2e5b3cc8] text-white text-[1.7rem] md:text-[1.8rem] p-6 flex flex-col items-start justify-start rounded-2xl hover:rounded-lg transition-all duration-700 ease-in-out">
            <h2 className="sub-header font-bold mx-auto text-center text-[0.9em] md:text-[1em]">
              Seed Calculator
            </h2>
            <h3 className="pt-2 md:pt-4 pb-2 md:pb-4 text-[0.55em] md:text-[0.65em]">
              Calculate the optimal seed quantity for your field size and crop
              type.
            </h3>
            <div className="pb-[2rem] text-[0.55em] md:text-[0.65em] leading-[1.2rem] md:leading-[1.5rem]">
              <span className="text-[1.4em] md:text-[1.5em] text-[#FFD700] font-bold">
                Benifits:
              </span>
              <div className="pt-2">
                <img
                  src="/src/images/arrow-right.svg"
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Increased yield
              </div>
              <div className="pt-2">
                <img
                  src="/src/images/arrow-right.svg"
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Reduced wastage of seeds
              </div>
              <div className="pt-2">
                <img
                  src="/src/images/arrow-right.svg"
                  alt="arrow"
                  className="inline-block h-[1.4rem] w-auto"
                />{" "}
                Improved farm economics
              </div>
              <div className="pt-2">
                <img
                  src="/src/images/arrow-right.svg"
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
      <section
        ref={aboutRef}
        id="about-section"
        className="relative p-10 md:p-24 h-auto md:h-screen md:w-screen flex flex-col md:flex-row items-start justify-center gap-4 md:gap-16"
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
            <i className="fa-regular fa-circle-play absolute top-12 md:top-16 left-[42%] text-4xl md:text-6xl text-[#FFD700]"></i>
          </div>
          <img
            className="h-full w-full object-cover hover:scale-125 md:hover:scale-110 transition-all duration-700 ease-in-out"
            src="/src/images/drone-in-agri.png"
            alt="about-bg"
          />
        </div>
        <div
          id="headers"
          className="md:w-[60%] md:h-[85%] flex flex-col items-start justify-center md:gap-4 text-[1.5rem]"
        >
          <h3 className="text-center font-bold text-[#2e5b3c] flex items-center justify-center text-[0.9em] md:text-[1em] mt-2 md:mt-0">
            {" "}
            <img
              className="h-[0.7rem] md:h-[0.8rem] w-auto mr-2"
              src="/src/images/crop-arrow.png"
              alt="crop-arrow"
            />{" "}
            Why Choose Us?
          </h3>
          <h2 id="about-subtitle" className="md:text-5xl text-[#2e5b3c]">
            Our app is designed to empower farmers with innovative agri-tech
            solutions.
          </h2>
          <div className="md:pb-8 text-[0.7em] md:text-[0.8em] leading-[1rem] md:leading-[1.5rem]">
            <div className="pt-2">
              <img
                src="/src/images/arrow-right.svg"
                alt="arrow"
                className="inline-block h-[1.4rem] w-auto pr-2"
              />{" "}
              Detect Crop Diseases
            </div>
            <div className="pt-2">
              <img
                src="/src/images/arrow-right.svg"
                alt="arrow"
                className="inline-block h-[1.4rem] w-auto pr-2"
              />{" "}
              Calculate Seed Requirements
            </div>
            <div className="pt-2">
              <img
                src="/src/images/arrow-right.svg"
                alt="arrow"
                className="inline-block h-[1.4rem] w-auto pr-2"
              />{" "}
              Instant Support
            </div>
          </div>
        </div>
        <div
          id="causes"
          className="relative right-5 md:absolute md:top-[70%] md:left-[20%] md:p-9 text-sm md:text-[1.2rem] text-white rounded-lg bg-[#2e5b3c] h-[15rem] md:h-[28%] w-[90vw] md:w-[70%] flex md:justify-center md:items-start overflow-y-hidden overflow-x-scroll"
        >
          <div className="items border-r-2 border-dotted border-[#FFD700] md:w-[30%] p-3">
            <h3 className="small-header group cursor-pointer text-[#FFD700] font-bold text-[1.2em] mb-2 md:mb-4 relative">
              <img
                className="absolute opacity-0 group-hover:opacity-100 bottom-[-0.8rem] right-0 transition-all duration-300 ease-in-out"
                src="/src/images/border-below.png"
                alt="border-below"
              />
              Increased Efficiency
            </h3>{" "}
            <p className="text-[0.9em] md:leading-6">
              Streamline your farming operations with our time-saving tools.
            </p>
          </div>
          <div className="items border-r-2 border-dotted border-[#FFD700] w-[30%] p-3">
            <h3 className="small-header group cursor-pointer text-[#FFD700] font-bold text-[1.2em] mb-2 md:mb-4 relative">
              <img
                className="absolute opacity-0 group-hover:opacity-100 bottom-[-0.8rem] right-0 transition-all duration-300 ease-in-out"
                src="/src/images/border-below.png"
                alt="border-below"
              />
              Reduced Costs
            </h3>{" "}
            <p className="text-[0.9em] md:leading-6">
              {" "}
              Prevent financial losses due to crop diseases and optimize seed
              usage.
            </p>
          </div>
          <div className="items border-r-2 border-dotted border-[#FFD700] w-[30%] p-3">
            <h3 className="small-header group cursor-pointer text-[#FFD700] font-bold text-[1.2em] mb-2 md:mb-4 relative">
              <img
                className="absolute opacity-0 group-hover:opacity-100 bottom-[-0.8rem] right-0 transition-all duration-300 ease-in-out"
                src="/src/images/border-below.png"
                alt="border-below"
              />
              Improved Yields
            </h3>{" "}
            <p className="text-[0.9em] md:leading-6">
              Make informed decisions for better crop health and higher yields.
            </p>
          </div>
          <div className="items w-[30%] p-3">
            <h3 className="small-header group cursor-pointer text-[#FFD700] font-bold text-[1.2em] mb-2 md:mb-4 relative">
              <img
                className="absolute opacity-0 group-hover:opacity-100 bottom-[-0.8rem] right-0 transition-all duration-300 ease-in-out"
                src="/src/images/border-below.png"
                alt="border-below"
              />
              Sustainable Farming
            </h3>{" "}
            <p className="text-[0.9em] md:leading-6">
              Contribute to sustainable practices by utilizing AI for efficient
              resource management.
            </p>
          </div>
        </div>
      </section>
      <section
        id="target-section"
        className="md:p-20 pb-10 md:pb-16 md:relative h-auto md:h-screen md:w-screen flex flex-col md:flex-row items-center md:items-start justify-between"
      >
        <h2
          id="target-title"
          className="text-6xl md:text-9xl md:w-[30%] md:h-full md:top-[5%] md:left-[35%] text-[#2e5b3c] font-extrabold text-center justify-self-center text-transparent bg-[url(/src/images/CTA-img.jpeg)] bg-no-repeat bg-clip-text"
        >
          Our Vision for the Future
        </h2>
        <div id="cards" className="md:relative md:pt-20 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 w-[90vw] md:w-[60%] h-full gap-10 place-items-center">
        <p className="small-header text-center md:absolute md:top-[-5px] left-0 text-lg md:text-2xl font-bold text-gray-700 mt-10 md:mt-0 md:mb-10">
          We're committed to driving innovation in agriculture. Here's what we aim to achieve in the coming years.
        </p>
        <div
          className="group relative md:h-full md:w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
        >
          <img
            src="/src/images/precise-farming.png"
            alt="precision-farming"
            className="h-full w-full object-cover hover:cursor-pointer group-hover:scale-125 transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-[100%] left-[50%] cursor-pointer transform -translate-x-[50%] -translate-y-[35%] group-hover:top-[50%] group-hover:-translate-y-[50%] h-[95%] w-[95%] bg-[#2e5b3cc8] text-white text-[1.7rem] md:text-[1.8rem] p-6 flex flex-col items-start justify-start rounded-2xl hover:rounded-lg transition-all duration-700 ease-in-out">
            <h2 className="sub-header font-bold mx-auto text-center">
              Weather Forecasting
            </h2>
            <h3 className="pt-2 md:pt-4 pb-4 text-[0.6em] md:text-[0.65em]">
                Future versions can include real-time weather forecasting and its impact on crop health.
            </h3>
          </div>
        </div>
        <div
          className="group relative md:h-full md:w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
        >
          <img
            src="/src/images/Market_trends.png"
            alt="advanced-ai-chatbots"
            className="h-full w-full object-cover hover:cursor-pointer group-hover:scale-125 transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-[100%] left-[50%] cursor-pointer transform -translate-x-[50%] -translate-y-[35%] group-hover:top-[50%] group-hover:-translate-y-[50%] h-[95%] w-[95%] bg-[#2e5b3cc8] text-white text-[1.7rem] md:text-[1.8rem] p-6 flex flex-col items-start justify-start rounded-2xl hover:rounded-lg transition-all duration-700 ease-in-out">
            <h2 className="sub-header font-bold mx-auto text-center">
            Market Prices and Trends
            </h2>
            <h3 className="pt-2 md:pt-4 pb-4 text-[0.6em] md:text-[0.65em]">
              Incorporating data on market prices and trends for different crops would help farmers make better financial decisions.
            </h3>
          </div>
        </div>
        <div
           className="group relative md:h-full md:w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
        >
          <img
            src="src/images/ml.jpg"
            alt="satelite-monitoring"
            className="h-full w-full object-cover hover:cursor-pointer group-hover:scale-125 transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-[100%] left-[50%] cursor-pointer transform -translate-x-[50%] -translate-y-[35%] group-hover:top-[50%] group-hover:-translate-y-[50%] h-[95%] w-[95%] bg-[#2e5b3cc8] text-white text-[1.7rem] md:text-[1.8rem] p-6 flex flex-col items-start justify-start rounded-2xl hover:rounded-lg transition-all duration-700 ease-in-out">
            <h2 className="sub-header font-bold mx-auto text-center">
              ML Model Improvement
            </h2>
            <h3 className="pt-2 md:pt-4 text-[0.6em] md:text-[0.65em]">
              Continuously improve the crop disease detection system by training it with more data to identify a wider range of diseases.
            </h3>
          </div>
        </div>
        <div
          className="group relative h-[11rem] md:h-full w-full md:w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
        >
          <img
            src="src/images/login.png"
            alt="global-expansion"
            className="h-full w-full object-cover hover:cursor-pointer group-hover:scale-125 transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-[100%] left-[50%] cursor-pointer transform -translate-x-[50%] -translate-y-[35%] group-hover:top-[50%] group-hover:-translate-y-[50%] h-[95%] w-[95%] bg-[#2e5b3cc8] text-white text-[1.7rem] md:text-[1.8rem] p-6 flex flex-col items-start justify-start rounded-2xl hover:rounded-lg transition-all duration-700 ease-in-out">
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
      <section
        ref={ctaRef}
        id="cta-section"
        className="z-10 md:h-[50vh] w-full relative text-white py-16 px-6 text-center flex justify-center items-center overflow-hidden bg-[url(/src/images/CTA-img.jpeg)] bg-fixed bg-cover bg-no-repeat bg-center"
      >
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="sub-header text-center text-3xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Farming Experience?
          </h2>
          <p className="text-lg md:text-2xl mb-6">
            Join thousands of farmers using our tools to maximize productivity.
          </p>
          <button onClick={scrollToFeatures} className="bg-white text-green-600 hover:bg-green-700 hover:text-white font-semibold py-3 px-8 rounded-md transition duration-300">
            Get Started Now
          </button>
        </div>
      </section>
      < Newsletter ref={newsLetterRef}/>
      <button
        onClick={scrollToLanding}
        className={`${
          isVisible ? "" : "translate-x-[150%]"
        } flex justify-center items-center z-20 fixed top-[60%] right-4 h-[4rem] w-[2.5rem] p-[1.2rem] bg-[#FFD700] text-[1.1rem] font-extrabold text-[#2e5b3c] rounded-lg border-t-4 border-[#253d02] hover:bg-[#2e5b3c] hover:text-[#FFD700] hover:border-b-4 hover:border-[#FFD700] hover:border-t-0 transition-all duration-300 ease-in-out`}
      >
        <i className="fa-solid fa-angles-up"></i>
      </button>
      <Footer ref= {footerRef}/>
      <Chatbot clicked={isClicked} />
    </div>
  );
};

export default Home;
