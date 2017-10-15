// @flow
import React, {
  Component
} from 'react'

import type {
  ClassName,
  Children,
  Planet,
} from '../../Types'

type Props = {
  className: ClassName,
  children: Children,
  planet: Planet,
  siths: Siths
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
