import React from 'react'
import { Text } from '@arborswap/uikit'

export interface EmptyTextProps {
  text: string
}

const EmptyText: React.FC<React.PropsWithChildren<EmptyTextProps>> = ({ text }) => {
  return (
    <Text padding="24px" fontSize="16px" textAlign="center">
      {text}
    </Text>
  )
}

export default EmptyText
