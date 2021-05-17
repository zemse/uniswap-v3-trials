import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar as NavbarRB,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export function Navbar() {
  const [poolAddrInput, setPoolAddrInput] = useState("");
  return (
    <NavbarRB bg="dark" variant="dark">
      <Link to="/">
        <NavbarRB.Brand>Uniswap V3 Trial</NavbarRB.Brand>
      </Link>

      <Nav className="mr-auto">
        <Link to="/airdrop">Airdrop</Link>
      </Nav>

      <Form inline>
        <FormControl
          type="text"
          placeholder="Pool Address"
          className="mr-sm-2"
          onChange={(e) => setPoolAddrInput(e.target.value)}
          value={poolAddrInput}
        />
        <Link to={`/pool/${poolAddrInput}`}>
          <Button variant="outline-info">Go</Button>
        </Link>
      </Form>
    </NavbarRB>
  );
}
