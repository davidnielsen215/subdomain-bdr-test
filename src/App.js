import React from 'react';
import logo from './BDR_LOGO.png'
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Subdomain Best Deal Retailer
        </p>
        <a
          className="App-link"
          href="https://seetheit.com/"
          target="blank"
        >
          Back to Home Page
        </a>
      </header>
    </div>
  );
}

export default App;
