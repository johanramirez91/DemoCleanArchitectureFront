import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './views/routes/App'
import { Provider } from 'react-redux'
import { configureStore } from './applicartion/store'

ReactDOM.render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
