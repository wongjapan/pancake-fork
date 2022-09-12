import { SerializedFarmConfig } from '@arborswap/farms'
import { bscTestnetTokens } from '@arborswap/tokens'

const priceHelperLps: SerializedFarmConfig[] = [
  {
    pid: null,
    lpSymbol: 'WBNB-HBTC LP',
    lpAddress: '0x6642c3FE5718B5B20aF4e749BBE424Bb46979621',
    token: bscTestnetTokens.wbtc.serialize,
    quoteToken: bscTestnetTokens.wbnb.serialize,
  },
]

export default priceHelperLps
