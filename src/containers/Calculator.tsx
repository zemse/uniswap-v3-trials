import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Form,
  FormControl,
  InputGroup,
  Table,
} from "react-bootstrap";

export function Calculator() {
  const [a1, setA1] = useState(0);
  const [a2, setA2] = useState(0);
  const [a3, setA3] = useState(0);

  const [a4, setA4] = useState(0);
  const [a5, setA5] = useState(0);
  return (
    <>
      <Card>
        <Card.Body>
          <h3>Calculate L value on first position</h3>
          <input
            type="text"
            placeholder="amount of real tokenX"
            onChange={(e) => setA1(+e.target.value)}
          />
          <input
            type="text"
            placeholder="tickStart"
            onChange={(e) => setA2(+e.target.value)}
          />
          <input
            type="text"
            placeholder="tickEnd"
            onChange={(e) => setA3(+e.target.value)}
          />
          <br />L = {getL(a1, a2, a3)}
        </Card.Body>

        <Card.Body>
          <h3>Calculate Swap Exact Input</h3>
          {/* <input type="text" placeholder="virtualLiquidityX" />
          <input type="text" placeholder="virtualLiquidityY" /> */}
          <input
            type="text"
            placeholder="amountIn"
            onChange={(e) => setA4(+e.target.value)}
          />
          <br />
          AmountOut = {getAmountOut(getL(a1, a2, a3), getL(a1, a2, a3), a4)}
        </Card.Body>

        <Card.Body>
          <h3>Calculate Swap Exact Output</h3>
          {/* <input type="text" placeholder="virtualLiquidityX" />
          <input type="text" placeholder="virtualLiquidityY" /> */}
          <input
            type="text"
            placeholder="amountOut"
            onChange={(e) => setA5(+e.target.value)}
          />
          <br />
          AmountIn = {getAmountIn(getL(a1, a2, a3), getL(a1, a2, a3), a5)}
        </Card.Body>
      </Card>
    </>
  );
}

function getL(out: number, tickIn: number, tickOut: number): number {
  return (
    out /
    (1 -
      1 /
        Math.sqrt(
          1.0001 ** (Math.max(tickIn, tickOut) - Math.min(tickIn, tickOut))
        ))
  );
}

function getAmountIn(x: number, y: number, out: number): number {
  return (x * out) / (y - out);
}

function getAmountOut(x: number, y: number, in_: number): number {
  return (y * in_) / (x + in_);
}
