// @flow

import {buildReducer} from 'redux-keto'

import siths from './siths'
import planet from './planet'
import list from './list/list'
import selectors from './selectors'

const reducer = buildReducer({siths, planet, list})
export type Reducer = typeof reducer
export {
  siths,
  planet,
  list,
  selectors,
}
export default reducer
