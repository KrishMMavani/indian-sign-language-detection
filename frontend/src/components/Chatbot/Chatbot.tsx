import React, { useState, useEffect, useRef } from "react";
import { IoIosSend, IoIosMic, IoIosMicOff } from "react-icons/io";
import { FaRobot, FaLanguage } from "react-icons/fa";
import { generateContent } from "./Model";
import "./Chatbot.css";

// Supported languages
const LANGUAGES = [
  // Essential Languages
  { code: "en", name: "English" },
  { code: "gu", name: "ગુજરાતી (Gujarati)" },
  { code: "hi", name: "हिन्दी (Hindi)" },
  
  // Additional Languages for Wider Reach
  { code: "es", name: "Español (Spanish)" },
  { code: "fr", name: "Français (French)" },
  { code: "de", name: "Deutsch (German)" },
  { code: "zh", name: "中文 (Chinese)" },
  { code: "ar", name: "العربية (Arabic)" },
  { code: "pt", name: "Português (Portuguese)" },
  { code: "bn", name: "বাংলা (Bengali)" },
  { code: "ta", name: "தமிழ் (Tamil)" },
  { code: "te", name: "తెలుగు (Telugu)" },
  { code: "ja", name: "日本語 (Japanese)" },
  { code: "ru", name: "Русский (Russian)" },
  { code: "pa", name: "ਪੰਜਾਬੀ (Punjabi)" },
  { code: "mr", name: "मराठी (Marathi)" },
  { code: "kn", name: "ಕನ್ನಡ (Kannada)" },
  { code: "ml", name: "മലയാളം (Malayalam)" },
  { code: "or", name: "ଓଡ଼ିଆ (Odia)" },
  { code: "as", name: "অসমীয়া (Assamese)" },
  { code: "sa", name: "संस्कृत (Sanskrit)" },
];

const Chatbot: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState<{ type: string; message: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [language, setLanguage] = useState("en");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = language;

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setUserInput(transcript);
          setIsListening(false);
        };

        recognitionRef.current.onerror = (event: any) => {
          console.error("Speech recognition error", event.error);
          setIsListening(false);
        };
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [language]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [response]);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleClear = () => {
    setUserInput("");
    setResponse([]);
    setIsLoading(false);
  };

  const handleSubmit = async () => {
    if (!userInput.trim()) return;
  
    setIsLoading(true);
    try {
      const prompt = `[${language}] ${userInput}`; // Format: [gu] User's question
      const res = await generateContent(prompt);
      
      setResponse(prev => [
        ...prev,
        { type: "user", message: userInput },
        { type: "bot", message: res } // Response will be in selected language
      ]);
      setUserInput("");
    } catch (err) {
      setResponse(prev => [...prev, 
        { type: "system", message: "Failed to generate response" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowLanguageDropdown(false);
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setShowLanguageDropdown(false);
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      setTimeout(() => {
        recognitionRef.current.lang = langCode;
        recognitionRef.current?.start();
        setIsListening(true);
      }, 100);
    } else {
      recognitionRef.current.lang = langCode;
    }
  };

  return (
    <>
      {/* Floating Robot Icon */}
      <div 
        className={`fixed bottom-8 right-8 z-50 cursor-pointer transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
        onClick={toggleChat}
      >
        <div className="relative">
          <FaRobot 
            className="text-5xl text-accent hover:text-accent-purple transition-colors duration-300" 
            style={{ filter: 'drop-shadow(0 0 8px rgba(0, 242, 255, 0.7))' }}
          />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Chat Container */}
      {isOpen && (
        <div className="fixed bottom-20 right-8 w-80 h-[500px] bg-dark-lighter rounded-xl border border-accent/30 flex flex-col shadow-lg shadow-accent/20 z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-accent/20 to-accent-purple/20 p-4 border-b border-accent/30 flex justify-between items-center">
            <h3 className="text-white font-semibold flex items-center gap-2">
              <FaRobot className="text-accent" />
              AI Assistant
            </h3>
            <div className="flex gap-2">
              <div className="relative">
                <button 
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors duration-200 flex items-center gap-1"
                >
                  <FaLanguage />
                  {LANGUAGES.find(l => l.code === language)?.code.toUpperCase()}
                </button>
                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-1 w-48 bg-dark-lighter rounded-md shadow-lg z-50 border border-accent/30 max-h-60 overflow-y-auto">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`block w-full text-left px-3 py-2 text-sm ${language === lang.code ? 'bg-accent/20' : 'hover:bg-white/10'}`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button 
                onClick={handleClear} 
                className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors duration-200"
              >
                Clear
              </button>
              <button 
                onClick={toggleChat} 
                className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {response.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg px-3 py-2 ${msg.type === 'user' 
                    ? 'bg-accent/20 text-white' 
                    : 'bg-white/10 text-white'}`}
                >
                  {msg.message}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-white rounded-lg px-3 py-2 max-w-[80%]">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-3 border-t border-accent/30 bg-dark-lighter">
            <div className="flex gap-2 items-center">
              <button
                onClick={toggleListening}
                className={`p-2 rounded-lg transition-colors duration-200 flex-shrink-0 ${isListening 
                  ? 'bg-red-500/80 hover:bg-red-500 text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-white'}`}
              >
                {isListening ? <IoIosMicOff size={18} /> : <IoIosMic size={18} />}
              </button>
              <input
                type="text"
                value={userInput}
                onChange={handleUserInput}
                onKeyDown={handleKeyPress}
                placeholder={`Type your message... (${LANGUAGES.find(l => l.code === language)?.name})`}
                className="flex-1 bg-white/5 border border-accent/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all duration-200 text-sm"
              />
              <button 
                onClick={handleSubmit} 
                className="bg-accent hover:bg-accent/80 text-white rounded-lg p-2 transition-colors duration-200 flex-shrink-0"
                disabled={isLoading}
              >
                <IoIosSend size={18} />
              </button>
            </div>
            {isListening && (
              <div className="mt-2 text-xs text-accent flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></div>
                Listening... Speak now
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;