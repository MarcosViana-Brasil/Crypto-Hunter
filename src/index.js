import React from 'react'
import ReactDOM from 'react-dom'
import 'react-alice-carousel/lib/alice-carousel.css'

import CryptoContext from './CryptoContext'
import App from './App'
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <CryptoContext>
            <App />
        </CryptoContext>
    </React.StrictMode>,
    document.getElementById('root')
)
