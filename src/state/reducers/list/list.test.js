// @flow

import {rootId, maxLength, canScrollUp, canScrollDown, visibleIds, addedIds, removedIds, actions,
  type Action, type AllState, type State, type CacheSiths, type ServerSith
} from '.'

import {CACHE_SITH_DATA} from '../data'

describe('rootId reducer', () => {
  describe('should return initialState', () => {
    test('initialState', () => {
      // $FlowExpectedError
      const action: Action = {}
      const next: AllState = {siths: {byId: {}, ids: []}, planet: null, list: {ids: CACHE_SITH_DATA, canScrollUp: true, canScrollDown: true} }
      // $FlowExpectedError
      const actual: Id = rootId(undefined, action, next)
      const expected: Id = null

      expect(actual).toEqual(expected)
    })
  })

  describe('should handle SCROLLED_UP', () => {
    describe('when canScrollUp', () => {
      test('SCROLLED_UP', () => {
      // $FlowExpectedError
        const action: Action = {type: 'SCROLLED_UP'}
        const next: AllState = {siths: {byId: {}, ids: CACHE_SITH_DATA}, planet: null, list: {canScrollUp: true, canScrollDown: true} }
        // $FlowExpectedError
        const actual: Id = rootId(3616, action, next)
        const expected: Id = 2350

        expect(actual).toEqual(expected)
      })
    })

    describe('when !canScrollUp', () => {
      test('SCROLLED_UP', () => {
      // $FlowExpectedError
        const action: Action = {type: 'SCROLLED_UP'}
        const next: AllState = {siths: {byId: {}, ids: CACHE_SITH_DATA}, planet: null, list: {canScrollUp: false, canScrollDown: true} }
        // $FlowExpectedError
        const actual: Id = rootId(3616, action, next)
        const expected: Id = 3616

        expect(actual).toEqual(expected)
      })
    })
  })

  describe('should handle SCROLLED_DOWN', () => {
    describe('when canScrollDown', () => {
      test('SCROLLED_DOWN', () => {
      // $FlowExpectedError
        const action: Action = {type: 'SCROLLED_DOWN'}
        const next: AllState = {siths: {byId: {}, ids: CACHE_SITH_DATA}, planet: null, list: {canScrollUp: true, canScrollDown: true} }
        // $FlowExpectedError
        const actual: Id = rootId(3616, action, next)
        const expected: Id = 1489

        expect(actual).toEqual(expected)
      })
    })

    describe('when !canScrollDown', () => {
      test('SCROLLED_DOWN', () => {
      // $FlowExpectedError
        const action: Action = {type: 'SCROLLED_DOWN'}
        const next: AllState = {siths: {byId: {}, ids: CACHE_SITH_DATA}, planet: null, list: {canScrollUp: false, canScrollDown: false} }
        // $FlowExpectedError
        const actual: Id = rootId(3616, action, next)
        const expected: Id = 3616

        expect(actual).toEqual(expected)
      })
    })
  })
})
