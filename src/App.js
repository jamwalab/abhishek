import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  const [menuElements] = useState([
    "Home", "Portfolio", "Contact", "Resume"
  ]);

  const [pageSelected, setPageSelected] = useState(menuElements[0]);

  return (
    <Router>
      <div>
        <Nav
          pageSelected={pageSelected}
          setPageSelected={setPageSelected}
        ></Nav>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    </Router>
    
  );
}

export default App;
