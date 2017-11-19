// @flow

import type {Sith, Action} from '../types'

export type State = {[index: string]: Sith}
export const initialState = {}
export default (state: State = initialState, action: Action) =>
  action.type === 'SITH_RECEIVED'
    ? {...state, [action.sith.id]: {...action.sith, lastUpdated: new Date()} }
    : state
