// @flow

import {combinePixies} from 'redux-pixies'

import sithPixie from './sithPixie'
import sithsPixie from './sithsPixie'

export {
  sithPixie,
  sithsPixie
}

export default combinePixies({sithsPixie})
