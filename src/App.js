import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
      <AboutMe></AboutMe>
      </main>
    </div>
  );
}

export default App;
