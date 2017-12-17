// @flow

import {buildReducer} from 'redux-keto'

import siths from './siths'
import planet from './planet'
import list from './list/list'
import idList from './idList/idList'
import selectors from './selectors'

const reducer = buildReducer({siths, planet, list, idList})
export type Reducer = typeof reducer
export {
  siths,
  planet,
  selectors,
  list,
  idList
}
export default reducer
