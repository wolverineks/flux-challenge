// @flow

// import {combineReducers} from 'redux'
import {buildReducer} from 'redux-keto'

import planet from './planet'
import siths from './siths'
import list from './list'

export {default as selectors} from './selectors'

export default buildReducer({planet, siths, list})
// export default combineReducers({planet, siths, list})
