// SithDashboard/components/ScrollButtons.jsx
// @flow

import React, {Component, type ChildrenArray, type Element} from 'react'

import Button from './Button.jsx'
import {classNames} from '../../../styles'

type Props = {children: ChildrenArray<Element<typeof Button>>}
type State = {}

export default class ScrollButtons extends Component<Props, State> {
  render () {
    const {children} = this.props

    return <div className={classNames.scrollButtons}>
      {children}
    </div>
  }
}
