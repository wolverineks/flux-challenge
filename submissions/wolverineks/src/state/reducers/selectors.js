// @flow

import type {List, Planet, Siths, State} from '../types'

export const getPlanet = (state: State): Planet | null => state.planet
export const getSiths = (state: State): Siths => state.siths
export const getList = (state: State): List => state.list

export default {
  getList,
  getPlanet,
  getSiths
}
