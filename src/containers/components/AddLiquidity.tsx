import { ethers } from "ethers";
import { parseEther } from "ethers/lib/utils";
import React, { useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import { UniswapV3Pool } from "../../ethereum/core";

interface AddLiquidityProps {
  pool: UniswapV3Pool;
  stateRefreshCallback: Function;
}

export function AddLiquidity(props: AddLiquidityProps) {
  const { pool } = props;
  const [tickLowerInput, setTickLowerInput] = useState("");
  const [tickUpperInput, setTickUpperInput] = useState("");
  const [amount0DesiredInput, setAmount0DesiredInput] = useState("");
  const [amount1DesiredInput, setAmount1DesiredInput] = useState("");
  const [amount0MinInput, setAmount0MinInput] = useState("");
  const [amount1MinInput, setAmount1MinInput] = useState("");
  const [spinner, setSpinner] = useState(false);
  return (
    <Card>
      <Card.Body>
        <h2>Add Liquidity</h2>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              tickLower
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={tickLowerInput}
            onChange={(e) => setTickLowerInput(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              tickUpper
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={tickUpperInput}
            onChange={(e) => setTickUpperInput(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              amount0Desired
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={amount0DesiredInput}
            onChange={(e) => setAmount0DesiredInput(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              amount1Desired
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={amount1DesiredInput}
            onChange={(e) => setAmount1DesiredInput(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              amount0Min
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={amount0MinInput}
            onChange={(e) => setAmount0MinInput(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              amount1Min
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={amount1MinInput}
            onChange={(e) => setAmount1MinInput(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <Button
          disabled={spinner}
          onClick={async () => {
            setSpinner(true);
            try {
              const signer = window.provider.getSigner();
              {
                const allowance = await window.tokenA.allowance(
                  await signer.getAddress(),
                  window.nonfungiblePositionManager.address
                );
                if (!allowance.gte(parseEther(amount0DesiredInput))) {
                  alert(
                    "You first need to do ERC20 approve for tokenA, please accept in metamask"
                  );

                  const tx = await window.tokenA
                    .connect(signer)
                    .approve(
                      window.nonfungiblePositionManager.address,
                      ethers.constants.MaxUint256
                    );
                  await tx.wait();
                }
              }
              {
                const allowance = await window.tokenB.allowance(
                  await signer.getAddress(),
                  window.nonfungiblePositionManager.address
                );
                if (!allowance.gte(parseEther(amount1DesiredInput))) {
                  alert(
                    "You first need to do ERC20 approve for tokenB, please accept in metamask"
                  );

                  const tx = await window.tokenB
                    .connect(signer)
                    .approve(
                      window.nonfungiblePositionManager.address,
                      ethers.constants.MaxUint256
                    );
                  await tx.wait();
                }
              }
              const tx = await window.nonfungiblePositionManager
                .connect(signer)
                .mint({
                  token0: await pool.token0(),
                  token1: await pool.token1(),
                  fee: await pool.fee(),
                  tickLower: tickLowerInput,
                  tickUpper: tickUpperInput,
                  amount0Desired: parseEther(amount0DesiredInput),
                  amount1Desired: parseEther(amount1DesiredInput),
                  amount0Min: parseEther(amount0MinInput),
                  amount1Min: parseEther(amount1MinInput),
                  recipient: await pool.signer.getAddress(),
                  deadline: Math.floor(Date.now() / 1000 + 1000),
                });
              await tx.wait();
              await props.stateRefreshCallback();
              setSpinner(false);
            } catch (e) {
              alert(`Error: [${e.message}]`);
              setSpinner(false);
            }
          }}
        >
          Add Liquidity
        </Button>
      </Card.Body>
    </Card>
  );
}
