// @flow
export type Children = Array<any>
export type ClassName = string

export type Siths = Array<Sith>
export type Sith = {
  id: number,
  name: Name,
  homeworld: Planet,
  master: number | null,
  apprentice: number | null
}
export type Name = string
export type Planet = {
  id: number,
  name: string
}
