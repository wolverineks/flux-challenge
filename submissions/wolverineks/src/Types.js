// Types.js
// @flow

import type {Node} from 'react'

export type Children = Array<Node>
export type ClassName = string

export type Siths = Array<Sith>
export type Sith = {
  id: Id,
  name: Name,
  homeworld: Planet,
  master: Id | null,
  apprentice: Id | null
}

export type Planet = {
  id: Id,
  name: Name
}

export type Name = string
export type Id = number
