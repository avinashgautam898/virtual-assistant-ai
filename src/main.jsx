import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css';
import App from './App.jsx';
import UserContext from './context/UserContext.jsx';

const root = createRoot(document.getElementById('root')); // Create root
root.render(
  <UserContext>
    <App />
  </UserContext>
);
