// @flow
import React, {
  Component
} from 'react'

import type * as Types from '../Types'
type Props = {
  className: Types.ClassName,
  children: Types.Children,
  planet: Types.Planet,
  siths: Types.Siths
}
type State = {}

export default class Siths extends Component<Props, State> {
  render () {
    const {className, planet, siths} = this.props
    const children = React.Children.map(this.props.children, ((child) =>
      React.cloneElement(child, {planet, siths})
    ))

    return <section className={className}>
      {children}
    </section>
  }
}
