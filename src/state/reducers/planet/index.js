// @flow

import reducer, {initialState, type State} from './planet'
import type {Action, Reducer, Planet} from '../../types'
import actions from '../../actions/planet'

export type {Action, Reducer, State, Planet}
export {initialState, actions}
export default reducer
