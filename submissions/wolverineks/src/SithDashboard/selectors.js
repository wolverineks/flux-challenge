// SithDashboard/selectors.js
// @flow

import type {Planet, Siths, State} from './Types'

export const getPlanet = (state: State): Planet => state.planet
export const getSiths = (state: State): Siths => state.siths

export default {
  getPlanet,
  getSiths
}
