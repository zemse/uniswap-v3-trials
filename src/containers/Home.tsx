import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup, Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { deploy } from "../ethereum/deploy";
interface Pool {
  fee: number;
  tickSpacing: number;
  pool: string;
}

export function Home() {
  const history = useHistory();
  const [feeAmountInput, setFeeAmountInput] = useState<string>("");
  const [tickSpacingInput, setTickSpacingInput] = useState<string>("");
  const [deployFactorySpinner, setDeployFactorySpinner] =
    useState<boolean>(false);
  const [deploySpinner, setDeploySpinner] = useState<boolean>(false);
  const [pools, setPools] = useState<Pool[]>();

  async function updateState() {
    // get past deployed pools
    const filter = window.uniswapFactory.filters.PoolCreated();
    const events = await window.uniswapFactory.queryFilter(filter);
    setPools(
      events.map((e) => ({
        fee: e.args.fee,
        tickSpacing: e.args.tickSpacing,
        pool: e.args.pool,
      }))
    );
  }

  useEffect(() => {
    updateState();
  }, []);

  return (
    <div>
      <h2>Reset Uniswap Factory</h2>
      <p>
        Current Factory-NFPM-SwapRouter: {window.uniswapFactory.address}-
        {window.nonfungiblePositionManager.address}-{window.swapRouter.address}
      </p>
      <p>Redeploying factory also resets deployed pools.</p>
      <Button
        disabled={deployFactorySpinner}
        onClick={async () => {
          setDeployFactorySpinner(true);
          await deploy(window.provider);
          await updateState();
          setDeployFactorySpinner(false);
        }}
      >
        {deployFactorySpinner
          ? "Redeploying check metamask.."
          : "Redeploy Factory"}
      </Button>
      <h2>Deploy New Pool</h2>
      <p>Please select kovan network on metamask</p>
      <p>Token A: {window.tokenA.address}</p>
      <p>Token B: {window.tokenB.address}</p>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          {/* <Form.Label>Deploy New </Form.Label> */}
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Fee Amount
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={feeAmountInput}
              onChange={(e) => setFeeAmountInput(e.target.value)}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Enter any value like: 0, 500, 3000, 10000"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Tick Spacing
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={tickSpacingInput}
              onChange={(e) => setTickSpacingInput(e.target.value)}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Enter a non zero value like: 1, 2, 10, 60"
            />
          </InputGroup>
          <Button
            disabled={deploySpinner}
            onClick={async () => {
              setDeploySpinner(true);
              try {
                const poolAddr =
                  await window.uniswapFactory.callStatic.createPool(
                    window.tokenA.address,
                    window.tokenB.address,
                    feeAmountInput,
                    tickSpacingInput
                  );
                const tx = await window.uniswapFactory
                  .connect(window.provider.getSigner())
                  .createPool(
                    window.tokenA.address,
                    window.tokenB.address,
                    feeAmountInput,
                    tickSpacingInput
                  );
                await tx.wait();
                setDeploySpinner(false);
                history.push(`/pool/${poolAddr}`);
              } catch (e) {
                alert(
                  `Error: [${e.message}] Pls note that two pools with same fee not currently possible, you need to reset the uniswap factory`
                );
                setDeploySpinner(false);
              }
            }}
          >
            {deploySpinner ? "Deploying.." : "Deploy"}
          </Button>
        </Form.Group>
      </Form>
      {pools ? (
        <>
          <p>Already deployed pools:</p>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Fee Amount</th>
                <th>Tick Spacing</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {pools.map((p) => (
                <tr key={p.pool}>
                  <td>{p.fee}</td>
                  <td>{p.tickSpacing}</td>
                  <td>
                    <Link to={`/pool/${p.pool}`}>{p.pool}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ) : null}
    </div>
  );
}
