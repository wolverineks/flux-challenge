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

export default class SithList extends Component<Props, State> {
  render () {
    const {className, planet, siths} = this.props // eslint-disable-line no-unused-vars
    const children = React.Children.map(this.props.children, (child, index) => {
      const {name, homeworld} = siths[index]
      return React.cloneElement(child, {name, homeworld})
    })
    return <ul className={className}>
      {children}
    </ul>
  }
}
