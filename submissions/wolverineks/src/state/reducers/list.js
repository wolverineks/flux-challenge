// @flow

import type {State as AllState, Id, Action} from '../types'
import {apprenticeIdOf, masterIdOf} from './utils.js'

export type State = Array<Id | null>
const BOOTSTRAP_ID = 3616
export const initialState = [
  BOOTSTRAP_ID,
  null,
  null,
  null,
  null
]
export default (state: State = initialState, action: Action, {siths}: AllState) => {
  let next = [
    state[0],

    apprenticeIdOf(state[0])(siths),

    apprenticeIdOf(
      apprenticeIdOf(
        state[0]
      )(siths)
    )(siths),

    apprenticeIdOf(
      apprenticeIdOf(
        apprenticeIdOf(state[0])(siths)
      )(siths)
    )(siths),

    apprenticeIdOf(
      apprenticeIdOf(
        apprenticeIdOf(
          apprenticeIdOf(state[0])(siths)
        )(siths)
      )(siths)
    )(siths)
  ]

  if (action.type === 'SCROLLED' && action.direction == 'UP') {
    next = [
      masterIdOf(
        masterIdOf(state[0])(siths)
      )(siths),

      masterIdOf(state[0])(siths),

      state[0],

      apprenticeIdOf(state[0])(siths),

      apprenticeIdOf(
        apprenticeIdOf(state[0])(siths)
      )(siths),
    ]
  }

  if (action.type === 'SCROLLED' && action.direction == 'DOWN') {
    next = [
      apprenticeIdOf(
        apprenticeIdOf(state[0])(siths)
      )(siths),

      apprenticeIdOf(
        apprenticeIdOf(
          apprenticeIdOf(state[0])(siths)
        )(siths)
      )(siths),

      apprenticeIdOf(
        apprenticeIdOf(
          apprenticeIdOf(
            apprenticeIdOf(state[0])(siths)
          )(siths)
        )(siths)
      )(siths),

      apprenticeIdOf(
        apprenticeIdOf(
          apprenticeIdOf(
            apprenticeIdOf(
              apprenticeIdOf(state[0])(siths)
            )(siths)
          )(siths)
        )(siths)
      )(siths),

      apprenticeIdOf(
        apprenticeIdOf(
          apprenticeIdOf(
            apprenticeIdOf(
              apprenticeIdOf(
                apprenticeIdOf(state[0])(siths)
              )(siths)
            )(siths)
          )(siths)
        )(siths)
      )(siths)
    ]
  }

  return next.every((item) => typeof item === 'undefined')
    ? state
    : next
}
