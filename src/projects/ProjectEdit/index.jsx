import React, { Component } from 'react'

import ProjectForm from '../ProjectForm'

export default class ProjectEdit extends Component {
  render() {
    let { project, employees, roles, onSave } = this.props;
    return (
        <main id="project-edit" className="page">
          <ProjectForm
              project={ project }
              employees={ employees }
              roles={ roles }
              onSubmit={ onSave }
          />
        </main>
    );
  }
}