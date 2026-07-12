import React from 'react'

const Cta = ({ctaRef, scrollToFeatures}) => {
  return (
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
  )
}

export default Cta
