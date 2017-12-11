// @flow

import {difference, isNil} from 'ramda'

import type {State as AllState, Action} from '../../types'
import {apprenticeIdOf, masterIdOf} from '../utils'

const BOOTSTRAP_ID = 3616
export type State = {
  values: Array<number | null>,
  added: Array<number>,
  removed: Array<number>
}
export const initialState = {
  values: [BOOTSTRAP_ID, null, null, null, null],
  added: [],
  removed: []
}
export default (state: State = initialState, action: Action, {siths}: AllState) => {
  let rootId = state.values[0]
  let nextValues = state.values

  if (action.type === 'SITH_RECEIVED') {
    const index0 = rootId
    const index1 = apprenticeIdOf(rootId)(siths)
    const index2 = apprenticeIdOf(index1)(siths)
    const index3 = apprenticeIdOf(index2)(siths)
    const index4 = apprenticeIdOf(index3)(siths)

    nextValues = [ index0, index1, index2, index3, index4]
  }

  if (action.type === 'SCROLLED' && action.direction == 'UP') {
    const index0 = masterIdOf(rootId)(siths)
    const index1 = rootId
    const index2 = apprenticeIdOf(rootId)(siths)
    const index3 = apprenticeIdOf(index2)(siths)
    const index4 = apprenticeIdOf(index3)(siths)

    nextValues = [ index0, index1, index2, index3, index4,]
  }

  if (action.type === 'SCROLLED' && action.direction == 'DOWN') {
    const index0 = apprenticeIdOf(rootId)(siths)
    const index1 = apprenticeIdOf(index0)(siths)
    const index2 = apprenticeIdOf(index1)(siths)
    const index3 = apprenticeIdOf(index2)(siths)
    const index4 = apprenticeIdOf(index3)(siths)

    nextValues = [ index0, index1, index2, index3, index4 ]
  }

  const added = difference(nextValues, state.values)
  const removed = difference(state.values, nextValues)
  return isValid(nextValues) ? {
    values: nextValues,
    added,
    removed
  } : state
}

const isValid = (values: Array<number | null>): boolean => !isNil(values[0])
