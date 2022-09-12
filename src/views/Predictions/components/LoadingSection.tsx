import { Flex, Spinner } from '@arborswap/uikit'

export default function LoadingSection() {
  return (
    <Flex justifyContent="center" width="100%" alignItems="center" height="404px">
      <Spinner />
    </Flex>
  )
}
