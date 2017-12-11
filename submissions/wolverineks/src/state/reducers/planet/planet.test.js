// @flow

import reducer, {initialState, actions, type Action, type State, type Planet} from '.'

describe('planet', () => {
  describe('should return the initial state', () => {
    test('initialState', () => {
      // $FlowExpectedError
      const action: Action = {}
      // $FlowExpectedError
      const actual: State = reducer(undefined, action)
      const expected: State = initialState

      expect(actual).toEqual(expected)
    })
  })

  describe('should handle PLANET_RECEIVED', () => {
    test('PLANET_RECEIVED, initialState -> Id', () => {
      const planet: Planet = {name: 'test', id: 123}
      const action: Action = actions.planetReceived(planet)
      // $FlowExpectedError
      const actual: State = reducer(undefined, action)
      const expected: State = planet

      expect(actual).toEqual(expected)
    })

    test('PLANET_RECEIVED, Id -> Id', () => {
      const planetA: Planet = {id: 123, name: 'testA'}
      const planetB: Planet = {id: 456, name: 'testB'}
      const action: Action = actions.planetReceived(planetB)

      const actual: State = reducer(planetA, action)
      const expected: State = planetB

      expect(actual).toEqual(expected)
    })
  })
})
