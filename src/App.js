import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <main>
          <Switch>
            <Route exact path="/abhishek" component={Home} />
            <Route exact path="/abhishek/portfolio" component={Portfolio} />
            <Route exact path="/abhishek/resume" component={Resume} />

            <Redirect to="/abhishek" />
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    </Router>
    
  );
}

export default App;
