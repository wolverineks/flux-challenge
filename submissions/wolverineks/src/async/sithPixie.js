// @flow

import type {Sith} from '../state/types'
type PixieProps = {id: number, url: string, dispatch: Function}

const sithPixie = () => ({
  update (props: PixieProps) {
    const toJSON = (response) => response.json()
    const dispatch = (sith: Sith) => props.dispatch({type: 'SITH_RECEIVED', sith})
    props.dispatch({type: 'SITH_REQUESTED', id: props.id})

    fetch(props.url)
      .then(toJSON)
      .then(dispatch)
  },
  destroy () {}
})



export default sithPixie
