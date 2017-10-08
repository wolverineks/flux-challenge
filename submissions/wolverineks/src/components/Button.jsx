// @flow
import React, {
  Component
} from 'react'

import type * as Types from '../Types'
type Props = {className: Types.ClassName}
type State = {}

export default class Button extends Component<Props, State> {
  render () {
    const {className} = this.props
    return <button className={className} />
  }
}
