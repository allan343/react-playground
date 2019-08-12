import React from 'react';
import ReactDOM from 'react-dom';
import App from './paltrows-power-toes/App';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import Bomb from './state-drills/Bomb'
import AppLang from './lang-context/AppLang';
import RegistrationForm from './registrationForm/registrationForm';

ReactDOM.render(<RegistrationForm />, document.getElementById('root'));