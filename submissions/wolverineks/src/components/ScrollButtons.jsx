// @flow
import React, {
  Component
} from 'react'

import type * as Types from '../Types'
type Props = {
  className: Types.ClassName,
  children: Types.Children
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
