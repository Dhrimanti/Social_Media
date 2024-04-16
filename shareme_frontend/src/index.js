import React from "react";
import ReactDOM from 'react-dom';
import App from './App.js';
import {BrowserRouter as Router} from'react-router-dom';
import { GoogleOAuthProvider } from "@react-oauth/google";
import './index.css';
ReactDOM.render(
    <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_REACT_GOOGLE_API}>
    <Router>
        <App />
        
    </Router>,
    </GoogleOAuthProvider>
  </React.StrictMode>,
document.getElementById('root'));
