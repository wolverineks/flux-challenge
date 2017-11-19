// @flow

import {byId, planets, current, initialState, type State} from './planets'
import type {Action, Id, Planet} from '../../types'

describe('planets', () => {
  describe('should return the initial state', () => {
    test('initialState', () => {
      // $FlowFixMe
      const action: Action = {}
      // $Flow
      const actual: State = planets(undefined, action)
      const expected: State = initialState

      expect(actual).toEqual(expected)
    })
  })

  describe('byId', () => {
    describe('should handle PLANET_RECEIVED', () => {
      test('PLANET_RECEIVED', () => {
        const planet: Planet = {name: 'test', id: 123}
        const action: Action = {type: 'PLANET_RECEIVED', planet}
        const actual: {[Id]: Planet} = byId(undefined, action)
        const expected: {[Id]: Planet} = {[planet.id]: planet}

        expect(actual).toEqual(expected)
      })
    })
  })

  describe('current', () => {
    describe('should handle PLANET_RECEIVED', () => {
      test('PLANET_RECEIVED', () => {
        const planet: Planet = {name: 'test', id: 123}
        const action: Action = {type: 'PLANET_RECEIVED', planet}
        const actual: Id | null = current(undefined, action)
        const expected: Id = planet.id

        expect(actual).toEqual(expected)
      })
    })
  })
})
