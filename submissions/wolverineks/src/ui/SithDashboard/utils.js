// @flow

const prop = (key: string) => (object: ?Object) =>
  object
    ? object[key]
    : null

export const name = prop('name')
export const homeworld = prop('homeworld')
