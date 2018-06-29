// @flow

import type {State, List, Planet, CacheSiths, Ids, Id} from '../types'

const planet     = (state: State): Planet | null => state.planet
const cacheSiths = (state: State): CacheSiths    => state.siths.byId
const ids        = (state: State): Ids           => state.siths.ids

const list       = (state: State): List      => state.list
const visibleIds = (state: State): Array<Id> => list(state).visibleIds
const rootId     = (state: State): Id        => list(state).rootId

const siths = cacheSiths


export default {
  planet,
  cacheSiths,
  list,
  ids,
  siths,
  rootId,
  visibleIds
}
