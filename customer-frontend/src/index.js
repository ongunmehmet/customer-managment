import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import CreateCustomer from "./CreateCustomer";
import Customers from "./Customers";
import DropdownLogic from "./DropdownLogicCityDistrict";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreateCustomer />
  </React.StrictMode>
);




reportWebVitals();
