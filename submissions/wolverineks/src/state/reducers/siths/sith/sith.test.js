// @flow

import reducer from './sith'
import type {Action, ServerSith, Sith} from '../../../types'

describe('sith reducer', () => {
  describe('should handle SITH_RECEIVED', () => {
    test('SITH_RECEIVED', () => {
      const serverSith: ServerSith = {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        master: {id: 2350, url: 'http://localhost:3000/dark-jedis/2350'},
        apprentice: {id: 1489, url: 'http://localhost:3000/dark-jedis/1489'},
      }
      const sith: Sith = {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        master: 2350,
        apprentice: 1489,
        lastUpdated: new Date()
      }
      const action: Action = {type: 'SITH_RECEIVED', sith: serverSith}
      const actual = reducer(undefined, action)
      const expected = sith

      expect(actual).toEqual(expected)
    })
  })
})
