import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from '../../shared/Button'
import './index.css'

export default class Project extends Component {
  render() {
    const { project, employees, roles } = this.props;
    const members = project.members.map(({ roleId, employeeId }) => ({
      role: roles.find(role => role.id === roleId),
      employee: employees.find(employee => employee.id === employeeId)
    }))

    return (
        <main id="project" className="page">
          <header>
            <h1>{ project.title }</h1>
            <p>{ project.description }</p>
          </header>
          <ul className="list">
            { members.map(({ role, employee }) =>
                <li key={ role.id } className="list-item">
                  <div className="list-item-text">
                    <span className="list-item__primary-text">{ role.title } </span>
                    {employee ? <span className="list-item__secondary-text">{ employee.name }</span> : 'Место свободно'}
                  </div>
                </li>
            ) }
          </ul>

          <footer>
            <Button element={ Link } to={ `/projects/${project.id}/edit` }>
              Редактировать проект
            </Button>
          </footer>
        </main>
    );
  }
}