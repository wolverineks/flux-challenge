// @flow

import React from 'react'

import {classNames} from '../..'

type Props = {children: Function}
const ScrollableList = ({children}: Props) => {
  const startOfList = false
  const endOfList   = false

  return <section className={classNames.scrollableList}>
    {children(startOfList, endOfList)}
  </section>
}
export default ScrollableList
