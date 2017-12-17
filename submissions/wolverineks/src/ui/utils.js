// @flow

import type {Id, Siths} from '../state/types'

const prop = (key: string) => (object: ?Object) =>
  object
    ? object[key]
    : null

export const name = prop('name')
export const homeworld = prop('homeworld')

export const masters = (siths: Siths) => (id: Id) => {
  const masterId = siths[id].masterId
  if (!masterId) return [id]
  return [...masters(siths)(masterId), id]
}

export const apprentices = (siths: Siths) => (id: Id) => {
  const apprenticeId = siths[id].apprenticeId
  if (!apprenticeId) return [id]
  return [id, ...apprentices(siths)(apprenticeId)]
}
