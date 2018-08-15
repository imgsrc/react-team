import React, { Component } from 'react'

import ProjectForm from '../ProjectForm'

export default class ProjectCreate extends Component {
  render() {
    let { employees, roles, onSave } = this.props;
    return (
        <main id="project-create" className="page">
          <ProjectForm
              employees={ employees }
              roles={ roles }
              onSubmit={ onSave }
          />
        </main>
    );
  }
}