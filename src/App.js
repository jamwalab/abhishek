import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//--IMPORT COMPONENTS--//
import Nav from './components/Nav';
import Footer from './components/Footer';

/*import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />

            <Redirect to="/" />
          </Switch>
*/

function App() {
  return (
    <Router>
      <div className="container">
        <Nav></Nav>
        <main>

        </main>
      </div>
    </Router>
    
  );
}

export default App;
