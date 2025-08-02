import { useContext, useState, useEffect } from 'react';
import "./App.css";
import { IoMic } from "react-icons/io5";
import { datacontext } from './context/UserContext';
import takeCommand from "./context/takecommand";

import idleGif from "./assets/mark42.gif";
import listeningGif from "./assets/voice.gif";
import respondingGif from "./assets/aivoice.gif";

function App() {
  const { recognition } = useContext(datacontext);
  const [gifState, setGifState] = useState("idle");

  useEffect(() => {
    if (!recognition) return;

    recognition.onstart = () => {
      console.log("🎤 Listening started");
      setGifState("listening");
    };

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript;
      console.log("🎙️ You said:", command);
      setGifState("responding");
      takeCommand(command);
      setTimeout(() => {
        setGifState("idle");
      }, 6000);
    };

    recognition.onerror = (err) => {
      console.error("❌ Speech recognition error:", err);
      setGifState("idle");
    };

    recognition.onend = () => {
      console.log("🎤 Listening ended");
    };
  }, [recognition]);

  const handleMicClick = () => {
    try {
      recognition.start();
    } catch (err) {
      console.error("Error starting recognition:", err);
    }
  };

  const getGif = () => {
    switch (gifState) {
      case "listening":
        return listeningGif;
      case "responding":
        return respondingGif;
      default:
        return idleGif;
    }
  };

  return (
    <div className='main'>
      <img src={getGif()} alt="Assistant" id="jarvis" />
      <span>I am Shifra, your Virtual Assistant</span>
      <button onClick={handleMicClick}>Click HERE <IoMic /></button>
      <span className="s1">Made by Avii</span>
    </div>
  );
}

export default App;
