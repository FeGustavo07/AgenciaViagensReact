import React from "react";
import "./styles.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default () => {

  const [expandido, setExpandido] = useState(false)
  const [collapse, setCollapse] = useState(false)

  const expandeMenu = () => {
    if (expandido == false) {
      setExpandido(true)
      setCollapse(true)
    }
    else {
      setExpandido(false)
      setCollapse(false)
    }
      
  }

  let navigate = useNavigate()
  return (
    <header className={expandido ? 'expandido' : ''}>
      <nav class="navbar navbar-expand-md fixed-top navbar__container">
        <div class="container-fluid">

            <span onClick={()=>{
              navigate("/")
            }} className="text--logo">DreamTrip</span>
        
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target= "#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={expandeMenu}
          >
            <span class="navbar-toggler-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                     <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </span>
          </button>
          <div class={collapse ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="">
            <div class="mx-auto"></div>
           
            <ul class="navbar-nav">
              <li class="">
                  
                  <span onClick={() => {
                    navigate("/")
                  }}>Home</span>
                
              </li>
              <li class="">
                
              <span onClick={() => {
                    navigate("/destinos")
                  }}>Destinos</span>
                
                
              </li>
              <li class="nav-item">
                
              <span onClick={() => {
                    navigate("/promocoes")
                  }}>Promoções</span>
                
            
              </li>
              <li class="nav-item">
                
              <span onClick={() => {
                    navigate("/contato")
                  }}>Contato</span>
                
                
              </li>
             
            </ul>
          
          </div>
        </div>
      </nav>
    </header>
  );
};

