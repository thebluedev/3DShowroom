import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './scene.jsx'

import './global.css'
import Text from './text.jsx'

import Down from './down.jsx'
// import downText from './downtext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Text/>
    <App/>
    <Down/>
    
    </React.StrictMode>
)
