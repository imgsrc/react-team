import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
      <div className="nav-tabs-navigation">
        <div className="nav-tabs-wrapper">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <NavLink to="/projects"
                       className="nav-link"
                       activeClassName="active"
                       data-toggle="tab"
                       role="tab"
                       aria-controls="projects">
                Проекты
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/employees"
                       className="nav-link"
                       activeClassName="active"
                       data-toggle="tab"
                       role="tab"
                       aria-controls="employees">
                Работники
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/roles"
                       className="nav-link"
                       activeClassName="active"
                       data-toggle="tab"
                       role="tab"
                       aria-controls="roles">
                Роли
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
  );
}