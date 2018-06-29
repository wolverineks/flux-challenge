// @flow

import SELECTORS from './selectors'
import createStore from '../store'
import type {Store, Sith, Siths, Planet, List} from '../types'

describe('SELECTORS', () => {
  test('getPlanet', () => {
    const planet: Planet = {id: 123, name: 'Tatooine'}
    const store: Store = createStore({planet})
    const actual: Planet = SELECTORS.getPlanet(store.getState())
    const expected: Planet = planet

    expect(actual).toEqual(expected)
  })

  test('getSiths', () => {
    const lastUpdated = new Date()
    const sith: Sith = {
      id: 3616,
      name: 'Darth Sidious',
      homeworld: {id: 7, name: 'Naboo'},
      masterId: 2350,
      apprenticeId: 1489,
      lastUpdated
    }
    const store: Store = createStore({siths: {[sith.id]: sith} })
    const expected: Siths = {[sith.id]: sith}
    const actual: Siths = SELECTORS.getSiths(store.getState())
    expect(actual).toEqual(expected)
  })

  test('getList', () => {
    const list = [3616, null, null, null, null]
    const store: Store = createStore({list})
    const actual: List = SELECTORS.getList(store.getState())
    const expected: Array<number | null> = list
    expect(actual).toEqual(expected)
  })
})
