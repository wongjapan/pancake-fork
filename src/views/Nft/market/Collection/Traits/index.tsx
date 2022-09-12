import { useRouter } from 'next/router'
import Container from 'components/Layout/Container'
import ArborBunniesTraits from './ArborBunniesTraits'
import { pancakeBunniesAddress } from '../../constants'
import CollectionTraits from './CollectionTraits'

const Traits = () => {
  const collectionAddress = useRouter().query.collectionAddress as string

  return (
    <>
      <Container py="40px">
        {collectionAddress === pancakeBunniesAddress ? (
          <ArborBunniesTraits collectionAddress={collectionAddress} />
        ) : (
          <CollectionTraits collectionAddress={collectionAddress} />
        )}
      </Container>
    </>
  )
}

export default Traits
