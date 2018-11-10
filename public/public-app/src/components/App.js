import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import '../App.css';

import { simpleAction } from '../actions/simpleAction';

import Home from './Home.js';
import Dinners from './Dinners.js';
import Mission from './Mission.js';
import Application from './Application.js';
import Team from './Team.js';
import Contact from './Contact.js';
import Faq from './Faq.js';
import Topics from './Topics.js';

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})

class App extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  simpleAction = (event) => {
   this.props.simpleAction();
  }

 render() {

  const { value } = this.state;

  return (
   <Router>
    <div>
    <AppBar position="static">
      <Tabs value={value} onChange={this.handleChange}>
        <Tab label="Home" href="/"/>
        <Tab label="Dinners" href="/dinners"/>
        <Tab label="Application" href="/application" />
        <Tab label="Mission" href="/mission"/>
        <Tab label="Our Team" href="/team"/>
        <Tab label="Contact Us" href="/contact" />
        <Tab label="FAQ and Policies" href="/faq"/>
        <Tab label="Topics" href="/topics"/>
      </Tabs>
    </AppBar>
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

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
