// @flow

import type {
  // State as AllState,
  // Siths,
  Id,
  Action
} from '../types'

// import {apprenticeIdOf} from './utils.js'

export type State = Id | null
export const initialState = null
export default (state: State = initialState, action: Action) => {
  // const {list, siths} = next
  if (action.type) {
    return state
  }
}
