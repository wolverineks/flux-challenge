// SithList.jsx
// @flow

import React, {
  Component
} from 'react'

import type {
  ClassName,
  Children,
  Planet,
  Siths
} from '../../Types'

type Props = {
  className: ClassName,
  children: Children,
  planet: Planet,
  siths: Siths
}

type State = {}

export default class SithList extends Component<Props, State> {
  render () {
    const {
      className,
      planet, // eslint-disable-line no-unused-vars
      siths
    } = this.props
    const children = React.Children.map(this.props.children, (child, index) => {
      const sith = siths[index]
      const name = sith
        ? sith.name
        : undefined
      const homeworld = sith
        ? sith.homeworld
        : undefined

      return React.cloneElement(child, {name, homeworld})
    })

    return <ul className={className}>
      {children}
    </ul>
  }
}
