import {
  NON_FUNGIBLE_POSITION_MANGER_ADDRESS,
  SWAP_ROUTER,
  TOKEN_A,
  TOKEN_B,
  UNISWAP_FACTORY_ADDRESS,
} from "./constants";
import { UniswapV3Factory__factory } from "./core";
import {
  NonfungiblePositionManager__factory,
  SwapRouter__factory,
} from "./periphery";
import { Token__factory } from "./token";

const uniswapFactory = UniswapV3Factory__factory.connect(
  UNISWAP_FACTORY_ADDRESS,
  window.provider
);
const nonfungiblePositionManager = NonfungiblePositionManager__factory.connect(
  NON_FUNGIBLE_POSITION_MANGER_ADDRESS,
  window.provider
);
const swapRouter = SwapRouter__factory.connect(SWAP_ROUTER, window.provider);

const tokenA = Token__factory.connect(TOKEN_A, window.provider);
const tokenB = Token__factory.connect(TOKEN_B, window.provider);

window.uniswapFactory = uniswapFactory;
window.nonfungiblePositionManager = nonfungiblePositionManager;
window.swapRouter = swapRouter;
window.tokenA = tokenA;
window.tokenB = tokenB;
