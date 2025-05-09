import React, { useState, useRef , useEffect , Fragment} from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = ({clicked}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
     {
       sender: "bot",
       text: "Hello!👋 \n Welcome to AGROBOT. \n How can I help you today?",
     },
   ]);
    const [isVisible , setIsVisible] = useState(false);
    const [lastScrollY , setLastScrollY] = useState(0);
   
     const handleScroll = () =>{
       if(lastScrollY > 740){
         setIsVisible(true);
       }else{
         setIsVisible(false);
       }
       setLastScrollY(window.scrollY);
     }
     window.addEventListener("scroll" , handleScroll);

   const initialFocus = useRef(null);
   const scrollToEnd = useRef(null);
 
   const promptGeneration = async () => {
     const apiKey = import.meta.env.VITE_CHATBOT_KEY;
     const genAI = new GoogleGenerativeAI(apiKey);
     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
 
     try {
       let prompt = input;
       const result = await model.generateContent(prompt);
       const botResponse = result.response.text();
 
       setMessages((prev) => {
         const updatedmessages = [...prev];
         updatedmessages[updatedmessages.length - 1] = {
           sender: "bot",
           text: botResponse,
         };
         return updatedmessages;
       });
     } catch (error) {
       setMessages((prev) => [
         ...prev,
         {
           sender: "bot",
           text: "Some Error occured!!! \n Please try again later.",
         },
       ]);
       console.log(error.message);
     }
   };
 
   const handleSendMessage = () => {
     setMessages((prev) => [...prev, { sender: "user", text: input }]);
 
     setTimeout(() => {
       setMessages((prev) => [
         ...prev,
         { sender: "bot", text: "Thinking..." },
       ]);
       setInput("");
       if (input.trim() !== "") {
         promptGeneration();
       }
     }, 500);
   };
 
   useEffect(() => {
     if (scrollToEnd.current) {
       scrollToEnd.current.scrollTop = scrollToEnd.current.scrollHeight;
     }
   }, [messages]);
   
   useEffect(() => {
    if(clicked){
      setIsOpen(true);
    }
   },[clicked]);

  return (
    <div className="fixed bottom-20 right-4 flex items-center justify-center z-50">
      {!isOpen && (
        <button
          id="chatbot-btn"
          className={`${
            isVisible ? "" : "translate-x-[150%]"
          } h-[3.5rem] w-[3.5rem] flex items-center justify-center border-[#FFD700] border-[3px] rounded-full text-[#FFD700] hover:bg-[#FFD700] hover:text-white transition-all ease-in-out duration-200`}
          onClick={() =>{setIsOpen(true); initialFocus.current.click()}}
          aria-label="Open Chatbot"
        >
          <i className="fa-solid fa-message text-3xl"></i>
        </button>
      )}

      {isOpen && (
        <div className="flex items-center justify-center z-50 rounded-lg bg-white shadow-slate-500 shadow-lg md:w-[25rem] tramsition-all ease-in-out duration-200">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-md md:max-w-lg lg:max-w-xl relative h-full md:h-auto flex flex-col">
            <header className="flex items-center justify-center border-b-[1.5px] border-slate-400 relative bg-violet-600 text-white p-2">
              <p className="md:text-[2.8rem] font-bold">AGROBOT</p>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-red-500 focus:outline-none transition ease-in-out"
                aria-label="Close Chatbot"
              >
                <i className="fas fa-times text-3xl"></i>
              </button>
            </header>
            <div
              ref={scrollToEnd}
              className={`min-h-[60vh] md:min-h-[23rem] md:max-h-72 w-full overflow-y-auto p-4 pt-0 pb-0 scroll-m-0 scroll-smooth`}
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-end ${
                    message.sender === "user"
                      ? "flex-row-reverse"
                      : "justify-start"
                  } box-border p-2 w-full h-auto`}
                >
                  {message.sender === "user" ? (
                    <i className="fa-solid fa-user text-[2rem] text-violet-600"></i>
                  ) : (
                    <i className="fa-solid fa-robot text-[2rem] text-violet-600"></i>
                  )}
                  <p
                    className={`max-w-[75%] min-h-6 rounded-md p-3 text-lg  ${
                      message.sender === "user"
                        ? "mr-2 bg-gray-200 text-gray-800"
                        : "ml-2 bg-violet-600 text-white"
                    }`}
                  >
                    {message.text.split("\n").map((line, idx) => (
                      <Fragment key={idx}>
                        {line}
                        <br />
                      </Fragment>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2 border-t-[1.5px] border-slate-400 pt-2 p-4">
              <input
                id="chat-input"
                type="text"
                name="input"
                placeholder="Enter Prompt"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className="flex-1 bg-violet-100 focus:border-b-[3px] focus:border-violet-600 rounded-lg text-lg px-4 py-3 outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="flex items-center justify-center text-violet-600 hover:text-violet-800 p-4"
              >
                <i className="fa-solid fa-paper-plane text-3xl"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
