
// index.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom' 
require('../css/fullstack.css');

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("content"));
