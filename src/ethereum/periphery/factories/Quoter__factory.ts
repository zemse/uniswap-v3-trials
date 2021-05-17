/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Quoter } from "../Quoter";

export class Quoter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    _WETH9: string,
    overrides?: Overrides
  ): Promise<Quoter> {
    return super.deploy(_factory, _WETH9, overrides || {}) as Promise<Quoter>;
  }
  getDeployTransaction(
    _factory: string,
    _WETH9: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, _WETH9, overrides || {});
  }
  attach(address: string): Quoter {
    return super.attach(address) as Quoter;
  }
  connect(signer: Signer): Quoter__factory {
    return super.connect(signer) as Quoter__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Quoter {
    return new Contract(address, _abi, signerOrProvider) as Quoter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_WETH9",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WETH9",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "quoteExactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "quoteExactInputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "quoteExactOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "quoteExactOutputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516111cb3803806111cb83398101604081905261002f91610069565b6001600160601b0319606092831b8116608052911b1660a05261009b565b80516001600160a01b038116811461006457600080fd5b919050565b6000806040838503121561007b578182fd5b6100848361004d565b91506100926020840161004d565b90509250929050565b60805160601c60a05160601c6110fd6100ce6000398061031f525080610343528061048252806105bb52506110fd6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063c45a01551161005b578063c45a0155146100d3578063cdca1753146100db578063f7729d43146100ee578063fa461e33146101015761007d565b80632f80bb1d1461008257806330d07f21146100ab5780634aa4a4fc146100be575b600080fd5b610095610090366004610d84565b610116565b6040516100a2919061102e565b60405180910390f35b6100956100b9366004610d16565b6101cc565b6100c661031d565b6040516100a29190610f6a565b6100c6610341565b6100956100e9366004610d84565b610365565b6100956100fc366004610d16565b610404565b61011461010f366004610dea565b610469565b005b60005b600061012484610546565b905060008060006101348761054e565b925092509250610199828483898773ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161061018e5773fffd8963efd1fc6a506488495d951d5263988d256100b9565b6401000276a46101cc565b955083156101b1576101aa8761057f565b96506101bd565b859450505050506101c6565b50505050610119565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff808616908716106101f58787876105b4565b73ffffffffffffffffffffffffffffffffffffffff1663128acb08308361021b886105f2565b600003878b8b8e60405160200161023493929190610f04565b6040516020818303038152906040526040518663ffffffff1660e01b8152600401610263959493929190610f8b565b6040805180830381600087803b15801561027c57600080fd5b505af19250505080156102ca575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526102c791810190610dc7565b60015b610310573d8080156102f8576040519150601f19603f3d011682016040523d82523d6000602084013e6102fd565b606091505b5061030781610624565b92505050610314565b5050505b95945050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60005b600061037384610546565b905060008060006103838761054e565b9250925092506103e8838383898673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16106103dd5773fffd8963efd1fc6a506488495d951d5263988d256100fc565b6401000276a4610404565b955083156101b1576103f98761057f565b965050505050610368565b600073ffffffffffffffffffffffffffffffffffffffff8086169087161061042d8787876105b4565b73ffffffffffffffffffffffffffffffffffffffff1663128acb083083610453886105f2565b878c8b8d60405160200161023493929190610f04565b60008060006104778461054e565b9250925092506104a97f00000000000000000000000000000000000000000000000000000000000000008484846106d5565b5060008060008089136104ef578573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1610888a600003610524565b8473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161089896000035b925092509250821561053b57604051818152602081fd5b604051828152602081fd5b516042111590565b6000808061055c84826106eb565b92506105698460146107eb565b90506105768460176106eb565b91509193909250565b80516060906101c69083906017907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe9016108db565b60006105ea7f00000000000000000000000000000000000000000000000000000000000000006105e5868686610ac2565b610b3f565b949350505050565b60007f8000000000000000000000000000000000000000000000000000000000000000821061062057600080fd5b5090565b600081516020146106c157604482511015610674576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066b90610ff7565b60405180910390fd5b6004820191508180602001905181019061068e9190610e38565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066b9190610fdd565b818060200190518101906101c69190610ea2565b6000610314856106e6868686610ac2565b610c75565b60008182601401101561075f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f746f416464726573735f6f766572666c6f770000000000000000000000000000604482015290519081900360640190fd5b81601401835110156107d257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f746f416464726573735f6f75744f66426f756e64730000000000000000000000604482015290519081900360640190fd5b5001602001516c01000000000000000000000000900490565b60008182600301101561085f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f746f55696e7432345f6f766572666c6f77000000000000000000000000000000604482015290519081900360640190fd5b81600301835110156108d257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f746f55696e7432345f6f75744f66426f756e6473000000000000000000000000604482015290519081900360640190fd5b50016003015190565b60608182601f01101561094f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b8282840110156109c057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b81830184511015610a3257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e6473000000000000000000000000000000604482015290519081900360640190fd5b606082158015610a515760405191506000825260208201604052610ab9565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610a8a578051835260209283019201610a72565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b610aca610ca5565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161115610b02579192915b506040805160608101825273ffffffffffffffffffffffffffffffffffffffff948516815292909316602083015262ffffff169181019190915290565b6000816020015173ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff1610610b8157600080fd5b508051602080830151604093840151845173ffffffffffffffffffffffffffffffffffffffff94851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660a183015260b58201939093527fa8180af292c6986c74fa300a542e049db8a89221e2452e431c3d8103b610c56860d5808301919091528251808303909101815260f5909101909152805191012090565b6000610c818383610b3f565b90503373ffffffffffffffffffffffffffffffffffffffff8216146101c657600080fd5b604080516060810182526000808252602082018190529181019190915290565b600082601f830112610cd5578081fd5b8135610ce8610ce38261105b565b611037565b818152846020838601011115610cfc578283fd5b816020850160208301379081016020019190915292915050565b600080600080600060a08688031215610d2d578081fd5b8535610d38816110cb565b94506020860135610d48816110cb565b9350604086013562ffffff81168114610d5f578182fd5b9250606086013591506080860135610d76816110cb565b809150509295509295909350565b60008060408385031215610d96578182fd5b823567ffffffffffffffff811115610dac578283fd5b610db885828601610cc5565b95602094909401359450505050565b60008060408385031215610dd9578182fd5b505080516020909101519092909150565b600080600060608486031215610dfe578283fd5b8335925060208401359150604084013567ffffffffffffffff811115610e22578182fd5b610e2e86828701610cc5565b9150509250925092565b600060208284031215610e49578081fd5b815167ffffffffffffffff811115610e5f578182fd5b8201601f81018413610e6f578182fd5b8051610e7d610ce38261105b565b818152856020838501011115610e91578384fd5b61031482602083016020860161109b565b600060208284031215610eb3578081fd5b5051919050565b60008151808452610ed281602086016020860161109b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b606093841b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116825260e89390931b7fffffff0000000000000000000000000000000000000000000000000000000000166014820152921b166017820152602b0190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b600073ffffffffffffffffffffffffffffffffffffffff8088168352861515602084015285604084015280851660608401525060a06080830152610fd260a0830184610eba565b979650505050505050565b600060208252610ff06020830184610eba565b9392505050565b60208082526010908201527f556e6578706563746564206572726f7200000000000000000000000000000000604082015260600190565b90815260200190565b60405181810167ffffffffffffffff8111828210171561105357fe5b604052919050565b600067ffffffffffffffff82111561106f57fe5b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60005b838110156110b657818101518382015260200161109e565b838111156110c5576000848401525b50505050565b73ffffffffffffffffffffffffffffffffffffffff811681146110ed57600080fd5b5056fea164736f6c6343000706000a";