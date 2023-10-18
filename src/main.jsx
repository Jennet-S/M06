import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './Components/NavBar.jsx'
import AppRoutes from './Routes/AppRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <NavBar/>
    <AppRoutes/>
  </BrowserRouter>
    
  </React.StrictMode>,
)
