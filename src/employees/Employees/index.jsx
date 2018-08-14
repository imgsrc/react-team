import React, { Component } from 'react'

import Button from '../../shared/Button'

export default class Employees extends Component {
  render() {
    const { data: employees } = this.props;

    return (
        <main id="employees" className="page">
          <ul className="list employee-list">
            { employees.map(employee =>
                <li key={ employee.id } className="list-item employee-list-item">
                  <h3>{ employee.name }</h3>

                  <Button small primary>
                    <i className="material-icons">edit</i>
                  </Button>
                </li>
            ) }
          </ul>
        </main>
    );
  }
}