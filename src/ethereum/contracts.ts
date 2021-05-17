import { ADDRESSES, TOKEN_A, TOKEN_B } from "./constants";
import { UniswapV3Factory__factory } from "./core";
import { enableProvider } from "./metamask";
import {
  NonfungiblePositionManager__factory,
  SwapRouter__factory,
} from "./periphery";
import { Token__factory } from "./token";

const tokenA = Token__factory.connect(TOKEN_A, window.provider);
const tokenB = Token__factory.connect(TOKEN_B, window.provider);

window.tokenA = tokenA;
window.tokenB = tokenB;
console.log(1, window.provider);

loadContracts(ADDRESSES);

export function loadContracts(addresses: string) {
  if (window.provider === undefined) {
    enableProvider();
  }
  console.log(2, window.provider);
  const split = addresses.split("-");
  if (split.length !== 3) {
    throw new Error(
      "Incorrect format, please pass address of Factory, NFPM, and Swap Router concatenated by hyphen (-)"
    );
  }

  const factory = split[0];
  const nfpm = split[1];
  const sr = split[2];

  window.uniswapFactory = UniswapV3Factory__factory.connect(
    factory,
    window.provider
  );

  window.nonfungiblePositionManager =
    NonfungiblePositionManager__factory.connect(nfpm, window.provider);

  window.swapRouter = SwapRouter__factory.connect(sr, window.provider);
}
