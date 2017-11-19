// @flow

import {combineReducers} from 'redux'

import {planet as planetReducer, id} from './planet/planet'
import type {Action, Id, Planet, Reducer} from '../../types'

export const byId = (state: {[Id]: Planet} | {} = {}, action: Action): {[Id]: Planet} =>
  action.type === 'PLANET_RECEIVED'
    ? {...state, [id(undefined, action)]: planetReducer(undefined, action)}
    : state

export const current = (state: Id | null = null, action: Action): Id | null =>
  action.type === 'PLANET_RECEIVED'
    ? id(state, action)
    : state

export type State = {byId: {[Id]: Planet}, current: Id | null}
export const initialState: State = {byId: {}, current: null}
export const planets: Reducer = combineReducers({byId, current})

export default planets
