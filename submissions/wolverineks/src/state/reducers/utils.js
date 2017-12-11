// @flow

import type {
  Id,
  // Sith,
  Siths
} from '../types'

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
  try {
    return siths[id].apprenticeId || null
  } catch (error) {
    return null
  }
}

export const masterIdOf = (id: ?Id) => (siths: Siths): Id | null => {
  try {
    return siths[id].masterId || null
  } catch (error) {
    return null
  }
}
