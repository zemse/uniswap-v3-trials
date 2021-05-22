import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar as NavbarRB,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { loadContracts } from "../ethereum/contracts";

export function Navbar() {
  const [poolAddrInput, setPoolAddrInput] = useState("");
  return (
    <NavbarRB bg="dark" variant="dark">
      <Link to="/">
        <NavbarRB.Brand>Uniswap V3 Trial</NavbarRB.Brand>
      </Link>

      <Nav className="mr-auto">
        <Link to="/airdrop">Airdrop_</Link>
        <Link to="/calculator">_Calculator</Link>
      </Nav>

      <Form inline>
        <FormControl
          type="text"
          placeholder="Factory-NFPM-SR"
          className="mr-sm-2"
          onChange={(e) => setPoolAddrInput(e.target.value)}
          value={poolAddrInput}
        />

        <Button
          variant="outline-info"
          onClick={() => {
            try {
              loadContracts(poolAddrInput);
            } catch (e) {
              alert(e.message);
            }
          }}
        >
          Load Contracts
        </Button>
      </Form>
    </NavbarRB>
  );
}
