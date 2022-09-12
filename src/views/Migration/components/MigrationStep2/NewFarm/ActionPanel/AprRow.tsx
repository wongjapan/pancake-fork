import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@arborswap/uikit'
import { useTranslation } from '@arborswap/localization'
import Apr, { AprProps } from 'views/Farms/components/FarmTable/Apr'

const Containter = styled(Flex)`
  margin-top: 12px;
  padding: 0;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 0px;
    padding: 0 12px;
  }
`

const AprRow: React.FC<React.PropsWithChildren<AprProps>> = (apr) => {
  const { t } = useTranslation()

  return (
    <Containter justifyContent="space-between">
      <Text>{t('APR')}</Text>
      <Apr {...apr} />
    </Containter>
  )
}

export default AprRow
