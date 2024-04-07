import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-lulm3gjulga1iuae.us.auth0.com"
    clientId="YBtBTpCsFnvgirqwQSBINZKpYEfBPVOO"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/page2"
    }}
  >
    <App />
  </Auth0Provider>,
)
