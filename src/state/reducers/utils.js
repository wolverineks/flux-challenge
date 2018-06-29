// @flow

import {isNil} from 'ramda'

import type {Id, Sith, CacheSiths} from '../types'

// export const masters = ([{id, masterId}, ...tail]: Array<Sith>, result: Array<Id> = []) => {
//   if (isNil(id)) return result
//   if (isNil(masterId)) return [id, ...result]
//   return masters(tail, [id, ...result])
// }
//
// export const apprentices = ([{id, apprenticeId}, ...tail]: Array<Sith>, result: Array<Id> = []) => {
//   if (isNil(id)) return result
//   if (isNil(apprenticeId)) return [...result, id]
//   return apprentices(tail, [...result, id])
// }

// const sort = (siths: CacheSiths, [head, ...tail]: Array<Id> = Object.keys(siths), result: Array<Id>): Array<Id> => {
//   if (isNil(head)) return result
//   if (isEmpty(result)) return [head]
//
//   const sith = siths[head]
//   if () {
//     return sort(siths, tail, [...tail, head.id])
//   }
//   if () {
//     return sort(siths, tail, [head.id, ...tail])
//   }
// }


export const masters = (siths: CacheSiths) => (id: Id) => {
  const sith = siths[id]
  if (isNil(sith)) return []

  const masterId = sith.masterId
  if (isNil(masterId)) return [id]

  return [...masters(siths)(masterId), id]
}

export const apprentices = (siths: CacheSiths) => (id: Id) => {
  const sith = siths[id]
  if (isNil(sith)) return []

  const apprenticeId = sith.apprenticeId
  if (isNil(apprenticeId)) return [id]

  return [id, ...apprentices(siths)(apprenticeId)]
}


// export const masters = (siths: Siths) => (id: Id) => {
//   const masterId = siths[id].masterId
//   if (!masterId) return [id]
//   return [...masters(siths)(masterId), id]
// }
//
// export const apprentices = (siths: Siths) => (id: Id) => {
//   const apprenticeId = siths[id].apprenticeId
//   if (!apprenticeId) return [id]
//   return [id, ...apprentices(siths)(apprenticeId)]
// }




































// export const apprenticeIdOf = (id: Id | void | null): Function => (siths: Siths): Id | null => {
//   console.log(2)
//   return apprenticeOf(prop(id)(siths)) || null
// }
//
// export const masterIdOf = (id: Id | void | null): Function => (siths: Siths): Id | null => {
//   console.log(2)
//   return masterOf(prop(id)(siths)) || null
// }
// export const prop = (prop: mixed) => (collection: mixed) => {
//   console.log(2)
//   return collection && prop
//     ? collection[prop]
//     : null
// }
// export const byId: (Sith | null) => Id | null = prop('byId')
// export const idOf: (Sith | null) => Id | null = prop('id')
// export const masterOf: (sith: Sith | | void | null) => {id, url} | null = prop('master')
// export const apprenticeOf: ({id, url}: Apprentice | null) => {id: number, url: string} | null = prop('apprentice')

export const apprenticeIdOf = (id: ?Id) => (siths: Siths): Id | null => {
  let apprenticeId
  // $FlowFixMe
  const masterSith = siths[id]
  if (masterSith) {
    apprenticeId = masterSith.apprenticeId
  }
  const sithList: Array<$Values<Sith>> = Object.values(siths)
  return apprenticeId || sithList.find((sith: Sith) => sith.masterId === id) || null
}

export const masterIdOf = (id: ?Id) => (siths: Siths): Id | null => {
  let masterId
  // $FlowFixMe
  const apprenticeSith = siths[id]
  if (apprenticeSith) {
    masterId = apprenticeSith.masterId
  }
  const sithList: Array<$Values<Sith>> = Object.values(siths)
  return masterId || sithList.find((sith: Sith) => sith.apprenticeId === id) || null
}
