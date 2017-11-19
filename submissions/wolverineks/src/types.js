// Types.js
// @flow

import type {Store as ReduxStore, Dispatch as ReduxDispatch} from 'redux'

import type {State as SithDashboardState} from './SithDashboard/types'

export type State = {sithDashboard: SithDashboardState}
export type Action = {type: string, data: any}

export type Store = ReduxStore<State, Action>
export type GetState = () => State
export type Dispatch = ReduxDispatch<Action>
