// @flow

import reducer, {initialState, type State} from './siths'
import type {Action, Id, Reducer, ServerSith, Siths, Sith, Planet} from '../../types'
import actions from '../../actions/siths'

export type {Action, Id, Reducer, State, ServerSith, Siths, Sith, Planet}
export {initialState, actions}
export default reducer
