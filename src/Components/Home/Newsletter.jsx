import React, { forwardRef, useState } from "react";

const Newsletter = forwardRef((props, Ref) => {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [name , setName] = useState("");

  const mailsend = async (e) => {
    e.preventDefault();
    (name.length === 0 || email.length === 0) ? setIsVisible(true) : setIsVisible(false)
    let url = "https://mail-sender-lime.vercel.app/api/send";
    let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        to: email,
      }),
    }
    try {
      const response = await fetch(url, option);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  } 

  return (
    <section
      id="newsletter-section"
      ref={Ref}
      className="md:h-[50vh] flex justify-center items-center overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center p-6 md:p-0 md:relative z-10 max-w-5xl mx-auto text-white">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-4 text-[#2e5b3c]">
          Stay Informed with Agricultural Insights
        </h2>
        <p className="text-lg text-center md:text-xl mb-6 text-[#2e5b3c]">
          Sign up for our newsletter and get the latest updates, tips, and news
          in agriculture.
        </p>
        {!isVisible && <h2 className="text-center text-3xl md:text-5xl font-bold mb-4 text-[#2e5b3c]">Thank you for subscribing!</h2>}
        {isVisible && 
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="w-[18rem] px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-slate-700 bg-[#2e5b3c28]"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-[18rem] px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-slate-700 bg-[#2e5b3c28]"
          />
          <button
            onClick={mailsend}
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
          >
            Subscribe Now
          </button>
        </form>} 

      </div>
    </section>
  );
});

export default Newsletter;
