import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { Provider } from "react-redux";
import store from "./redux/store";
import './index.css';  // Importera global CSS
import App from './App';  // Importera huvudkomponenten App


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);