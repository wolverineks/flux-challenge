// @flow

import {mapPixie} from 'redux-pixies'

import sithPixie from './sithPixie'

const SITH_URL = 'http://localhost:3000/dark-jedis/'

const sithsPixie = mapPixie(
  sithPixie,
  (props) => props.state.list.filter((id) => id),
  (props, id) => ({dispatch: props.dispatch, id, url: url(id)})
)

const url = (id) => `${SITH_URL}${id}`

export default sithsPixie
