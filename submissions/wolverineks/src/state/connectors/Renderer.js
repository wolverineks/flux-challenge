// @flow

import {Component} from 'react'

export type Props = any
export default class Renderer extends Component<Props> {
  render () {
    return this.props.render({...this.props})
  }
}
