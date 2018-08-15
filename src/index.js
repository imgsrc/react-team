import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import state from './state'
import App from './App'

import './index.css'

ReactDOM.render(
    <Router>
      <App state={ state }/>
    </Router>
    , document.getElementById('root'));
