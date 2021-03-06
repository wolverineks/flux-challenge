// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {attachPixie} from 'redux-pixies'

import type {Store} from './state/types'
import createStore from './state/store'
import App from './App.jsx'
import appPixie from './async'

const store: Store = createStore()

attachPixie(store, appPixie)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
