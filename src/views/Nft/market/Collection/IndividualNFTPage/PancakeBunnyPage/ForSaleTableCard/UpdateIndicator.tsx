import { useEffect, useState } from 'react'
import { Flex, useTooltip } from '@arborswap/uikit'
import { useTranslation } from '@arborswap/localization'
import CountdownCircle from './CountdownCircle'

const UpdateIndicator: React.FC<React.PropsWithChildren<{ isFetchingArborBunnies: boolean }>> = ({
  isFetchingArborBunnies,
}) => {
  const { t } = useTranslation()
  const [secondsRemaining, setSecondsRemaining] = useState(10)
  const { tooltip, tooltipVisible, targetRef } = useTooltip(t('Items in the table update every 10 seconds'), {
    placement: 'auto',
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsRemaining((prev) => prev - 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    if (!isFetchingArborBunnies) {
      setSecondsRemaining(10)
    }
  }, [isFetchingArborBunnies])

  return (
    <Flex justifyContent="center" ref={targetRef}>
      <CountdownCircle secondsRemaining={secondsRemaining} isUpdating={isFetchingArborBunnies} />
      {tooltipVisible && tooltip}
    </Flex>
  )
}

export default UpdateIndicator
