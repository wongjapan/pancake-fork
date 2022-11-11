import { RocketIcon, Tag, TagProps } from '@arborswap/uikit'
import { useTranslation } from '@arborswap/localization'
import { memo } from 'react'

interface BoostedTag extends TagProps {
  // Add Object to bypass typescript warning
  style?: object
}

const BoostedTag: React.FC<BoostedTag> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag
      variant="success"
      style={{ background: 'none' }}
      outline
      startIcon={<RocketIcon width="18px" color="success" mr="4px" />}
      {...props}
    >
      {t('Boosted')}
    </Tag>
  )
}

export default memo(BoostedTag)