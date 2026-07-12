import React, { useState, useRef, useEffect, Fragment } from "react";
import { GoogleGenAI } from "@google/genai";

const Chatbot = ({ clicked, setIsClicked }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isChatbotExpanded, setIsChatbotExpanded] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello!👋 \n Welcome to AGROBOT. \n How can I help you today?",
    },
  ]);

  const scrollToEnd = useRef(null);

  const genAI = new GoogleGenAI({ apiKey: import.meta.env.VITE_CHATBOT_KEY });
  //system instruction for the AgroSync Assistant
  const agrosyncSystemInstruction = `You are the official AgroSync Assistant for the AgroSync web application (agrosyncbd.vercel.app). Your purpose is to help users with their agricultural queries and guide them to the platform's digital tools.

CRITICAL ENGAGEMENT RULES:
- Never mention your underlying AI model, architecture, or technology provider under any circumstances.
- Never mention or link to GitHub repositories, source code, or development details.
- Keep all responses concise, brief, and directly to the point. Avoid long text blocks.

STRICT KNOWLEDGE BOUNDARY:
- You only answer questions regarding agriculture, crop care, farming practices, and AgroSync's core platform tools:
  1. Rice Leaf Disease Detection (via image upload).
  2. The Seed Calculator tool.
- If a query is completely unrelated to farming, agriculture, or the website (e.g., entertainment, general coding, politics), politely refuse in one short sentence: "I can only assist you with agricultural topics and AgroSync platform tools."

PERSONALIZATION & PLATFORM TIE-IN:
- Provide brief, actionable agricultural advice tailored to the user's specific crop or land size context.
- ALWAYS end your brief advice by connecting it back to an AgroSync tool:
  * If they ask about crop diseases or plant health, give a 1-2 sentence tip, then tell them to upload an image to AgroSync's Crop Disease Detector for a precise diagnosis.
  * If they ask about planting density, spacing, or yields, give a quick standard metric, then direct them to use the AgroSync Seed Calculator to get exact amounts for their field size.`;
  const promptGeneration = async (query) => {
    try {
      const interaction = await genAI.interactions.create({
        model: "gemini-3.5-flash",
        input: query,
        system_instruction: agrosyncSystemInstruction,
      });

      setMessages((prev) => {
        prev.pop();
        return [
          ...prev,
          {
            sender: "bot",
            text: interaction.output_text,
          },
        ];
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
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    setMessages((prev) => [...prev, { sender: "user", text: trimmedInput }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: "Thinking..." }]);
      promptGeneration(trimmedInput);
    }, 500);
  };

  useEffect(() => {
    if (scrollToEnd.current) {
      scrollToEnd.current.scrollTop = scrollToEnd.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (clicked) {
      setIsOpen(true);
    }
  }, [clicked]);

  return (
    <div className="fixed bottom-14 right-4 flex items-center justify-center z-50">
      {isOpen && (
        <div
          className={`flex items-center justify-center z-50 rounded-lg bg-white shadow-slate-500 shadow-lg ${isChatbotExpanded ? "md:w-[80vw]" : "md:w-[25rem]"} transition-all ease-in-out duration-300`}
        >
          <div className="bg-white rounded-lg overflow-hidden w-full relative h-full md:h-auto flex flex-col">
            <header className="flex items-center justify-between border-b-[1.5px] border-slate-400 relative bg-[#2e5b3c] text-white p-2 px-8">
              <button
                onClick={() => {
                  setIsChatbotExpanded(!isChatbotExpanded);
                }}
                className="hover:text-[#FFD700] transition ease-in-out"
                aria-label="Expand-Chatbot"
              >
                <i class="fa-solid fa-up-right-and-down-left-from-center text-2xl"></i>
              </button>
              <p className="md:text-[2.8rem] font-bold">AGROBOT</p>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsClicked(false);
                }}
                className="hover:text-red-500 transition ease-in-out"
                aria-label="Close-Chatbot"
              >
                <i className="fas fa-times text-3xl"></i>
              </button>
            </header>
            <div
              ref={scrollToEnd}
              className={`${isChatbotExpanded ? "h-[65vh]" : "min-h-[60vh] md:min-h-[23rem] md:max-h-72"} w-full overflow-y-auto p-4 pt-0 pb-0 scroll-m-0 scroll-smooth transition-all ease-in-out duration-300`}
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
                    <i className="fa-solid fa-user text-[2rem] text-[#2e5b3c]"></i>
                  ) : (
                    <i className="fa-solid fa-robot text-[2rem] text-[#2e5b3c]"></i>
                  )}
                  <p
                    className={`max-w-[75%] min-h-6 rounded-md p-3 text-lg  ${
                      message.sender === "user"
                        ? "mr-2 bg-gray-200 text-gray-800"
                        : "ml-2 bg-[#2e5b3c] text-white"
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    input !== null && handleSendMessage();
                  }
                }}
                className="flex-1 bg-[#2e5b3c]/10 focus:border-b-[3px] focus:border-[#2e5b3c] rounded-lg text-lg px-4 py-3 outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="flex items-center justify-center text-[#2e5b3c] hover:text-[#2e5b3c] p-4 transition-all ease-in-out"
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
