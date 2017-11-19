// reducer.js
// @flow

import {combineReducers} from 'redux'

import {reducer} from './SithDashboard'

export default combineReducers({
  sithDashboard: reducer
})
