import airesponse from './airesponse';
import Speak from "./Speak";

export default function takeCommand(command) {
  const lowerCmd = command.toLowerCase();

  if (lowerCmd.includes("open") && lowerCmd.includes("youtube")) {
    window.open("https://www.youtube.com/", "_blank");
    Speak("Opening YouTube...");
  } 
  else if (lowerCmd.includes("open") && lowerCmd.includes("google")) {
    window.open("https://www.google.com/", "_blank");
    Speak("Opening Google...");
  } 
  else if (lowerCmd.includes("open") && lowerCmd.includes("facebook")) {
    window.open("https://www.facebook.com/", "_blank");
    Speak("Opening Facebook...");
  } 
  else {
    airesponse(command);  // fallback to AI response
  }
}
