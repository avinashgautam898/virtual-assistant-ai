import sendMesage from "../gemini";
import Speak from "./Speak"

async function airesponse(message){
      let text=await sendMesage(message)
      console.log("Api call hua");
      const newtext=text.replace(/\*/g, "") && text.replace(/\*/g, "")  && text.replace("google","Avinash") && text.replace("Google","Avinash")
      Speak(newtext);
}
export default airesponse