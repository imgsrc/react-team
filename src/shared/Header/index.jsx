import React from 'react'
import Button from '../Button'

export default function Header({ title }) {
  return (
      <header className="app-header">
        <span>{ title }</span>

        <Button element="a" small>Новый проект</Button>
      </header>
  );
}