// @flow

import {ids, initialState, actions,
  type Action, type AllState, type State, type ServerSith
} from '.'
import {CACHE_SITH_DATA, ORDERED_SITH_IDS} from '../../data'

describe('ids', () => {
  describe('should return the initial state', () => {
    test('initialState', () => {
      // $FlowExpectedError
      const action: Action = {}
      // $FlowExpectedError
      const next: AllState = {siths: {byId: {}, ids: []} }
      const actual: State = ids(undefined, action, next)
      const expected: State = initialState

      expect(actual).toEqual(expected)
    })
  })

  describe('should handle SITH_RECEIVED', () => {
    test('SITH_RECEIVED, initialState -> Ids', () => {
      const lastUpdated = new Date()
      const serverSith: ServerSith = {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        master: {id: 2350, url: 'http://localhost:3000/dark-jedis/2350'},
        apprentice: {id: 1489, url: 'http://localhost:3000/dark-jedis/1489'},
        lastUpdated
      }
      // $FlowExpectedError
      const next: AllState = {siths: {byId: CACHE_SITH_DATA, ids: []} }
      const action: Action = actions.sithReceived(serverSith)
      const actual: State = ids([], action, next)
      const expected: State = ORDERED_SITH_IDS

      expect(actual).toEqual(expected)
    })

    test('SITH_RECEIVED, Adding connected apprentice', () => {
      const lastUpdated = new Date()
      const serverSith: ServerSith = {
        id: 1489,
        name: 'Darth Vader',
        homeworld: {id: 18, name: 'Tatooine'},
        master: {id: 3616, url: 'http://localhost:3000/dark-jedis/3616'},
        apprentice: {id: 1330, url: 'http://localhost:3000/dark-jedis/1330'},
        lastUpdated
      }
      // $FlowExpectedError
      const next: AllState = {siths: {byId: CACHE_SITH_DATA, ids: []} }
      const action: Action = actions.sithReceived(serverSith)
      const actual: State = ids([3616], action, next)
      const expected: State = ORDERED_SITH_IDS

      expect(actual).toEqual(expected)
    })

    test('SITH_RECEIVED, Adding connected master', () => {
      const lastUpdated = new Date()
      const serverSith: ServerSith = {
        id: 2350,
        name: 'Darth Plagueis',
        homeworld: {id: 83, name: 'Mygeeto'},
        master: {id: 5956, url: 'http://localhost:3000/dark-jedis/5956'},
        apprentice: {id: 3616, url: 'http://localhost:3000/dark-jedis/3616'},
        lastUpdated
      }
      // $FlowExpectedError
      const next: AllState = {siths: {byId: CACHE_SITH_DATA, ids: []} }
      const action: Action = actions.sithReceived(serverSith)
      const actual: State = ids([2350, 3616, 1489,], action, next)
      const expected: State = ORDERED_SITH_IDS

      expect(actual).toEqual(expected)
    })
  })

})
