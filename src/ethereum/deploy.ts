import { ethers } from "ethers";
import { LOCAL_STORAGE_KEY, TOKEN_DISCRIPTER, WETH_KOVAN } from "./constants";
import { UniswapV3Factory__factory } from "./core";
import {
  NonfungiblePositionManager__factory,
  SwapRouter__factory,
} from "./periphery";

export async function deploy(
  provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider
) {
  const signer = provider.getSigner(0);
  {
    alert("Step 1/3: Deploying UniswapFactory. Please accept on metamask");
    const f = new UniswapV3Factory__factory(signer);
    window.uniswapFactory = await f.deploy();
    await window.uniswapFactory.deployTransaction.wait();
  }
  {
    alert(
      "Step 2/3: Deploying NonFungiblePositionManager. Please accept on metamask"
    );
    const f = new NonfungiblePositionManager__factory(signer);

    window.nonfungiblePositionManager = await f.deploy(
      window.uniswapFactory.address,
      WETH_KOVAN,
      TOKEN_DISCRIPTER
    );
    await window.nonfungiblePositionManager.deployTransaction.wait();
  }
  {
    alert("Step 3/3: Deploying SwapRouter. Please accept on metamask");
    const f = new SwapRouter__factory(signer);

    window.swapRouter = await f.deploy(
      window.uniswapFactory.address,
      WETH_KOVAN
    );
    await window.swapRouter.deployTransaction.wait();
  }
  window.localStorage.setItem(
    LOCAL_STORAGE_KEY,
    [
      window.uniswapFactory.address,
      window.nonfungiblePositionManager.address,
      window.swapRouter.address,
    ].join("-")
  );
}

// @ts-ignore
window.deploy = deploy;
