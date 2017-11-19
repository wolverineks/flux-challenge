// @flow

import React from 'react'

import {classNames} from '../../..'

type Props = {direction: 'UP' | 'DOWN', onPress: (direction: 'UP' | 'DOWN') => void}
const Button = ({direction, onPress}: Props) => {
  const className
    = direction === 'UP'
      ? classNames.buttonUp
      : classNames.buttonDown

  return <button className={className} onPress={onPress} />
}

export default Button
