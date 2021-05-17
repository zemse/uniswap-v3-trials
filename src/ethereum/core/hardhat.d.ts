/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IUniswapV3FlashCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3FlashCallback__factory>;
    getContractFactory(
      name: "IUniswapV3MintCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3MintCallback__factory>;
    getContractFactory(
      name: "IUniswapV3SwapCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3SwapCallback__factory>;
    getContractFactory(
      name: "IERC20Minimal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Minimal__factory>;
    getContractFactory(
      name: "IUniswapV3Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Factory__factory>;
    getContractFactory(
      name: "IUniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Pool__factory>;
    getContractFactory(
      name: "IUniswapV3PoolDeployer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDeployer__factory>;
    getContractFactory(
      name: "IUniswapV3PoolActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolDerivedState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDerivedState__factory>;
    getContractFactory(
      name: "IUniswapV3PoolEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolEvents__factory>;
    getContractFactory(
      name: "IUniswapV3PoolImmutables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolImmutables__factory>;
    getContractFactory(
      name: "IUniswapV3PoolOwnerActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolOwnerActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolState__factory>;
    getContractFactory(
      name: "BitMathEchidnaTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BitMathEchidnaTest__factory>;
    getContractFactory(
      name: "BitMathTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BitMathTest__factory>;
    getContractFactory(
      name: "FullMathEchidnaTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FullMathEchidnaTest__factory>;
    getContractFactory(
      name: "FullMathTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FullMathTest__factory>;
    getContractFactory(
      name: "LiquidityMathTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LiquidityMathTest__factory>;
    getContractFactory(
      name: "LowGasSafeMathEchidnaTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LowGasSafeMathEchidnaTest__factory>;
    getContractFactory(
      name: "MockTimeUniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockTimeUniswapV3Pool__factory>;
    getContractFactory(
      name: "MockTimeUniswapV3PoolDeployer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockTimeUniswapV3PoolDeployer__factory>;
    getContractFactory(
      name: "NoDelegateCallTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NoDelegateCallTest__factory>;
    getContractFactory(
      name: "OracleEchidnaTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleEchidnaTest__factory>;
    getContractFactory(
      name: "OracleTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleTest__factory>;
    getContractFactory(
      name: "SecondsOutsideTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SecondsOutsideTest__factory>;
    getContractFactory(
      name: "SqrtPriceMathEchidnaTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SqrtPriceMathEchidnaTest__factory>;
    getContractFactory(
      name: "SqrtPriceMathTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SqrtPriceMathTest__factory>;
    getContractFactory(
      name: "SwapMathEchidnaTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SwapMathEchidnaTest__factory>;
    getContractFactory(
      name: "SwapMathTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SwapMathTest__factory>;
    getContractFactory(
      name: "TestERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestERC20__factory>;
    getContractFactory(
      name: "TestUniswapV3Callee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestUniswapV3Callee__factory>;
    getContractFactory(
      name: "TestUniswapV3ReentrantCallee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestUniswapV3ReentrantCallee__factory>;
    getContractFactory(
      name: "TestUniswapV3Router",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestUniswapV3Router__factory>;
    getContractFactory(
      name: "TestUniswapV3SwapPay",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestUniswapV3SwapPay__factory>;
    getContractFactory(
      name: "TickBitmapEchidnaTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TickBitmapEchidnaTest__factory>;
    getContractFactory(
      name: "TickBitmapTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TickBitmapTest__factory>;
    getContractFactory(
      name: "TickEchidnaTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TickEchidnaTest__factory>;
    getContractFactory(
      name: "TickMathEchidnaTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TickMathEchidnaTest__factory>;
    getContractFactory(
      name: "TickMathTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TickMathTest__factory>;
    getContractFactory(
      name: "TickOverflowSafetyEchidnaTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TickOverflowSafetyEchidnaTest__factory>;
    getContractFactory(
      name: "TickTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TickTest__factory>;
    getContractFactory(
      name: "UniswapV3PoolSwapTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV3PoolSwapTest__factory>;
    getContractFactory(
      name: "UnsafeMathEchidnaTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UnsafeMathEchidnaTest__factory>;
    getContractFactory(
      name: "UniswapV3Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV3Factory__factory>;
    getContractFactory(
      name: "UniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV3Pool__factory>;
    getContractFactory(
      name: "UniswapV3PoolDeployer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV3PoolDeployer__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}