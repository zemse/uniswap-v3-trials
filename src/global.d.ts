import { ethers } from "ethers";
import { UniswapV3Factory, UniswapV3Pool } from "./ethereum/core";
import { NonfungiblePositionManager, SwapRouter } from "./ethereum/periphery";
import { Token } from "./ethereum/token";

declare global {
  interface Window {
    provider: ethers.providers.Web3Provider;
    providerInfura: ethers.providers.InfuraProvider;
    ethereum: ethers.providers.ExternalProvider;
    uniswapFactory: UniswapV3Factory;
    nonfungiblePositionManager: NonfungiblePositionManager;
    swapRouter: SwapRouter;
    tokenA: Token;
    tokenB: Token;
    pool: UniswapV3Pool;
  }
}
