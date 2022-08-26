import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  NOVA = 87,
  FANTOM = 250,
  NEBULA = 107,
  ETC = 61
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

export const FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.NOVA]: '0x9550b0c83AD5a58898cD4267987Af67e7E52bF55',
  [ChainId.NEBULA]: '0x9550b0c83AD5a58898cD4267987Af67e7E52bF55',
  [ChainId.FANTOM]: '0x9550b0c83AD5a58898cD4267987Af67e7E52bF55',
  [ChainId.ETC]: '0x9fAEd210e14F95a15b89C0D09D1a55519aC2F26d'
}

export const INIT_CODE_HASHES: { [chainId in ChainId]: string } = {
  [ChainId.NOVA]: '0x6e898add6d04d6443c8d2544bc82ca8351779bf4ae92a6e7a5d313be8603ea07',
  [ChainId.NEBULA]: '0x6e898add6d04d6443c8d2544bc82ca8351779bf4ae92a6e7a5d313be8603ea07',
  [ChainId.FANTOM]: '0x6e898add6d04d6443c8d2544bc82ca8351779bf4ae92a6e7a5d313be8603ea07',
  [ChainId.ETC]: '0x885e86a743b8d54b3c16187b06b0eea701d44b20ab63bcc097fe2bfcd6b36584'
}

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
