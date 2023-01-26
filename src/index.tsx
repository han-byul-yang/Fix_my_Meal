import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from 'routes'
import rootReducer from 'reducer'

import './styles/index.scss'

const container = document.getElementById('root')!
const root = createRoot(container)

const store = createStore(rootReducer)

root.render(
  /* <React.StrictMode> */
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  /* </React.StrictMode> */
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
