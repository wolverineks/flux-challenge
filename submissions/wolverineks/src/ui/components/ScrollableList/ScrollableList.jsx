// @flow

import React from 'react'

import {classNames, type Children} from '../..'

type Props = {children: Children}
const ScrollableList = ({children}: Props) =>
  <section className={classNames.scrollableList}>
    {children}
  </section>

export default ScrollableList
