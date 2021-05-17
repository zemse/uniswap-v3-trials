import { ethers } from "ethers";
import { parseEther } from "ethers/lib/utils";
import React, { useState } from "react";
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap";
import { UniswapV3Pool } from "../../ethereum/core";

interface AddLiquidityProps {
  pool: UniswapV3Pool;
  stateRefreshCallback: Function;
}

export function SwapExactInputSingle(props: AddLiquidityProps) {
  const { pool } = props;
  const [tokenIn, setTokenIn] = useState(0);
  const [amountInInput, setAmountInInput] = useState("");
  const [amountOutMinimumInput, setAmountOutMinimumInput] = useState("");
  const [sqrtPriceLimitX96Input, setSqrtPriceLimitX96Input] = useState("");
  const [spinner, setSpinner] = useState(false);
  return (
    <Card>
      <Card.Body>
        <h2>Swap Exact Input Single</h2>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control
            as="select"
            onChange={(e) => setTokenIn(+e.target.value)}
          >
            <option value={0}>swap A for B</option>
            <option value={1}>swap B for A</option>
          </Form.Control>
        </Form.Group>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              amountIn
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={amountInInput}
            onChange={(e) => setAmountInInput(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              amountOutMinimum
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={amountOutMinimumInput}
            onChange={(e) => setAmountOutMinimumInput(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              sqrtPriceLimitX96
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={sqrtPriceLimitX96Input}
            onChange={(e) => setSqrtPriceLimitX96Input(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Write 0 to auto determine"
          />
        </InputGroup>
        <Button
          disabled={spinner}
          onClick={async () => {
            setSpinner(true);
            try {
              const signer = window.provider.getSigner();
              if (tokenIn === 0) {
                const allowance = await window.tokenA.allowance(
                  await signer.getAddress(),
                  window.swapRouter.address
                );
                if (!allowance.gte(parseEther(amountInInput))) {
                  alert(
                    "You first need to do ERC20 approve for tokenA, please accept in metamask"
                  );

                  const tx = await window.tokenA
                    .connect(signer)
                    .approve(
                      window.swapRouter.address,
                      ethers.constants.MaxUint256
                    );
                  await tx.wait();
                }
              } else {
                const allowance = await window.tokenB.allowance(
                  await signer.getAddress(),
                  window.swapRouter.address
                );
                if (!allowance.gte(parseEther(amountInInput))) {
                  alert(
                    "You first need to do ERC20 approve for tokenB, please accept in metamask"
                  );

                  const tx = await window.tokenB
                    .connect(signer)
                    .approve(
                      window.swapRouter.address,
                      ethers.constants.MaxUint256
                    );
                  await tx.wait();
                }
              }
              const token0 = await pool.token0();
              const token1 = await pool.token1();
              const tx = await window.swapRouter
                .connect(signer)
                .exactInputSingle({
                  tokenIn: tokenIn === 0 ? token0 : token1,
                  tokenOut: tokenIn === 0 ? token1 : token0,
                  fee: await pool.fee(),
                  recipient: await pool.signer.getAddress(),
                  amountIn: parseEther(amountInInput),
                  amountOutMinimum: parseEther(amountOutMinimumInput),
                  sqrtPriceLimitX96: parseEther(sqrtPriceLimitX96Input),
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
          Swap Exact Input Single
        </Button>
      </Card.Body>
    </Card>
  );
}
