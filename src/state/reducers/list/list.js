// @flow

import {buildReducer} from 'redux-keto'

import type {State as AllState, Action, Id, Ids} from '../../types'
import {added, removed} from '../utils'
import SELECTORS from '../selectors'

const connect = (mapNextToProps) => (reducer) => (state: any, action: Action, next: AllState) => {
  const props = mapNextToProps(next)
  return reducer(state, action, props)
}

export const rootId = connect((next: AllState) => ({ids: SELECTORS.ids(next)}))((state: Id = NaN, action: Action, next) => {
  const {ids} = next
  switch (action.type) {
  case 'SCROLLED_UP':
    return ids[ids.indexOf(state) - 1] || state
  case 'SCROLLED_DOWN':
    return ids[ids.indexOf(state) + 1] || state
  default:
    return state || ids[0]
  }
})

const mapNextToProps = (next: AllState) => ({
  ids:    SELECTORS.ids(next),
  rootId: SELECTORS.rootId(next)
})

const canScrollUpReducer = (state: boolean = false, action: Action, props) => {
  return (action.type === 'SCROLLED_UP') || (action.type === 'SCROLLED_DOWN') || (action.type === 'SITH_RECEIVED')
    ? props.ids.indexOf(props.rootId) >= 1
    : state
}

const canScrollUp = connect(mapNextToProps)(canScrollUpReducer)

const canScrollDownReducer = (state: boolean = false, action: Action, {ids, rootId}) =>
  (action.type === 'SCROLLED_UP') || (action.type === 'SCROLLED_DOWN') || (action.type === 'SITH_RECEIVED')
    ? ids.indexOf(rootId) <= ids.length - 1
    : state

const mapNextToProps = (next: AllState) => ({
  ids:    SELECTORS.ids(next),
  rootId: SELECTORS.rootId(next)
})

const canScrollDown = connect(mapNextToProps)(canScrollDownReducer)

const mapNextToProps = (state: State) => ({
  ids: SELECTORS.ids(state),
  rootId: SELECTORS.rootId(state),
  maxLength: SELECTORS.maxLength(state)
})

export const visibleIdsReducer = (state: Array<Id>, action: Action, {ids, rootId, maxLength}) => {
  const startIndex = ids.indexOf(rootId)
  const endIndex = startIndex + maxLength

  return ids.slice(startIndex, endIndex)
}

const visibleIds = connect(mapNextToProps)(visibleIdsReducer)

const addedIdsReducer = (state: Array<Id>, action: Action, {ids}) => {
  return added(state, ids)
}

const mapNextToProps = (state: State) => ({
  ids: SELECTORS.ids(state)
})

const addedIds = connect(mapNextToProps)(addedIdsReducer)

const removedIdsReducer = (state: Array<Id>, action: Action, next) => {
  return removed(state, ids)
}

const mapNextToProps = (state: State) => ({
  ids: SELECTORS.ids(state)
})

const removedIds = connect(mapNextToProps)(removedIdsReducer)

export const maxLength = (state: number = 5, action: Action) =>
  action.type === 'SET_MAX_LENGTH' ? action.maxLength : state

export type State = {
  maxLength: number,
  canScrollUp: boolean,
  canScrollDown: boolean,
  visibleIds: Ids,
  addedIds: Ids,
  removedIds: Ids,
}
export const list = buildReducer({
  rootId,
  canScrollUp,
  canScrollDown,
  visibleIds,
  addedIds,
  removedIds,
  maxLength,
})

//delete,me/////////////////////////////////////////////////////////////////////

// const nextState = {
//   ids: [0, 1, 2, 3, 4, 5, 6, 7],
//   canScrollUp: true,
//   canScrollDown: true
// }
//
// const SELECTORS = {
//   ids: (state) => state.ids,
//   canScrollUp: (state) => state.canScrollUp,
//   canScrollDown: (state) => state.canScrollDown,
// }
//
// const rootIdReducer = (state = null, action, {ids, canScrollUp, canScrollDown}) => {
//   switch (action.type) {
//   case 'SCROLLED_UP':
//     return canScrollUp ? ids[ids.indexOf(state) - 1] : state
//   case 'SCROLLED_DOWN':
//     return canScrollDown ? ids[ids.indexOf(state) + 1] : state
//   default:
//     return state
//   }
// }
//
// const mapNextToProps = (next) => ({
//   ids:           SELECTORS.ids(next),
//   canScrollUp:   SELECTORS.canScrollUp(next),
//   canScrollDown: SELECTORS.canScrollDown(next)
// })
//
// const connect = (mapNextToProps) => (reducer) => {
//   return (action, state, next) => reducer(action, state, mapNextToProps(next))
// }
//
// const rootId = connect(mapNextToProps)(rootIdReducer)


/////////////////////////////////////////////////////////////////////
