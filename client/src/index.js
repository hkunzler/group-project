import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import ProductProvider from './context/ProductProvider'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <ProductProvider>
            <App />
        </ProductProvider>
    </BrowserRouter>,
        document.getElementById('root'))