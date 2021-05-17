export const LOCAL_STORAGE_KEY = "uniswap-factory-test";

const ls = window.localStorage.getItem(LOCAL_STORAGE_KEY);

export const UNISWAP_FACTORY_ADDRESS = ls
  ? ls.split("-")[0]
  : "0x54b28eB855dB5db6E9F2D0A6593ab7Ad9a76184c";

export const TOKEN_DISCRIPTER = "0x791CBD680b53fb684e82b754Cb0B4F7CCE56AB6e";

export const NON_FUNGIBLE_POSITION_MANGER_ADDRESS = ls
  ? ls.split("-")[1]
  : "0xcc69B0fE081eDFE5AC682b7de2330897eAE0e876";

export const SWAP_ROUTER = ls
  ? ls.split("-")[2]
  : "0x52870EdAe0fdC2575eE5190E1Ff7A481f893EA80";

export const TOKEN_A = "0x7cd8749f79f81bf9abc903a49785d3544f71a7f7";

export const TOKEN_B = "0xd07f7cbb3296a21b4873320882f6beb087890120";

export const WETH_KOVAN = "0xd0A1E359811322d97991E03f863a0C30C2cF029C";

/**
 * fac 0x54b28eB855dB5db6E9F2D0A6593ab7Ad9a76184c
deploy.ts:28 tokenDescripter 0x791CBD680b53fb684e82b754Cb0B4F7CCE56AB6e
deploy.ts:40 window.nonfungiblePositionManager 0xcc69B0fE081eDFE5AC682b7de2330897eAE0e876
deploy.ts:54 swap 0x52870EdAe0fdC2575eE5190E1Ff7A481f893EA80
 */
