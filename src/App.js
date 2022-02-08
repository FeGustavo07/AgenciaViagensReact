import React from 'react';
import './App.css';
import Header from './components/Header';
import Routes from "./Routes"
import { BrowserRouter } from 'react-router-dom';

export default () => {
  return (
    <div className='page'>
      <BrowserRouter>
        <Header />

        <Routes />
      </BrowserRouter>
     
    </div>
  )
}

