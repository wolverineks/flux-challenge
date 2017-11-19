// @flow

import {createStore, applyMiddleware, compose} from 'redux'
import {createLogger} from 'redux-logger'
import reducer from './reducers'

const logger = createLogger()
const middleware = [logger]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (initialState: {}) => createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
)
