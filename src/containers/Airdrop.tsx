import { parseEther } from "@ethersproject/units";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { format } from "../utils";

export function Airdrop() {
  const [userAddress, setUserAddress] = useState<string>();
  const [tokenABal, setTokenABal] = useState<ethers.BigNumber>();
  const [tokenBBal, setTokenBBal] = useState<ethers.BigNumber>();
  useEffect(() => {
    updateState().catch(console.error);
  }, []);

  async function updateState() {
    const signer = window.provider.getSigner();
    const address = await signer.getAddress();
    setUserAddress(address);
    setTokenABal(await window.tokenA.balanceOf(address));
    setTokenBBal(await window.tokenB.balanceOf(address));
  }

  async function getAirdrop(token: "a" | "b") {
    return (token === "a" ? window.tokenA : window.tokenB)
      .connect(window.provider.getSigner())
      .mint(parseEther("100000"));
  }
  return (
    <div>
      <p>Hey metamask address is {userAddress ?? "Loading.."}</p>
      <p>
        Your tokenA balance: {format(tokenABal)}{" "}
        <Button
          onClick={async () => {
            const tx = await getAirdrop("a");
            alert(`Airdrop tx sent ${tx.hash}`);
            await tx.wait();
            await updateState();
          }}
        >
          Get Airdrop
        </Button>
      </p>
      <p>
        Your tokenB balance: {format(tokenBBal)}{" "}
        <Button
          onClick={async () => {
            const tx = await getAirdrop("b");
            alert(`Airdrop tx sent ${tx.hash}`);
            await tx.wait();
            await updateState();
          }}
        >
          Get Airdrop
        </Button>
      </p>
    </div>
  );
}
