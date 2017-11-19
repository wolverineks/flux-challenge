// SithDashboard/index.js
// @flow

import selectors from './selectors'
import reducer from './reducer'

import Main from './SithDashboard.jsx'
import connector from './connector'

export {
  Main,
  reducer,
  selectors,
}

export default connector
