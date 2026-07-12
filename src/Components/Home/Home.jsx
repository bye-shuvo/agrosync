import React, { useEffect, useRef , useState} from "react";
import "../../styles/home.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Chatbot from "../Bot/Chatbot.jsx";
import Newsletter from "./Newsletter.jsx";
import Hero from "./Hero.jsx";
import Features from "./Features.jsx";
import About from "./About.jsx";
import Target from "./Target.jsx";
import Cta from "./Cta.jsx";

const Home = () => {
  const [isVisible , setIsVisible] = useState(false);
  const [lastScrollY , setLastScrollY] = useState(0);
  const [isClicked , setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () =>{
      if(lastScrollY > 740){
        setIsVisible(true);
      }else{
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    }
    window.addEventListener("scroll" , handleScroll);

    return () => window.removeEventListener("scroll" , handleScroll);
  })

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
    <div id="landing-page" className="scroll-smooth max-w-[100vw]">
      <Navbar hero = {scrollToLanding} about = {scrollToAbout} tools = {scrollToFeatures} footer = {scrollToFooter} newsLetter={scrollToNewsletter}/>
      <Hero landingRef={landingRef} scrollToAbout={scrollToAbout} scrollToFeatures={scrollToFeatures}/>
      <Features featuresRef={featuresRef} />
      <About aboutRef={aboutRef}/>
      <Target />
      <Cta ctaRef={ctaRef} scrollToFeatures={scrollToFeatures}/>
      < Newsletter ref={newsLetterRef}/>
      <button
        onClick={scrollToLanding}
        className={`${
          isVisible ? "" : "translate-x-[150%]"
        } flex justify-center items-center z-20 fixed top-[60%] right-4 h-[4rem] w-[2.5rem] p-[1.2rem] bg-[#FFD700] text-[1.1rem] font-extrabold text-[#2e5b3c] rounded-lg border-t-4 border-[#253d02] hover:bg-[#2e5b3c] hover:text-[#FFD700] hover:border-b-4 hover:border-[#FFD700] hover:border-t-0 transition-all duration-300 ease-in-out`}
      >
        <i className="fa-solid fa-angles-up"></i>
      </button>
      <button
        onClick={() => setIsClicked(true)}
        className={`${
          isVisible ? "" : "translate-x-[150%]"
        } flex justify-center items-center z-20 fixed top-[70%] right-4 h-[3rem] w-[3rem] p-[1.2rem] bg-[#FFD700] text-[1.1rem] font-extrabold text-[#2e5b3c] rounded-full hover:bg-[#2e5b3c] hover:text-[#FFD700] transition-all duration-300 ease-in-out`}
      >
        <i className="fa-solid fa-robot scale-150"></i>
      </button>
      <Footer ref= {footerRef}/>
      <Chatbot clicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
};

export default Home;
