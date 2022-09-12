import Image from 'next/future/image'
import { HelpIcon } from '@arborswap/uikit'
import { isChainSupported } from 'utils/wagmi'
import { memo } from 'react'

export const ChainLogo = memo(({ chainId }: { chainId: number }) => {
  if (isChainSupported(chainId)) {
    return <Image src={`/images/chains/${chainId}.png`} width={24} height={24} unoptimized />
  }

  return <HelpIcon width={24} height={24} />
})
