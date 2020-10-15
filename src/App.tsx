import React from 'react';
import './assets/styles/global.css'
import './assets/styles/global.css'
import './assets/styles/pages/landing.css'
import logo from './assets/images/logo.svg';
import { FiArrowRight } from 'react-icons/fi'

function App() {
  return (

    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logo} alt="logo da aplicação" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Luanda, Angola</strong>
          <span>camama</span>
        </div>
        <a className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </a>
      </div>
    </div >
  );
}

export default App;
