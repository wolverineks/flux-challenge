// @flow

import reducer, {initialState, type State} from './list'
import type {Action, State as AllState, Reducer, Siths, ServerSith} from '../../types'
import sithsActions from '../../actions/siths'
import listActions from '../../actions/list'

const actions = {...sithsActions, ...listActions}

export type {Action, AllState, Reducer, State, Siths, ServerSith}
export {initialState, actions}
export default reducer
