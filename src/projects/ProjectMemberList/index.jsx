import React from 'react'

export default function ProjectMemberList({ members, employees, roles, onCheckboxChange }) {
  return (
      <ul className="list project-member-list">
        { roles.map(role => {
          let member = members.find(member => role.id === member.roleId);
          let availableEmployees = employees.filter(employee =>
              employee.role === role.id).map(employee =>
              ({ id: employee.id, title: employee.name }));
          let isRoleInProject = member ? true : false;
          let hasAvailableEmployees = availableEmployees.length > 0;

          return (
              <li key={ role.id } className="list-item project-member-list-item">
                <label>
                  <input
                      type="checkbox"
                      name="roles"
                      value={ role.id }
                      checked={ isRoleInProject }
                      onChange={ onCheckboxChange }
                  />
                  { role.title }
                </label>
                { isRoleInProject &&
                (hasAvailableEmployees ?
                        <select
                            id="employees"
                            className="form-control"
                            defaultValue={ member && member.employeeId }
                        >
                          { availableEmployees.map(employee =>
                              <option key={ employee.id } value={ employee.id }>{ employee.title }</option>
                          ) }
                        </select>
                        :
                        'Нет работника на выбор'
                )
                }
              </li>
          );
        }) }
      </ul>
  );
};