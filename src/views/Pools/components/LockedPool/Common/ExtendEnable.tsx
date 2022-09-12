import { Button, AutoRenewIcon } from '@arborswap/uikit'
import { useTranslation } from '@arborswap/localization'
import { useExtendEnable } from '../hooks/useExtendEnable'

interface ExtendEnableProps {
  isValidAmount: boolean
  isValidDuration: boolean
}

const ExtendEnable: React.FC<React.PropsWithChildren<ExtendEnableProps>> = ({ isValidAmount, isValidDuration }) => {
  const { t } = useTranslation()

  const { handleEnable, pendingEnableTx } = useExtendEnable()

  return (
    <Button
      width="100%"
      isLoading={pendingEnableTx}
      endIcon={pendingEnableTx ? <AutoRenewIcon spin color="currentColor" /> : null}
      onClick={handleEnable}
      disabled={!(isValidAmount && isValidDuration)}
    >
      {pendingEnableTx ? t('Enabling') : t('Enable')}
    </Button>
  )
}

export default ExtendEnable
