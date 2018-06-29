// @flow

import SELECTORS from './selectors'
import createStore from '../store'
import type {Store, Sith, CacheSiths, Planet, Ids} from '../types'

describe('SELECTORS', () => {
  test('planet', () => {
    const planet: Planet = {id: 123, name: 'Tatooine'}
    const store: Store = createStore({planet, siths: {byId: {} , ids: []}, list: {ids: [], added: [], removed: []} })
    const actual: Planet | null = SELECTORS.planet(store.getState())
    const expected: Planet = planet

    expect(actual).toEqual(expected)
  })

  test('cacheSiths', () => {
    const lastUpdated = new Date()
    const sith: Sith = {
      id: 3616,
      name: 'Darth Sidious',
      homeworld: {id: 7, name: 'Naboo'},
      masterId: 2350,
      apprenticeId: 1489,
      lastUpdated
    }
    const byId = {[sith.id]: sith}
    const ids = [sith.id]
    const store: Store = createStore({planet: null, siths: {byId, ids}, list: {ids: [], added: [], removed: []} })
    const expected: CacheSiths = byId
    const actual: CacheSiths = SELECTORS.cacheSiths(store.getState())
    expect(actual).toEqual(expected)
  })

  test('ids', () => {
    const ids = [3616]
    const store: Store = createStore({planet: null, siths: {byId: {}, ids}, list: {ids: [], added: [], removed: []} })
    const actual: Ids = SELECTORS.ids(store.getState())
    const expected: Ids = ids
    expect(actual).toEqual(expected)
  })
})
