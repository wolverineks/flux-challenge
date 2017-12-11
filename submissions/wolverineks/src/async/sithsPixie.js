// // @flow
//
// import {mapPixie} from 'redux-pixies'
//
// import type {Id, Dispatch, ServerSith} from '../state/types'
//
// import sithPixie from './sithPixie'
// import sithActions from '../state/actions/siths'
//
// const sithsPixie = mapPixie(
//   sithPixie,
//   ({state: {list: {diff} } }) => diff,
//   ({dispatch}, id) => ({update: fetchSith(dispatch, +id), dispatch, id: +id}),
// )
//
// export default sithsPixie
//
// const SITH_URL = 'http://localhost:3000/dark-jedis/'
// const fetchSith = (dispatch: Dispatch, id: Id) => () =>
//   fetch(`${SITH_URL}${id}`)
//     .then((response) => response.json())
//     .then((sith: ServerSith) => { dispatch(sithActions.sithReceived(sith)) })
//     .catch((error: Error) => { dispatch(sithActions.sithRequestErrored(id, error)) })

/////////////////////////////////////////////////////////////////
// @flow

import {mapPixie} from 'redux-pixies'

import type {Id, Dispatch, ServerSith} from '../state/types'

import sithPixie from './sithPixie'
import sithActions from '../state/actions/siths'

const sithsPixie = mapPixie(
  sithPixie,
  ({state: {list: {added} } }) => added,
  ({dispatch}, id) => ({dispatch, id: +id}),
)

export default sithsPixie

const SITH_URL = 'http://localhost:3000/dark-jedis/'
const fetchSith = (dispatch: Dispatch, id: Id) => () =>
  fetch(`${SITH_URL}${id}`)
    .then((response) => response.json())
    .then((sith: ServerSith) => { dispatch(sithActions.sithReceived(sith)) })
    .catch((error: Error) => { dispatch(sithActions.sithRequestErrored(id, error)) })
