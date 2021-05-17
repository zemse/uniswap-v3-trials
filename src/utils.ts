import { ethers } from "ethers";

export function format(bn: ethers.BigNumber | undefined) {
  return bn ? ethers.utils.formatEther(bn) : "Loading..";
}
