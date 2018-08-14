import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Nav from './shared/Nav'
import Header from './shared/Header'
import Projects from './projects/Projects'
import Employees from './employees/Employees'
import Roles from './roles/Roles'
import './App.css'

class App extends Component {
  state = {
    projects: this.props.state.projects,
    employees: this.props.state.employees,
    roles: this.props.state.roles
  };

  render() {
    const { projects, employees, roles } = this.state;
    return (
        <Router>
          <div className="app container">
            <Header title="React Team"/>

            <div className="card">
              <Nav/>
              <Switch>
                <Route exact path="/" component={ props => <Redirect to="/projects"/> }/>
                <Route path="/projects" component={ props => <Projects data={ projects }/> }/>
                <Route path="/employees" component={ props => <Employees data={ employees }/> }/>
                <Route path="/roles" component={ props => <Roles data={ roles }/> }/>
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
