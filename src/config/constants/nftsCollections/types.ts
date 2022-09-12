import { Address } from '../types'

export enum ArborCollectionKey {
  PANCAKE = 'pancake',
  SQUAD = 'pancakeSquad',
}

export type ArborCollection = {
  name: string
  description?: string
  slug: string
  address: Address
}

export type ArborCollections = {
  [key in ArborCollectionKey]: ArborCollection
}
