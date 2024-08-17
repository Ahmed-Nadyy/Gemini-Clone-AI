import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import ContextProvider from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
