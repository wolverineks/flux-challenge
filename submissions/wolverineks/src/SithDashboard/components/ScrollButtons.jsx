// @flow
import React, {
  Component
} from 'react'

import type {
  ClassName,
  Children
} from '../../Types'

type Props = {
  className: ClassName,
  children: Children
}
type State = {}

export default class ScrollButtons extends Component<Props, State> {
  render () {
    const {className, children} = this.props
    return <div className={className}>
      {children}
    </div>
  }
}
