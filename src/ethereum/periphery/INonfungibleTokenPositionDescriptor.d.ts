/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface INonfungibleTokenPositionDescriptorInterface
  extends ethers.utils.Interface {
  functions: {
    "tokenURI(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;

  events: {
    "UpdateTokenRatioPriority(address,int256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "UpdateTokenRatioPriority"): EventFragment;
}

export class INonfungibleTokenPositionDescriptor extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: INonfungibleTokenPositionDescriptorInterface;

  functions: {
    tokenURI(
      positionManager: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "tokenURI(address,uint256)"(
      positionManager: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  tokenURI(
    positionManager: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "tokenURI(address,uint256)"(
    positionManager: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    tokenURI(
      positionManager: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "tokenURI(address,uint256)"(
      positionManager: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    UpdateTokenRatioPriority(token: null, priority: null): EventFilter;
  };

  estimateGas: {
    tokenURI(
      positionManager: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenURI(address,uint256)"(
      positionManager: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    tokenURI(
      positionManager: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenURI(address,uint256)"(
      positionManager: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}