// @flow

import {startPixie} from 'redux-pixies'

import sithsPixie from '../../src/async/sithsPixie'

describe('siths pixie', () => {

  describe('should request sith lacking', () => {
    test('[3616, undefined, undefined, undefined, undefined]', () => {
      const props = [3616, undefined, undefined, undefined, undefined]
      const pixie = startPixie(sithsPixie)
      pixie.update(props)
    })
  })

})
