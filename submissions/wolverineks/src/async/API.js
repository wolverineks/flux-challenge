// @flow

import type {ServerSith} from '../state/types'

const SITH_URL = 'http://localhost:3000/dark-jedis/'

export const fetchSith = (id: number): Promise<ServerSith> =>
  fetch(`${SITH_URL}${id}`)
    .then((response) => response.json())
