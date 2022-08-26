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

// Nova Network
export const FACTORY_ADDRESS = '0x9550b0c83AD5a58898cD4267987Af67e7E52bF55'
export const INIT_CODE_HASH = '0x6e898add6d04d6443c8d2544bc82ca8351779bf4ae92a6e7a5d313be8603ea07'

// Nebula Testnet
export const NEBULA_FACTORY_ADDRESS = '0x9550b0c83AD5a58898cD4267987Af67e7E52bF55'
export const NEBULA_INIT_CODE_HASH = '0x6e898add6d04d6443c8d2544bc82ca8351779bf4ae92a6e7a5d313be8603ea07'

// Fantom Opera
export const FANTOM_FACTORY_ADDRESS = '0x9550b0c83AD5a58898cD4267987Af67e7E52bF55'
export const FANTOM_INIT_CODE_HASH = '0x6e898add6d04d6443c8d2544bc82ca8351779bf4ae92a6e7a5d313be8603ea07'

// Ethereum Classic
export const ETC_FACTORY_ADDRESS = '0x9550b0c83AD5a58898cD4267987Af67e7E52bF55'
export const ETC_INIT_CODE_HASH = '0x6e898add6d04d6443c8d2544bc82ca8351779bf4ae92a6e7a5d313be8603ea07'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

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
