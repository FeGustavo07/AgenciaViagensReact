import React from 'react';
import './App.css';
import Header from './components/Header';
import Routes from "./Routes"
import { BrowserRouter } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default () => {

  const { isLoading } = useAuth0

  if (isLoading) return <div>Loading...</div>

  return (
    <div className='page'>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
     
    </div>
  )
}

