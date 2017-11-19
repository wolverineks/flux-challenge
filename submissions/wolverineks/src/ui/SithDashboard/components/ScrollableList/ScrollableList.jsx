// @flow

import React, {type Node} from 'react'

import {classNames} from '../..'

import type {Siths} from '../../../../state/types'

type Props = {data: Siths, render: (Siths) => Node}
const ScrollableList = ({data, render}: Props) =>
  <section className={classNames.scrollableList}>
    {render(data)}
  </section>

export default ScrollableList
