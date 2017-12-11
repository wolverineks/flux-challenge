// @flow

import {createStore, applyMiddleware, compose} from 'redux'
import {createLogger} from 'redux-logger'

import type {State} from './types'
import reducer from './reducers'

const logger = createLogger()
const middleware = [logger]

const composeEnhancers
  = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({name: 'flux'})
    : compose

export default (initialState: State) => createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
)
