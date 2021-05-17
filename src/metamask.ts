import { ethers } from "ethers";

window.providerInfura = new ethers.providers.InfuraProvider("kovan");

if (window.ethereum) {
  // @ts-ignore
  window.ethereum.enable && window.ethereum.enable();

  window.provider = new ethers.providers.Web3Provider(window.ethereum);
} else {
  console.log("Please install metamask to interact, and go to Kovan network");
  window.provider =
    window.providerInfura as unknown as ethers.providers.Web3Provider;
}
