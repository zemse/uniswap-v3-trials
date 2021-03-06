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

interface OracleTestInterface extends ethers.utils.Interface {
  functions: {
    "advanceTime(uint32)": FunctionFragment;
    "batchUpdate(tuple[])": FunctionFragment;
    "cardinality()": FunctionFragment;
    "cardinalityNext()": FunctionFragment;
    "getGasCostOfObserve(uint32[])": FunctionFragment;
    "grow(uint16)": FunctionFragment;
    "index()": FunctionFragment;
    "initialize(tuple)": FunctionFragment;
    "liquidity()": FunctionFragment;
    "observations(uint256)": FunctionFragment;
    "observe(uint32[])": FunctionFragment;
    "tick()": FunctionFragment;
    "time()": FunctionFragment;
    "update(tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "advanceTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchUpdate",
    values: [
      {
        advanceTimeBy: BigNumberish;
        tick: BigNumberish;
        liquidity: BigNumberish;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cardinality",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cardinalityNext",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfObserve",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "grow", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "index", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      { time: BigNumberish; tick: BigNumberish; liquidity: BigNumberish }
    ]
  ): string;
  encodeFunctionData(functionFragment: "liquidity", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "observations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "observe",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "tick", values?: undefined): string;
  encodeFunctionData(functionFragment: "time", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [
      {
        advanceTimeBy: BigNumberish;
        tick: BigNumberish;
        liquidity: BigNumberish;
      }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "advanceTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cardinality",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cardinalityNext",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfObserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "index", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "observations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "observe", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tick", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "time", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;

  events: {};
}

export class OracleTest extends BaseContract {
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

  interface: OracleTestInterface;

  functions: {
    advanceTime(
      by: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchUpdate(
      params: {
        advanceTimeBy: BigNumberish;
        tick: BigNumberish;
        liquidity: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cardinality(overrides?: CallOverrides): Promise<[number]>;

    cardinalityNext(overrides?: CallOverrides): Promise<[number]>;

    getGasCostOfObserve(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    grow(
      _cardinalityNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    index(overrides?: CallOverrides): Promise<[number]>;

    initialize(
      params: {
        time: BigNumberish;
        tick: BigNumberish;
        liquidity: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    observations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, boolean] & {
        blockTimestamp: number;
        tickCumulative: BigNumber;
        liquidityCumulative: BigNumber;
        initialized: boolean;
      }
    >;

    observe(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        tickCumulatives: BigNumber[];
        liquidityCumulatives: BigNumber[];
      }
    >;

    tick(overrides?: CallOverrides): Promise<[number]>;

    time(overrides?: CallOverrides): Promise<[number]>;

    update(
      params: {
        advanceTimeBy: BigNumberish;
        tick: BigNumberish;
        liquidity: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  advanceTime(
    by: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchUpdate(
    params: {
      advanceTimeBy: BigNumberish;
      tick: BigNumberish;
      liquidity: BigNumberish;
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cardinality(overrides?: CallOverrides): Promise<number>;

  cardinalityNext(overrides?: CallOverrides): Promise<number>;

  getGasCostOfObserve(
    secondsAgos: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  grow(
    _cardinalityNext: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  index(overrides?: CallOverrides): Promise<number>;

  initialize(
    params: { time: BigNumberish; tick: BigNumberish; liquidity: BigNumberish },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidity(overrides?: CallOverrides): Promise<BigNumber>;

  observations(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber, BigNumber, boolean] & {
      blockTimestamp: number;
      tickCumulative: BigNumber;
      liquidityCumulative: BigNumber;
      initialized: boolean;
    }
  >;

  observe(
    secondsAgos: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], BigNumber[]] & {
      tickCumulatives: BigNumber[];
      liquidityCumulatives: BigNumber[];
    }
  >;

  tick(overrides?: CallOverrides): Promise<number>;

  time(overrides?: CallOverrides): Promise<number>;

  update(
    params: {
      advanceTimeBy: BigNumberish;
      tick: BigNumberish;
      liquidity: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    advanceTime(by: BigNumberish, overrides?: CallOverrides): Promise<void>;

    batchUpdate(
      params: {
        advanceTimeBy: BigNumberish;
        tick: BigNumberish;
        liquidity: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    cardinality(overrides?: CallOverrides): Promise<number>;

    cardinalityNext(overrides?: CallOverrides): Promise<number>;

    getGasCostOfObserve(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grow(
      _cardinalityNext: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    index(overrides?: CallOverrides): Promise<number>;

    initialize(
      params: {
        time: BigNumberish;
        tick: BigNumberish;
        liquidity: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    observations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, boolean] & {
        blockTimestamp: number;
        tickCumulative: BigNumber;
        liquidityCumulative: BigNumber;
        initialized: boolean;
      }
    >;

    observe(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        tickCumulatives: BigNumber[];
        liquidityCumulatives: BigNumber[];
      }
    >;

    tick(overrides?: CallOverrides): Promise<number>;

    time(overrides?: CallOverrides): Promise<number>;

    update(
      params: {
        advanceTimeBy: BigNumberish;
        tick: BigNumberish;
        liquidity: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    advanceTime(
      by: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchUpdate(
      params: {
        advanceTimeBy: BigNumberish;
        tick: BigNumberish;
        liquidity: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cardinality(overrides?: CallOverrides): Promise<BigNumber>;

    cardinalityNext(overrides?: CallOverrides): Promise<BigNumber>;

    getGasCostOfObserve(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grow(
      _cardinalityNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    index(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      params: {
        time: BigNumberish;
        tick: BigNumberish;
        liquidity: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    observations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    observe(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tick(overrides?: CallOverrides): Promise<BigNumber>;

    time(overrides?: CallOverrides): Promise<BigNumber>;

    update(
      params: {
        advanceTimeBy: BigNumberish;
        tick: BigNumberish;
        liquidity: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    advanceTime(
      by: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchUpdate(
      params: {
        advanceTimeBy: BigNumberish;
        tick: BigNumberish;
        liquidity: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cardinality(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cardinalityNext(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGasCostOfObserve(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grow(
      _cardinalityNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    index(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      params: {
        time: BigNumberish;
        tick: BigNumberish;
        liquidity: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    observations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    observe(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tick(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    time(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    update(
      params: {
        advanceTimeBy: BigNumberish;
        tick: BigNumberish;
        liquidity: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
