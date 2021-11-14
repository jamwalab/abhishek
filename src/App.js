import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//--IMPORT COMPONENTS--//
import Nav from './components/Nav';
//import ContactLinks from './components/ContactLinks';

//--IMPORT PAGES--//
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactSection from './pages/ContactSection';
import Copyright from './components/Copyright';
/*
import Resume from './pages/Resume';
       
            <Route exact path="/resume" component={Resume} />

            <Redirect to="/" />
          
*/

function App() {
  return (
    <Router>
      <div className="container">
        <Nav></Nav>
        <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={ContactSection} />
        </Switch>
        </main>
        <Copyright/>
      </div>
      
    </Router>  
  );
}

export default App;
