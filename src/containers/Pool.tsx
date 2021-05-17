import { parseEther } from "@ethersproject/units";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { Button, Card, FormControl, InputGroup, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UniswapV3Pool__factory } from "../ethereum/core";
import { format } from "../utils";
import { AddLiquidity } from "./components/AddLiquidity";
import { SwapExactInputSingle } from "./components/SwapExactInputSingle";
import { SwapExactOutputSingle } from "./components/SwapExactOutputSingle";

export function Pool() {
  const { addr } = useParams<{ addr: string }>();
  const isValidAddr = ethers.utils.isAddress(addr);

  const [initialPriceRootInput, setInitialPriceRootInput] = useState("");

  const [state, setState] =
    useState<{
      slot0: {
        sqrtPriceX96: ethers.BigNumber;
        tick: number;
        observationIndex: number;
        observationCardinality: number;
        observationCardinalityNext: number;
        feeProtocol: number;
        unlocked: boolean;
      };
      factory: string;
      token0: string;
      token1: string;
      fee: number;
      tickSpacing: number;
      maxLiquidityPerTick: ethers.BigNumber;
      feeGrowthGlobal0X128: ethers.BigNumber;
      feeGrowthGlobal1X128: ethers.BigNumber;
      protocolFees: { token0: ethers.BigNumber; token1: ethers.BigNumber };
      liquidity: ethers.BigNumber;
    }>();

  useEffect(() => {
    if (isValidAddr) {
      window.pool = UniswapV3Pool__factory.connect(
        addr,
        window.provider.getSigner()
      );
      updateState();
    }
  }, []);

  async function updateState() {
    const slot0 = await window.pool.slot0();
    const factory = await window.pool.factory();
    const token0 = await window.pool.token0();
    const token1 = await window.pool.token1();
    const fee = await window.pool.fee();
    const tickSpacing = await window.pool.tickSpacing();
    const maxLiquidityPerTick = await window.pool.maxLiquidityPerTick();
    const feeGrowthGlobal0X128 = await window.pool.feeGrowthGlobal0X128();
    const feeGrowthGlobal1X128 = await window.pool.feeGrowthGlobal1X128();
    const protocolFees = await window.pool.protocolFees();
    const liquidity = await window.pool.liquidity();
    setState({
      slot0,
      factory,
      token0,
      token1,
      fee,
      tickSpacing,
      maxLiquidityPerTick,
      feeGrowthGlobal0X128,
      feeGrowthGlobal1X128,
      protocolFees,
      liquidity,
    });
  }

  if (!isValidAddr) {
    return <div>Invalid pool address</div>;
  }

  return (
    <div>
      <p>Pool: {addr}</p>
      {state ? (
        <Table bordered hover>
          {/* <thead>
            <tr>
              <th>Fee Amount</th>
              <th>Tick Spacing</th>
              <th>Address</th>
            </tr>
          </thead> */}
          <tbody>
            <tr>
              <td>factory</td>
              <td>{state.factory}</td>
            </tr>
            <tr>
              <td>token0</td>
              <td>{state.token0}</td>
            </tr>
            <tr>
              <td>token1</td>
              <td>{state.token1}</td>
            </tr>
            <tr>
              <td>fee</td>
              <td>{state.fee}</td>
            </tr>
            <tr>
              <td>tickSpacing</td>
              <td>{state.tickSpacing}</td>
            </tr>
            <tr>
              <td>sqrtPriceX96</td>
              <td>
                {state.slot0.sqrtPriceX96.toString()}{" "}
                {state.slot0.sqrtPriceX96.eq(0) ? (
                  <>
                    <input
                      placeholder="initialize val"
                      value={initialPriceRootInput}
                      onChange={(e) => setInitialPriceRootInput(e.target.value)}
                    />
                    <Button
                      onClick={async () => {
                        try {
                          const tx = await window.pool
                            .connect(window.provider.getSigner())
                            .initialize(initialPriceRootInput);
                          await tx.wait();
                        } catch (e) {
                          alert(`Error: [${e.message}]`);
                        }
                      }}
                    >
                      Iniitalize
                    </Button>
                  </>
                ) : null}
              </td>
            </tr>
            <tr>
              <td>liquidity</td>
              <td>{state.liquidity.toString()}</td>
            </tr>
            <tr>
              <td>maxLiquidityPerTick</td>
              <td>{state.maxLiquidityPerTick.toString()}</td>
            </tr>
            <tr>
              <td>tick</td>
              <td>{state.slot0.tick}</td>
            </tr>
            {/* <tr>
              <td>observationIndex</td>
              <td>{state.slot0.observationIndex}</td>
            </tr>
            <tr>
              <td>observationCardinality</td>
              <td>{state.slot0.observationCardinality}</td>
            </tr>
            <tr>
              <td>observationCardinalityNext</td>
              <td>{state.slot0.observationCardinalityNext}</td>
            </tr> */}
            <tr>
              <td>feeProtocol</td>
              <td>{state.slot0.feeProtocol}</td>
            </tr>
            <tr>
              <td>feeGrowthGlobal0X128</td>
              <td>{state.feeGrowthGlobal0X128.toString()}</td>
            </tr>
            <tr>
              <td>feeGrowthGlobal1X128</td>
              <td>{state.feeGrowthGlobal1X128.toString()}</td>
            </tr>
            <tr>
              <td>protocolFees.token0</td>
              <td>{state.protocolFees.token0.toString()}</td>
            </tr>
            <tr>
              <td>protocolFees.token1</td>
              <td>{state.protocolFees.token1.toString()}</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <>Loading...</>
      )}
      <AddLiquidity pool={window.pool} stateRefreshCallback={updateState} />
      <SwapExactInputSingle
        pool={window.pool}
        stateRefreshCallback={updateState}
      />
      <SwapExactOutputSingle
        pool={window.pool}
        stateRefreshCallback={updateState}
      />
    </div>
  );
}
