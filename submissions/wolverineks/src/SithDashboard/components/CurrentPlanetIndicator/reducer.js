// SithDashboard/reducer.js
// @flow

import type {Action, State} from './Types'

const initialState = {}
export default (state: State = initialState, action: Action) =>
  action.type === 'PLANET_RECEIVED'
    ? action.planet
    : state
