// SithDashboard/reducer.js
// @flow

import {combineReducers} from 'redux'

import {reducer as currentPlanetIndicator} from './components/CurrentPlanetIndicator'
import {reducer as scrollableList} from './components/ScrollableList'

export default combineReducers({currentPlanetIndicator, scrollableList})
