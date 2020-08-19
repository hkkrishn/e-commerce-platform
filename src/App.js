//Author:Harikrishnan Kuppusamykrishnan
//Project: E-Commerce Website
//Date: 08/06/2020
//Description: This is the main holding component for all our pages and components,acts as a container
//and information source.


import React from 'react';
//Homepage container
import {Homepage} from './components/homepage/homepage.component'
import './App.css';

function App() {
  return (
    <div className="App">
     <Homepage/>
    </div>
  );
}

export default App;
