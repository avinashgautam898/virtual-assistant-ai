 export default function Speak(command)
    {
        let speech=new SpeechSynthesisUtterance(command)
        speech.volume=1
        speech.rate=1
        speech.pitch=1
        speech.lang="hi-GB"
        window.speechSynthesis.speak(speech)
    }