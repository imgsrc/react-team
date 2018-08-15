import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'

export default function Header({ title }) {
  return (
      <header className="app-header">
        <span>{ title }</span>

        <Button element={ Link } to="/projects/create" small>Новый проект</Button>
      </header>
  );
}