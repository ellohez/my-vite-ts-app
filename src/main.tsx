import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
{/* TODO - reset css styles and create own */}
import './reset.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
