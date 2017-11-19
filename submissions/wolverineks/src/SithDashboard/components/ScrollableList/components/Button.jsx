// SithDashboard/components/Button.jsx
// @flow

import React, {Component} from 'react'

type Props = {direction: 'up' | 'down'}
type State = {}

import {classNames} from '../../../styles'

export default class Button extends Component<Props, State> {
  render () {
    const {direction} = this.props

    const className = direction === 'up' ? classNames.buttonUp : classNames.buttonDown
    return <button className={className} />
  }
}
