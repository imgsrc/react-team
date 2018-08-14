import React, { Component } from 'react'
import ProjectList from '../ProjectList/index';

export default class Projects extends Component {
  render() {
    const { data: projects } = this.props;

    return (
        <main id="projects" className="page">
          <ProjectList projects={ projects }/>
        </main>
    );
  }
}