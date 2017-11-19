// @flow

import type {Id, Sith, Siths} from '../types'

export const apprenticeIdOf = (id: Id | void | null): Function => (siths: Siths): Id | null =>
  idOf(apprenticeOf(prop(id)(siths)))

export const masterIdOf = (id: Id | void | null): Function => (siths: Siths): Id | null =>
  idOf(masterOf(prop(id)(siths)))

export const prop = (prop: any) => (collection: any) =>
  collection && prop
    ? collection[prop]
    : null

export const idOf: (Sith | null) => Id | null = prop('id')
export const masterOf: (Sith | null) => {id: number, url: string} | null = prop('master')
export const apprenticeOf: (Sith | null) => {id: number, url: string} | null = prop('apprentice')
