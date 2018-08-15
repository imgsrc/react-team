import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export default function ProjectList({ projects }) {
  return (
      <ul className="list project-list">
        { projects.map(project =>
            <li key={ project.id } className="list-item project-list-item">
              <Link to={ `/projects/${project.id}` } className="list-item__text">
                <h3 className="list-item__primary-text">{ project.title }</h3>
                <p className="list-item__secondary-text">{ project.description }</p>
              </Link>
              <span className="label label-success">{ project.status }</span>
            </li>
        ) }

      </ul>
  );
}