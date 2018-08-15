import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Nav from './shared/Nav'
import Header from './shared/Header'
import Projects from './projects/Projects'
import ProjectCreate from './projects/ProjectCreate'
import ProjectEdit from './projects/ProjectEdit'
import Project from './projects/Project'
import Employees from './employees/Employees'
import Roles from './roles/Roles'
import './App.css'

class App extends Component {
  state = {
    projects: this.props.state.projects,
    employees: this.props.state.employees,
    roles: this.props.state.roles
  };

  updateProject = (id, data) => {
    const projects = this.state.projects.map(project => {
      if ( project.id == id ) {
        return {
          ...project,
          ...data
        };
      } else {
        return project;
      }
    });
    this.setState({ projects }, () => this.props.history.push(`/projects/${id}`));
  };

  createProject = (_, data) => {
    let id = Date.now();
    data.id = id;
    this.setState(state => ({ projects: [...state.projects, data] }), () => this.props.history.push('/projects/'));
  };

  render() {
    const { projects, employees, roles } = this.state;
    return (
        <div className="app container">
          <Header title="React Team"/>

          <div className="card">
            <Nav/>
            <Switch>
              <Route exact path="/" component={ props => <Redirect to="/projects"/> }/>
              <Route exact path="/projects" component={ props => <Projects data={ projects }/> }/>
              <Route path="/projects/create"
                     component={ props =>
                         <ProjectCreate
                             employees={ employees }
                             roles={ roles }
                             onSave={ this.createProject }
                         /> }
              />
              <Route exact path="/projects/:id"
                     component={ props =>
                         <Project project={ projects.find(p => p.id == props.match.params.id) }
                                  employees={ employees }
                                  roles={ roles }
                         /> }
              />
              <Route path="/projects/:id/edit"
                     component={ props =>
                         <ProjectEdit project={ projects.find(p => p.id == props.match.params.id) }
                                      employees={ employees }
                                      roles={ roles }
                                      onSave={ this.updateProject }
                         /> }
              />
              <Route path="/employees" component={ props => <Employees data={ employees }/> }/>
              <Route path="/roles" component={ props => <Roles data={ roles }/> }/>
            </Switch>
          </div>
        </div>
    );
  };
}

export default withRouter(App);
