import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

//get app styling
import './App.css'; 

//import additional components for links
import Home from '../Home/Home'
import projects from '../Projects/Projects'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />
          <Route exact path='/home'
            component={Home} />
          <Route exact path='/projects'
            component={projects} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
