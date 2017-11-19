// @flow

import {id, name, planet as planetReducer, initialState, type State} from './planet'
import type {Action, Id, Name, Planet} from '../../../types'

describe('planet', () => {
  describe('should return the initial state', () => {
    test('initialState', () => {
      // $FlowFixMe
      const action: Action = {}
      // $Flow
      const actual: State = planetReducer(undefined, action)
      const expected: State = initialState

      expect(actual).toEqual(expected)
    })
  })

  describe('should handle PLANET_RECEIVED', () => {
    test('PLANET_RECEIVED', () => {
      // $FlowFixMe
      const planet: Planet = {name: 'test', id: 123}
      const action: Action = {type: 'PLANET_RECEIVED', planet}
      // $Flow
      const actual: State = planetReducer(undefined, action)
      const expected: State = planet

      expect(actual).toEqual(expected)
      // const planet: Planet = {name: 'test', id: 123}
      // const action: Action = {type: 'PLANET_RECEIVED', planet}
      // const actual: State = planetReducer(undefined, action)
      // const expected: State = {[planet.id]: planet}
      //
      // expect(actual).toEqual(expected)
    })
  })
})

describe('id', () => {
  describe('should handle PLANET_RECEIVED', () => {
    test('PLANET_RECEIVED', () => {
      const planet: Planet = {name: 'test', id: 123}
      const action: Action = {type: 'PLANET_RECEIVED', planet}
      const actual: Id | null = id(undefined, action)
      const expected: Id = planet.id

      expect(actual).toEqual(expected)
    })
  })
})

describe('name', () => {
  describe('should handle PLANET_RECEIVED', () => {
    test('PLANET_RECEIVED', () => {
      const planet: Planet = {name: 'test', id: 123}
      const action: Action = {type: 'PLANET_RECEIVED', planet}
      const actual: Name | null = name(undefined, action)
      const expected: Name = planet.name

      expect(actual).toEqual(expected)
    })
  })
})
