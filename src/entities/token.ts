import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

export const WETH = {
  [ChainId.NOVA]: new Token(ChainId.NOVA, '0x657a66332A65B535Da6C5d67b8cD1D410c161a08', 18, 'WSNT', 'Wrapped SNT'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', 18, 'WFTM', 'Wrapped FTM'),
  [ChainId.NEBULA]: new Token(ChainId.NEBULA, '0x7e2D6Ac6cEAAa20a3Cc4CA4c1b0dFC6b95332A9d', 18, 'WNBX', 'Wrapped NBX'),
  [ChainId.ETC]: new Token(ChainId.ETC, '0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a', 18, 'WETC', 'Wrapped ETC')
}
