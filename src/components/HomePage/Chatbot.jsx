import React, { useState, useRef, useEffect } from "react";
import { Send, X, MessageSquare, Loader } from "lucide-react";

const WhatsAppChatbot = () => {
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

  // Auto responses based on keywords
  const autoResponses = {
    "pricing": "Our pricing varies based on project requirements. Would you like to schedule a consultation to discuss your specific needs?",
    "services": "We offer web development, mobile app development, UI/UX design, and custom software solutions. What specific service are you interested in?",
    "contact": "You can reach us at contact@brandsmashers.com or call us at +91 1234567890. Would you like us to get in touch with you?",
    "quote": "We'd be happy to provide a quote for your project. Could you share some details about what you're looking for?",
    "hours": "Our support team is available Monday to Friday, 9 AM to 6 PM IST. How can we assist you today?",
    "developer": "We have 50+ expert developers specialized in various technologies. What kind of developer are you looking to hire?",
  };

  // Function to handle sending messages
  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    // Add user message
    const userMessage = {
      sender: "user",
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate response delay
    setTimeout(() => {
      let responseText = "Thank you for your message! Our team will get back to you shortly. Would you like to provide more details about your project?";
      
      // Check for keyword matches
      for (const [keyword, response] of Object.entries(autoResponses)) {
        if (inputText.toLowerCase().includes(keyword)) {
          responseText = response;
          break;
        }
      }
      
      // Add bot response
      const botResponse = {
        sender: "bot",
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
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

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {/* Chat bubble */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
        >
          <MessageSquare size={28} className="text-white" />
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full"></span>
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
                <p className="text-xs text-green-100">Online | Typically replies in minutes</p>
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
              <button
                onClick={handleSendMessage}
                disabled={inputText.trim() === ""}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  inputText.trim() === ""
                    ? "bg-gray-700 text-gray-500"
                    : "bg-green-600 text-white hover:bg-green-700"
                } transition-colors`}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChatbot;