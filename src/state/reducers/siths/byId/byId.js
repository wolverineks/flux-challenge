// @flow

import type {Action, Reducer, CacheSiths} from '.'

export type State = CacheSiths
export const initialState: State = {}
export const byId: Reducer<State> = (state: State = initialState, action: Action): State =>
  action.type === 'SITH_RECEIVED'
    ? {...state, [action.sith.id]: action.sith}
    : state
