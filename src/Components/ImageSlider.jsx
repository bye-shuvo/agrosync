import React, { useEffect, useState } from "react";

const ImageSlider = ({ seedQuantity, selectedCrop, inputValue, selectedUnit , cropCategory}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/src/images/features-bg.png",
    "/src/images/newsletter-bg.jpg",
    "/src/images/photo_2_agri.jpeg",

  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  //handles automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative w-full h-[20rem] md:w-[55%] md:h-full">
        {/*Calculation Div*/}
        {seedQuantity > 0 && (
          <div id="showData" className="z-50 absolute top-0 left-0 w-[100%] flex flex-col justify-center items-center h-full p-6 bg-[rgba(0,0,0,0.65)] rounded-lg">
            <h3 className="text-center text-3xl md:text-4xl text-white font-bold">Your Calculation</h3>
            <div className="md:mt-4 text-white md:text-2xl">
              <p className="font-bold">Your Crop: <span className="font-normal md:text-2xl">{selectedCrop}</span></p>
              <p className="font-bold">Your Land Area: <span className="font-normal md:text-2xl">{inputValue} {selectedUnit}</span></p>
              <p className="font-bold">Required Quantity: <span className="font-normal md:text-2xl">{seedQuantity} {(cropCategory === "plants") ? "Plants" : "Kg"}</span></p>
            </div>
            <p className="md:text-lg text-white mt-4">Note: These are approximate values. Consult local agricultural experts for accuracy.</p>
          </div>)
        }
      {/* Carousel Wrapper */}
      <div className="relative h-full overflow-hidden rounded-lg md:h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="block w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide
                ? "bg-white"
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slider Controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default ImageSlider;
