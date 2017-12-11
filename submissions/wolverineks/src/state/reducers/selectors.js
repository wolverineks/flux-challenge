// @flow

import type {State, Planet, Siths, List} from '../types'

const getPlanet = (state: State): Planet => state.planet
const getSiths  = (state: State): Siths => state.siths
const getList   = (state: State): List => state.list.values

export default {
  getPlanet,
  getSiths,
  getList,
}
