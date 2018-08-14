import React from 'react'

import './index.css'

export default function ProjectList({ projects }) {
  return (
      <ul className="list project-list">
        { projects.map(project =>
            <li key={ project.id } className="list-item project-list-item">
              <div className="list-item__text">
                <h3 className="list-item__primary-text">{ project.title }</h3>
                <p className="list-item__secondary-text">{ project.description }</p>
              </div>
              <span className="label label-success">{ project.status }</span>
            </li>
        ) }

      </ul>
  );
}