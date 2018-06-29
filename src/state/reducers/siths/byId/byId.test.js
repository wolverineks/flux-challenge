// @flow

import {byId, initialState, actions,
  type State, type Action, type Sith, type ServerSith
} from '.'

describe('siths byId', () => {
  describe('should return the initial state', () => {
    test('initialState', () => {
      // $FlowExpectedError
      const action: Action = {}
      // $FlowExpectedError
      const actual: State = byId(undefined, action)
      const expected: State = initialState

      expect(actual).toEqual(expected)
    })
  })

  describe('should handle SITH_RECEIVED', () => {
    test('SITH_RECEIVED, initialState -> Siths', () => {
      const serverSith: ServerSith = {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        master: {id: 2350, url: 'http://localhost:3000/dark-jedis/2350'},
        apprentice: {id: 1489, url: 'http://localhost:3000/dark-jedis/1489'},
      }
      const action: Action = actions.sithReceived(serverSith)
      const lastUpdated = new Date()
      const sith: Sith = {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        masterId: 2350,
        apprenticeId: 1489,
        lastUpdated
      }
      const actual: State = byId(initialState, action)
      const expected: State = {[sith.id]: sith}

      expect(actual).toEqual(expected)
    })

    test('SITH_RECEIVED, Siths -> Siths', () => {
      const lastUpdated = new Date()
      const serverSith: ServerSith = {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        master: {id: 2350, url: 'http://localhost:3000/dark-jedis/2350'},
        apprentice: {id: 1489, url: 'http://localhost:3000/dark-jedis/1489'},
        lastUpdated
      }
      const action: Action = actions.sithReceived(serverSith)
      const sith: Sith = {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        masterId: 2350,
        apprenticeId: 1489,
        lastUpdated
      }
      const actual: State = byId(initialState, action)
      const expected: State = {[sith.id]: sith}

      expect(actual).toEqual(expected)
    })
  })
})
