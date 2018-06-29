// @flow

import type {State, Planet, Siths, List, Id} from '../types'

const getPlanet = (state: State): Planet => state.planet
const getSiths  = (state: State): Siths => state.siths
const getList   = (state: State): List => state.list.values
const getIds   = (state: State): Array<Id> => state.idList

export default {
  getPlanet,
  getSiths,
  getList,
  getIds
}
