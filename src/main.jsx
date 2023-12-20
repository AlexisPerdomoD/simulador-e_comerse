import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './components/contextGLobal/ContextGlobal.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      
      <App/>
    </GlobalProvider>
  </React.StrictMode>,
)
