// @flow

import type {State as AllState, Action} from '../../types'
import {added, removed, isValid} from '../utils'

const BOOTSTRAP_ID = 3616
export type State = {
  rootId: number,
  length: number,
  canScrollUp: boolean,
  canScrollDown: boolean,
  visibleIds: Array<number>,
  addedIds: Array<number>,
  removedIds: Array<number>
}
export const initialState = {
  rootId: BOOTSTRAP_ID,
  length: 5,
  canScrollUp: false,
  canScrollDown: false,
  visibleIds: [],
  addedIds: [],
  removedIds: []
}
export default (state: State = initialState, action: Action, {siths: {byId, ids} }: AllState) => {
  let visibleIds = state.visibleIds
  if (action.type === 'SITH_RECEIVED') {
    visibleIds = []
  }

  if (action.type === 'SCROLLED_UP') {
    visibleIds = []
  }

  if (action.type === 'SCROLLED_DOWN') {
    visibleIds = []
  }

  const addedIds = added(ids, state.visibleIds)
  const removedIds = removed(state.visibleIds, ids)
  return isValid(visibleIds) ? {
    visibleIds,
    addedIds,
    removedIds
  } : state
}
