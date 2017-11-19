// @flow

import {combineReducers} from 'redux'
import {prop} from 'ramda'

import type {Action, Id, Name, Planet, Sith} from '../types'

export type State = Sith
export const id = (state: Id | null = null, action: Action): number | null =>
  action.type === 'SITH_RECEIVED'
    ? action.sith.id
    : state

export const name = (state: Name | null = null, action: Action): string | null =>
  action.type === 'SITH_RECEIVED'
    ? action.sith.name
    : state

export const homeworld = (state: Planet | null = null, action: Action): Planet | null =>
  action.type === 'SITH_RECEIVED'
    ? action.sith.homeworld
    : state

export const master = (state: Id | null = null, action: Action): Id | null =>
  action.type === 'SITH_RECEIVED'
    ? prop('id')(action.sith.master) || null
    : state

export const apprentice = (state: Id | null = null, action: Action): Id | null =>
  action.type === 'SITH_RECEIVED'
    ? prop('id')(action.sith.apprentice) || null
    : state

export const lastUpdated = (state: Date | null = null, action: Action): Date | null =>
  action.type === 'SITH_RECEIVED'
    ? new Date()
    : state

export default combineReducers({
  id,
  name,
  homeworld,
  master,
  apprentice,
  lastUpdated
})
