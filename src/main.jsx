import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Nav } from './navBar.jsx'
import { Bar } from './navBar1.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Bar />
    <Nav />
    <App />
  </React.StrictMode>,
)
