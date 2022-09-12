import { Flex, Text } from '@arborswap/uikit'
import { useTranslation } from '@arborswap/localization'

const LockDurationRow = ({ weekDuration }) => {
  const { t } = useTranslation()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text color="textSubtle" textTransform="uppercase" bold fontSize="12px">
        {t('Lock Duration')}
      </Text>
      <Text color="text" bold fontSize="16px">
        {weekDuration}
      </Text>
    </Flex>
  )
}

export default LockDurationRow
