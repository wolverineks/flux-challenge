// Smoke tests for a combine reducer
// https://github.com/reactjs/redux/issues/1412
// @flow

import reducer, {initialState, initialById, initialIds,
  type State
} from '.'

describe('siths reducer', () => {
  describe('should return the initial state', () => {
    test('initialState', () => {
      // $FlowExpectedError
      const actual: State = reducer(undefined, {})
      const expected: State = initialState

      expect(actual).toEqual(expected)
    })
  })

  describe('should return the initial byId state', () => {
    test('initialState', () => {
      // $FlowExpectedError
      const state: State = reducer(undefined, {})
      const actual = state.byId
      const expected = initialById

      expect(actual).toEqual(expected)
    })
  })

  describe('should return the initial ids state', () => {
    test('initialState', () => {
      // $FlowExpectedError
      const state: State = reducer(undefined, {})
      const actual = state.ids
      const expected = initialIds

      expect(actual).toEqual(expected)
    })
  })
})
