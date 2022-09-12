import { BigNumber } from '@ethersproject/bignumber'
import { ContextApi } from '@arborswap/localization'
import { DefaultTheme } from 'styled-components'
import { UserInfos, EventInfos, UserStatusEnum } from 'views/ArborSquad/types'

export type EventStepsProps = {
  eventInfos?: EventInfos
  userInfos?: UserInfos
  isLoading: boolean
  userStatus: UserStatusEnum
  account: string
}

export type EventStepsType = { t: ContextApi['t']; theme: DefaultTheme; cakeBalance: BigNumber } & Pick<
  EventStepsProps,
  'eventInfos' | 'userInfos' | 'userStatus' | 'account'
>
