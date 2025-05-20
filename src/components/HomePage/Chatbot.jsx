import React, { useState, useRef, useEffect } from "react";
import { Send, X, MessageSquare, Loader } from "lucide-react";

const WhatsAppChatbot = () => {
  // Replace with your actual WhatsApp number including country code (no spaces or special chars)
  const whatsappNumber = "7000863918"; 
  
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi there! Welcome to Brandsmashers Tech. How can we help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Function to handle sending messages
  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    // Add user message to chat interface
    const userMessage = {
      sender: "user",
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate brief delay
    setTimeout(() => {
      // Add response message
      const botResponse = {
        sender: "bot",
        text: "Thank you for your message! Redirecting you to WhatsApp to continue the conversation...",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
      
      // Open WhatsApp with the provided number and pre-filled message
      setTimeout(() => {
        const encodedText = encodeURIComponent(inputText);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
        setInputText("");
      }, 1000);
    }, 800);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);
  
  // Alternative direct WhatsApp redirect without chat interface
  const openWhatsAppDirect = () => {
    if (inputText.trim() === "") {
      // If no message, just open the chat
      window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    } else {
      // If there's a message, include it
      const encodedText = encodeURIComponent(inputText);
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
    }
    setInputText("");
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {/* Chat bubble */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
        >
          <MessageSquare size={28} className="text-white" />
          {/* <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span> */}
        </button>
      )}

      {/* Chat window */}
      {isChatOpen && (
        <div className="w-80 sm:w-96 h-96 bg-[#111827] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-700">
          {/* Header */}
          <div className="bg-green-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <img
                  src="/whatsapp2.png" 
                  alt="Brandsmashers"
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/40";
                  }}
                />
              </div>
              <div>
                <p className="font-semibold text-white">Brandsmashers Tech</p>
                <p className="text-xs text-green-100">Connect via WhatsApp</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:bg-green-700 p-1 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#0d1117] bg-opacity-40">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === "user"
                        ? "bg-green-600 text-white rounded-tr-none"
                        : "bg-gray-800 text-white rounded-tl-none"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs mt-1 opacity-70 text-right">{msg.time}</p>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 rounded-lg p-3 rounded-tl-none max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input area */}
          <div className="p-3 border-t border-gray-700 bg-gray-900">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-full py-2 px-4 text-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              />

              {/* Option 1: Show chat flow then redirect */}
              <button
                onClick={handleSendMessage}
                disabled={inputText.trim() === ""}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  inputText.trim() === ""
                    ? "bg-gray-700 text-gray-500"
                    : "bg-green-600 text-white hover:bg-green-700"
                } transition-colors`}
                title="Send and redirect to WhatsApp"
              >
                <Send size={18} />
              </button>

              {/* Option 2: Direct WhatsApp button (uncomment if you prefer immediate redirect) */}
              {/*
              <button
                onClick={openWhatsAppDirect}
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                title="Open in WhatsApp directly"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
              */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChatbot;