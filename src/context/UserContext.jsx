import { createContext } from 'react';
import takecommand from "./takecommand";
import createSpeechRecognition from "./speechRecognition";

export const datacontext = createContext();

function UserContext({ children }) {
  const recognition = createSpeechRecognition((command) => takecommand(command));

  return (
    <datacontext.Provider value={{ recognition }}>
      {children}
    </datacontext.Provider>
  );
}

export default UserContext;
