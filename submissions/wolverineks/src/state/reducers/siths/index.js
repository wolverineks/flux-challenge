// @flow

import {buildReducer} from 'redux-keto'

import ids from './ids/'
import byId from './byId/'
import type {Action, State as AllState, Id, Reducer, ServerSith, Siths, Sith, Planet} from '../../types'
import actions from '../../actions/siths'

const reducer = buildReducer({byId, ids})

export type {Action, AllState, Id, Reducer, State, ServerSith, Siths, Sith, Planet}
export {initialState, actions}
export default reducer
