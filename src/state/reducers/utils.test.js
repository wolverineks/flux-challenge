// @flow

import * as UTILS from './utils'
import type {Id, CacheSiths} from '../types'
import {ORDERED_SITH_IDS, CACHE_SITH_DATA} from './data'

describe('masters', () => {
  test('empty Siths', () => {
    const siths: CacheSiths = {}
    const actual = UTILS.masters(siths)(1330)
    const expected: Array<Id> = []

    expect(actual).toEqual(expected)
  })

  test('1 Sith apprentice sentinel', () => {
    const siths: CacheSiths = {
      [1330]: {
        id: 1330,
        name: 'Antinnis Tremayne',
        homeworld: {id: 58, name: 'Coruscant'},
        masterId: 1489,
        apprenticeId: null
      }
    }
    const actual: Array<Id> = UTILS.masters(siths)(1330)
    const expected: Array<Id> = [1330]

    expect(actual).toEqual(expected)
  })

  test('1 Sith master sentinel', () => {
    const siths: CacheSiths = {
      [5105]: {
        id: 5105,
        name: 'Xendor',
        homeworld: {id: 58, name: 'Coruscant'},
        masterId: null,
        apprenticeId: 4629
      },
    }
    const actual: Array<Id> = UTILS.masters(siths)(5105)
    const expected: Array<Id> = [5105]

    expect(actual).toEqual(expected)
  })

  test('2 Sith', () => {
    const siths: CacheSiths = {
      [1489]: {
        id: 1489,
        name: 'Darth Vader',
        homeworld: {id: 18, name: 'Tatooine'},
        masterId: 3616,
        apprenticeId: 1330
      },
      [3616]: {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        masterId: 2350,
        apprenticeId: 1489
      },
    }
    const actual: Array<Id> = UTILS.masters(siths)(1489)
    const expected: Array<Id> = [3616, 1489]

    expect(actual).toEqual(expected)
  })

  test('3 Sith', () => {
    const siths: CacheSiths = {
      [1489]: {
        id: 1489,
        name: 'Darth Vader',
        homeworld: {id: 18, name: 'Tatooine'},
        masterId: 3616,
        apprenticeId: 1330
      },
      [2350]: {
        id: 2350,
        name: 'Darth Plagueis',
        homeworld: {id: 83, name: 'Mygeeto'},
        masterId: 5956,
        apprenticeId: 3616
      },
      [3616]: {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        masterId: 2350,
        apprenticeId: 1489
      },
    }
    const actual: Array<Id> = UTILS.masters(siths)(1489)
    const expected: Array<Id> = [2350, 3616, 1489]

    expect(actual).toEqual(expected)
  })

  test('4 Sith', () => {
    const siths: CacheSiths = {
      [1330]: {
        id: 1330,
        name: 'Antinnis Tremayne',
        homeworld: {id: 58, name: 'Coruscant'},
        masterId: 1489,
        apprenticeId: null
      },
      [1489]: {
        id: 1489,
        name: 'Darth Vader',
        homeworld: {id: 18, name: 'Tatooine'},
        masterId: 3616,
        apprenticeId: 1330
      },
      [2350]: {
        id: 2350,
        name: 'Darth Plagueis',
        homeworld: {id: 83, name: 'Mygeeto'},
        masterId: 5956,
        apprenticeId: 3616
      },
      [3616]: {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        masterId: 2350,
        apprenticeId: 1489
      },
    }
    const actual: Array<Id> = UTILS.masters(siths)(1330)
    const expected: Array<Id> = [2350, 3616, 1489, 1330]

    expect(actual).toEqual(expected)
  })

  test('4 Sith, middle', () => {
    const siths: CacheSiths = {
      [1330]: {
        id: 1330,
        name: 'Antinnis Tremayne',
        homeworld: {id: 58, name: 'Coruscant'},
        masterId: 1489,
        apprenticeId: null
      },
      [1489]: {
        id: 1489,
        name: 'Darth Vader',
        homeworld: {id: 18, name: 'Tatooine'},
        masterId: 3616,
        apprenticeId: 1330
      },
      [2350]: {
        id: 2350,
        name: 'Darth Plagueis',
        homeworld: {id: 83, name: 'Mygeeto'},
        masterId: 5956,
        apprenticeId: 3616
      },
      [3616]: {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        masterId: 2350,
        apprenticeId: 1489
      },
    }
    const actual: Array<Id> = UTILS.masters(siths)(1489)
    const expected: Array<Id> = [2350, 3616, 1489]

    expect(actual).toEqual(expected)
  })

  test('all Siths', () => {
    const siths: CacheSiths = CACHE_SITH_DATA
    const actual: Array<Id> = UTILS.masters(siths)(1330)
    const expected: Array<Id> = ORDERED_SITH_IDS

    expect(actual).toEqual(expected)
  })
})

