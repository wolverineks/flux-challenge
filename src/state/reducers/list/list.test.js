// @flow

import reducer, {initialState, actions,
  type Action, type AllState, type State, type Siths, type ServerSith
} from '.'

// tests
// list
//   X should return initialState
//   X should handle SITH_RECEIVED
//     should handle SCROLLED
//     direction UP
//       sith available
//       sith not available
//
//     direction DOWN
//       sith available
//       sith not available

describe('list reducer', () => {
  describe('should return the initial state', () => {
    test('initialState', () => {
      // $FlowExpectedError
      const action: Action = {}
      const next: AllState = {siths: {}, planet: null}
      const actual: State = reducer(undefined, action, next)
      const expected: State = initialState

      expect(actual).toEqual(expected)
    })
  })

  describe('should handle SITH_RECEIVED', () => {
    test('SITH_RECEIVED, initialState', () => {
      const lastUpdated = new Date()
      const serverSith: ServerSith = {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        master: {id: 2350, url: 'http://localhost:3000/dark-jedis/2350'},
        apprentice: {id: 1489, url: 'http://localhost:3000/dark-jedis/1489'},
        lastUpdated
      }
      const sith = {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        masterId: 2350,
        apprenticeId: 1489,
      }
      const siths: Siths = {[sith.id]: {...sith, lastUpdated} }
      const action: Action = actions.sithReceived(serverSith)
      const next: AllState = {planet: null, siths}
      const actual: State = reducer(initialState, action, next)
      const expected: State = [
        3616,
        1489,
        null,
        null,
        null
      ]

      expect(actual).toEqual(expected)
    })
  })

  describe('should handle SCROLLED', () => {
    describe('direction UP', () => {
      describe('when additional sith available', () => {
        test('SCROLLED, initialState', () => {
          const lastUpdated = new Date()
          const sith: ServerSith = {
            id: 3616,
            name: 'Darth Sidious',
            homeworld: {id: 7, name: 'Naboo'},
            master: {id: 2350, url: 'http://localhost:3000/dark-jedis/2350'},
            apprentice: {id: 1489, url: 'http://localhost:3000/dark-jedis/1489'},
            lastUpdated
          }
          const siths: Siths = {
            [3616]: {
              id: 3616,
              name: 'Darth Sidious',
              homeworld: {id: 7, name: 'Naboo'},
              master: 2350,
              apprentice: 1489,
              lastUpdated
            }
          }
          const next: AllState = {planet: null, siths}
          const action: Action = actions.sithReceived(sith)
          const actual: State = reducer(initialState, action, next)
          const expected: State = [
            3616,
            1489,
            null,
            null,
            null
          ]

          expect(actual).toEqual(expected)
        })
      })
    })

    describe('when additional sith not available', () => {
      test('SCROLLED, initialState', () => {
        const sith: ServerSith = {
          id: 3616,
          name: 'Darth Sidious',
          homeworld: {id: 7, name: 'Naboo'},
          master: {id: 2350, url: 'http://localhost:3000/dark-jedis/2350'},
          apprentice: {id: 1489, url: 'http://localhost:3000/dark-jedis/1489'}
        }
        const siths: Siths = {
          [3616]: {
            id: 3616,
            name: 'Darth Sidious',
            homeworld: {id: 7, name: 'Naboo'},
            master: 2350,
            apprentice: 1489,
            lastUpdated: new Date()
          }
        }
        const next: AllState = {siths, list: [], planet: {id: 123, name: 'test'} }
        const action: Action = actions.sithReceived(sith)
        const actual: State = reducer(initialState, action, next)
        const expected: State = [
          3616,
          1489,
          null,
          null,
          null
        ]

        expect(actual).toEqual(expected)
      })
    })
  })
})
