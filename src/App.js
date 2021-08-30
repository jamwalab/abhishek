import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const [menuElements] = useState([
    "Home", "Portfolio", "Contact", "Resume"
  ]);

  const [pageSelected, setPageSelected] = useState(menuElements[0]);

  return (
    <div>
      <Nav
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      ></Nav>
      <main>
      {
      pageSelected === menuElements[0] ? <Home></Home>
        : pageSelected === menuElements[1] ? <Portfolio></Portfolio>
        : pageSelected === menuElements[2] ? <Contact></Contact>
        : <Resume></Resume>
      }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