//////////////////////////////////////////////////////////////////////////

describe('apprentices', () => {
  test('empty Siths', () => {
    const siths: CacheSiths = {}
    const actual = UTILS.apprentices(siths)(5105)
    const expected: Array<Id> = []

    expect(actual).toEqual(expected)
  })

  test('1 Sith apprentice sentinel', () => {
    const siths: CacheSiths = {
      [1330]: {
        id: 1330,
        name: 'Antinnis Tremayne',
        homeworld: {id: 58, name: 'Coruscant'},
        masterId: 1489,
        apprenticeId: null
      }
    }
    const actual: Array<Id> = UTILS.apprentices(siths)(1330)
    const expected: Array<Id> = [1330]

    expect(actual).toEqual(expected)
  })

  test('1 Sith master sentinel', () => {
    const siths: CacheSiths = {
      [5105]: {
        id: 5105,
        name: 'Xendor',
        homeworld: {id: 58, name: 'Coruscant'},
        masterId: null,
        apprenticeId: 4629
      },
    }
    const actual: Array<Id> = UTILS.apprentices(siths)(5105)
    const expected: Array<Id> = [5105]

    expect(actual).toEqual(expected)
  })

  test('2 Sith', () => {
    const siths: CacheSiths = {
      [1489]: {
        id: 1489,
        name: 'Darth Vader',
        homeworld: {id: 18, name: 'Tatooine'},
        masterId: 3616,
        apprenticeId: 1330
      },
      [3616]: {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        masterId: 2350,
        apprenticeId: 1489
      },
    }
    const actual: Array<Id> = UTILS.apprentices(siths)(3616)
    const expected: Array<Id> = [3616, 1489]

    expect(actual).toEqual(expected)
  })

  test('3 Sith', () => {
    const siths: CacheSiths = {
      [1489]: {
        id: 1489,
        name: 'Darth Vader',
        homeworld: {id: 18, name: 'Tatooine'},
        masterId: 3616,
        apprenticeId: 1330
      },
      [2350]: {
        id: 2350,
        name: 'Darth Plagueis',
        homeworld: {id: 83, name: 'Mygeeto'},
        masterId: 5956,
        apprenticeId: 3616
      },
      [3616]: {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        masterId: 2350,
        apprenticeId: 1489
      },
    }
    const actual: Array<Id> = UTILS.apprentices(siths)(2350)
    const expected: Array<Id> = [2350, 3616, 1489]

    expect(actual).toEqual(expected)
  })

  test('4 Sith', () => {
    const siths: CacheSiths = {
      [1330]: {
        id: 1330,
        name: 'Antinnis Tremayne',
        homeworld: {id: 58, name: 'Coruscant'},
        masterId: 1489,
        apprenticeId: null
      },
      [1489]: {
        id: 1489,
        name: 'Darth Vader',
        homeworld: {id: 18, name: 'Tatooine'},
        masterId: 3616,
        apprenticeId: 1330
      },
      [2350]: {
        id: 2350,
        name: 'Darth Plagueis',
        homeworld: {id: 83, name: 'Mygeeto'},
        masterId: 5956,
        apprenticeId: 3616
      },
      [3616]: {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        masterId: 2350,
        apprenticeId: 1489
      },
    }
    const actual: Array<Id> = UTILS.apprentices(siths)(2350)
    const expected: Array<Id> = [2350, 3616, 1489, 1330]

    expect(actual).toEqual(expected)
  })

  test('4 Sith, middle', () => {
    const siths: CacheSiths = {
      [1330]: {
        id: 1330,
        name: 'Antinnis Tremayne',
        homeworld: {id: 58, name: 'Coruscant'},
        masterId: 1489,
        apprenticeId: null
      },
      [1489]: {
        id: 1489,
        name: 'Darth Vader',
        homeworld: {id: 18, name: 'Tatooine'},
        masterId: 3616,
        apprenticeId: 1330
      },
      [2350]: {
        id: 2350,
        name: 'Darth Plagueis',
        homeworld: {id: 83, name: 'Mygeeto'},
        masterId: 5956,
        apprenticeId: 3616
      },
      [3616]: {
        id: 3616,
        name: 'Darth Sidious',
        homeworld: {id: 7, name: 'Naboo'},
        masterId: 2350,
        apprenticeId: 1489
      },
    }
    const actual: Array<Id> = UTILS.apprentices(siths)(3616)
    const expected: Array<Id> = [3616, 1489, 1330]

    expect(actual).toEqual(expected)
  })

  test('all Siths', () => {
    const siths: CacheSiths = CACHE_SITH_DATA
    const actual: Array<Id> = UTILS.apprentices(siths)(5105)
    const expected: Array<Id> = ORDERED_SITH_IDS

    expect(actual).toEqual(expected)
  })
})
