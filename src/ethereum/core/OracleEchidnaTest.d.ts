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
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface OracleEchidnaTestInterface extends ethers.utils.Interface {
  functions: {
    "advanceTime(uint32)": FunctionFragment;
    "checkTimeWeightedAveragesAlwaysFitsType(uint32)": FunctionFragment;
    "checkTwoAdjacentObservationsModTimeElapsedAlways0(uint16)": FunctionFragment;
    "echidna_AlwaysInitialized()": FunctionFragment;
    "echidna_canAlwaysObserve0IfInitialized()": FunctionFragment;
    "echidna_cardinalityAlwaysLteNext()": FunctionFragment;
    "echidna_indexAlwaysLtCardinality()": FunctionFragment;
    "grow(uint16)": FunctionFragment;
    "initialize(uint32,int24,uint128)": FunctionFragment;
    "update(uint32,int24,uint128)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "advanceTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkTimeWeightedAveragesAlwaysFitsType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkTwoAdjacentObservationsModTimeElapsedAlways0",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "echidna_AlwaysInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "echidna_canAlwaysObserve0IfInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "echidna_cardinalityAlwaysLteNext",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "echidna_indexAlwaysLtCardinality",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "grow", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "advanceTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkTimeWeightedAveragesAlwaysFitsType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkTwoAdjacentObservationsModTimeElapsedAlways0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "echidna_AlwaysInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "echidna_canAlwaysObserve0IfInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "echidna_cardinalityAlwaysLteNext",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "echidna_indexAlwaysLtCardinality",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;

  events: {};
}

export class OracleEchidnaTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: OracleEchidnaTestInterface;

  functions: {
    advanceTime(
      by: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkTimeWeightedAveragesAlwaysFitsType(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    checkTwoAdjacentObservationsModTimeElapsedAlways0(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    echidna_AlwaysInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    echidna_canAlwaysObserve0IfInitialized(
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    echidna_cardinalityAlwaysLteNext(
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    echidna_indexAlwaysLtCardinality(
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    grow(
      cardinality: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    update(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  advanceTime(
    by: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkTimeWeightedAveragesAlwaysFitsType(
    secondsAgo: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  checkTwoAdjacentObservationsModTimeElapsedAlways0(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  echidna_AlwaysInitialized(overrides?: CallOverrides): Promise<boolean>;

  echidna_canAlwaysObserve0IfInitialized(
    overrides?: CallOverrides
  ): Promise<boolean>;

  echidna_cardinalityAlwaysLteNext(overrides?: CallOverrides): Promise<boolean>;

  echidna_indexAlwaysLtCardinality(overrides?: CallOverrides): Promise<boolean>;

  grow(
    cardinality: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    time: BigNumberish,
    tick: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  update(
    advanceTimeBy: BigNumberish,
    tick: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    advanceTime(by: BigNumberish, overrides?: CallOverrides): Promise<void>;

    checkTimeWeightedAveragesAlwaysFitsType(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkTwoAdjacentObservationsModTimeElapsedAlways0(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    echidna_AlwaysInitialized(overrides?: CallOverrides): Promise<boolean>;

    echidna_canAlwaysObserve0IfInitialized(
      overrides?: CallOverrides
    ): Promise<boolean>;

    echidna_cardinalityAlwaysLteNext(
      overrides?: CallOverrides
    ): Promise<boolean>;

    echidna_indexAlwaysLtCardinality(
      overrides?: CallOverrides
    ): Promise<boolean>;

    grow(cardinality: BigNumberish, overrides?: CallOverrides): Promise<void>;

    initialize(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    update(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    advanceTime(
      by: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkTimeWeightedAveragesAlwaysFitsType(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkTwoAdjacentObservationsModTimeElapsedAlways0(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    echidna_AlwaysInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    echidna_canAlwaysObserve0IfInitialized(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    echidna_cardinalityAlwaysLteNext(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    echidna_indexAlwaysLtCardinality(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grow(
      cardinality: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    update(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    advanceTime(
      by: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkTimeWeightedAveragesAlwaysFitsType(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkTwoAdjacentObservationsModTimeElapsedAlways0(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    echidna_AlwaysInitialized(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    echidna_canAlwaysObserve0IfInitialized(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    echidna_cardinalityAlwaysLteNext(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    echidna_indexAlwaysLtCardinality(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grow(
      cardinality: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    update(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}