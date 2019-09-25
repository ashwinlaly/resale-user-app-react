import React, {useState, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Import Component
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  const [loggedin, setloggedin] = useState(0);
  return (
    <Fragment>
      { <Router>
        <Navbar loggedin={loggedin} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signin' exact component={Signin} />
          <Route path='/signup' exact component={Signup} />
        </Switch>
      </Router> }

    </Fragment>
  );
}

export default App;
