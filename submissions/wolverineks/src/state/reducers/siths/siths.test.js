// @flow

import reducer, {initialState, type State} from './siths'
import type {Action, Sith} from '../../types'

describe('siths reducer', () => {
  describe('should return the initial state', () => {
    test('initialState', () => {
      // $FlowFixMe
      const action: Action = {}
      // $FlowFixMe
      const actual: State = reducer(undefined, action)
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
      const action: Action = {type: 'SITH_RECEIVED', sith}
      const actual: State = reducer(initialState, action)
      const expected: State = {[sith.id]: sith}

      expect(actual).toEqual(expected)
    })
  })
})
