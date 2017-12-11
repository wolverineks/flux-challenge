// @flow

import React from 'react'

import {classNames} from '../../..'

type Props = {direction: 'UP' | 'DOWN', onClick: (direction: 'UP' | 'DOWN') => void}
const ScrollButton = ({direction, onClick}: Props) => {
  const className
    = direction === 'UP'
      ? classNames.buttonUp
      : classNames.buttonDown

  return <button className={className} onClick={() => onClick(direction)} />
}

export default ScrollButton
