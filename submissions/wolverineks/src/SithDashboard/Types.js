// SithDashboard/types.js
// @flow

import type {ChildrenArray} from 'react'

export type State = {planet: Planet, siths: Siths}
export type Action
  = {type: 'PLANET_RECEIVED', planet: Planet}
  | {type: 'SITH_RECEIVED', sith: Sith}
  | {type: 'SCROLL_UP'}
  | {type: 'SCROLL_DOWN'}

export type Children = ChildrenArray<*>
export type ClassName = string
export type Siths = Array<Sith>
export type Sith = {id: Id, name: Name, homeworld: Planet, master: Id | null, apprentice: Id | null}
export type Planet = {id: Id, name: Name}
export type Name = string
export type Id = number
