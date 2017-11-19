// SithDashboard/components/List.jsx
// @flow

import React, {Component, type ChildrenArray, type Element} from 'react'

import Item from './Item'
import {classNames} from '../../../styles'

type Props = {children: ChildrenArray<Element<typeof Item>>}
type State = {}

export default class List extends Component<Props, State> {
  render () {
    const {children} = this.props

    return <ul className={classNames.sithList}>
      {children}
    </ul>
  }
}
