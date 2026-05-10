import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

import MangaProvider from './context/MangaContext'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <MangaProvider>

      <App />

    </MangaProvider>

  </React.StrictMode>

)