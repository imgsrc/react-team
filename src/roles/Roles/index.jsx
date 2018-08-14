import React, { Component } from 'react'

export default class Roles extends Component {
  render() {
    const { data: roles } = this.props;

    return(
      <main id="roles" className="page">
        <ul className="list role-list">
          {roles.map(role =>
              <li key={role.id} className="list-item role-list-item">
                <h3>{role.title}</h3>

                <button className="btn">
                  <i className="material-icons">edit</i>
                </button>
              </li>
          )}
        </ul>
      </main>
    );
  }
}