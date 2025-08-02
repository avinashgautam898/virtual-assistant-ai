export default function createSpeechRecognition(takeCommand) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    takeCommand(transcript.toLowerCase());
  };

  recognition.onerror = (err) => {
    console.error("Speech Recognition Error:", err);
  };
  return recognition;
}
