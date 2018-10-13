import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../App.css';
import logo from '../logo.svg';

import { simpleAction } from '../actions/simpleAction';

import Home from './Home.js';
import Dinners from './Dinners.js';
import Mission from './Mission.js';
import Application from './Application.js';
import Team from './Team.js';
import Contact from './Contact.js';
import Faq from './Faq.js';

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

class App extends Component {
  simpleAction = (event) => {
   this.props.simpleAction();
  }

 render() {
  return (
   <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dinners">Dinners</Link>
        </li>
        <li>
          <Link to="/application">Application</Link>
        </li>
        <li>
          <Link to="/mission">Mission</Link>
        </li>
        <li>
          <Link to="/team">Our Team</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/faq">FAQ and Policies</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/dinners" component={Dinners} />
      <Route path="/application" component={Application} />
      <Route path="/mission" component={Mission} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={Faq} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
  );
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
