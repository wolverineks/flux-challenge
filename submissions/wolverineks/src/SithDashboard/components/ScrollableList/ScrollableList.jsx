// SithDashboard/components/Siths_.jsx
// @flow

import React, {Component, type ChildrenArray, type Element} from 'react'

import {classNames} from '../../styles'

type Props = {children: ChildrenArray<Element<*>>}
type State = {}

export default class ScrollableList extends Component<Props, State> {
  render () {
    const {children} = this.props

    return <section className={classNames.scrollableList}>
      {children}
    </section>
  }
}
