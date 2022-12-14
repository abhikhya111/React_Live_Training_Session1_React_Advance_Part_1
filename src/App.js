import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Homepage from './components/Homepage';
import Header from './Header';
import Installation from './components/Installation';
import NewReactApp from './components/NewReactApp';
import AddComponents from './components/AddComponents';
import Stylesheets from './components/Stylesheets';
import Alerts from './components/Alerts';
import Breadcrumbs from './components/Breadcrumbs';
import Buttons from './components/Buttons';

export default function App() {
 
  return (<>
    <div className='app'>
    <Header/>

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/install' element={<Installation/>}/>
          <Route path="/createApp" element={<NewReactApp/>}/>
          <Route path="/components" element={<AddComponents/>}/>
          <Route path="/stylesheets" element={<Stylesheets/>}/>
          <Route path="/components/alerts" element={<Alerts/>}/>
          <Route path="/components/breadcrumbs" element={<Breadcrumbs/>}/>
          <Route path="/components/buttons" element={<Buttons/>}/>

        </Routes>
      </Router>
    </div>
  </>
  );
}



