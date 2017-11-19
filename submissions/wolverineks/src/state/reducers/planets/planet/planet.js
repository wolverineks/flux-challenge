// @flow

import {combineReducers} from 'redux'

import type {Action, Id, Name, Planet, Reducer} from '../../../types'

export const id: Reducer = (state: Id | null = null, action: Action): Id | null =>
  action.type === 'PLANET_RECEIVED' ? action.planet.id : state

export const name: Reducer = (state: Name | null = null, action: Action): Name | null =>
  action.type === 'PLANET_RECEIVED' ? action.planet.name : state

export type State = Planet
export const initialState = {id: null, name: null}
export const planet: Reducer<State> = combineReducers({id, name})

export default planet
