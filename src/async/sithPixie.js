// @flow

import * as API from './API'
import {sithRequested, sithReceived, sithRequestErrored} from '../state/actions/siths'

import type {Id, Dispatch, ServerSith} from '../state/types'
type PixieProps = {id: Id, dispatch: Dispatch}

export const sithPixie = () => ({
  update ({dispatch, id}: PixieProps) {
    dispatch(sithRequested(id))
    return API.fetchSith(id)
      .then((sith: ServerSith) => dispatch(sithReceived(sith)))
      .catch((error: Error) => dispatch(sithRequestErrored(id, error)))
  },
  destroy () {}
})

// //////////////////////////////////////////////////////
// // @flow
//
// import type {Id, Dispatch, Pixie, ServerSith, Input} from '../state/types'
//
// import sithActions from '../state/actions/siths'
//
// const SITH_URL = 'http://localhost:3000/dark-jedis/'
// const fetchSith = (dispatch: Dispatch, id: Id) =>
//   fetch(`${SITH_URL}${id}`)
// // .then((response) => response.json())
// // .then((sith: ServerSith) => { dispatch(sithActions.sithReceived(sith)) })
// // .catch((error: Error) => { dispatch(sithActions.sithRequestErrored(id, error)) })
//
// const test = () =>
//   new Promise((resolve) =>
//     setTimeout(() =>
//       resolve('test'), 10000))
//
// const sithPixie = () => ({
//   update ({update, dispatch, id}) {
//     // update()
//     // fetchSith(dispatch, +id)
//     test()
//       .then((test) => console.log(test))
//   },
//   destroy: () => {}
// })
//
// export default sithPixie

/////////////////////////////////////////////
// // @flow
//
// import type {Pixie} from '../state/types'
//
//
// const sithPixie = (): Pixie => ({
//   update ({update}) {
//     update()
//   },
//   destroy: () => {}
// })
//
// export default sithPixie

// //////////////////////////////////////////////////
