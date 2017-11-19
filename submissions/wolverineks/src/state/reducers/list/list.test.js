// @flow

import reducer, {initialState, type State} from '../../src/state/reducers/list'
import type {State as AllState, Action, Sith, Siths} from '../../src/state/types'
import {idOf, apprenticeIdOf} from '../../src/state/reducers/utils'

describe('list reducer', () => {
  describe('should return the initial state', () => {
    test('initialState', () => {
      // $FlowFixMe
      const action: Action = {}
      const siths = {}
      const next: AllState = {siths, list: [], planet: null}
      // $FlowFixMe
      const actual: State = reducer(undefined, action, next)
      const expected: State = initialState

      expect(actual).toEqual(expected)
    })
  })

  describe('should handle SITH_RECEIVED', () => {
    test('SITH_RECEIVED', () => {
      const sith: Sith = {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        master: {id: 2350, url: 'http://localhost:3000/dark-jedis/2350'},
        apprentice: {id: 1489, url: 'http://localhost:3000/dark-jedis/1489'},
        lastUpdated: new Date()
      }
      const siths: Siths = {
        '3616': {
          id: 3616,
          name: 'Darth Sidious',
          homeworld: {id: 7, name: 'Naboo'},
          master: {url: 'http://localhost:3000/dark-jedis/2350', id: 2350},
          apprentice: {url: 'http://localhost:3000/dark-jedis/1489', id: 1489}
        }
      }
      const next: AllState = {siths, list: [], planet: {id: 123, name: 'qweqwe'} }
      const action: Action = {type: 'SITH_RECEIVED', sith}
      const actual: State = reducer(initialState, action, next)
      const expected: State = [
        idOf(sith),
        apprenticeIdOf(sith),
        null,
        null,
        null
      ]

      expect(actual).toEqual(expected)
    })
  })
})
