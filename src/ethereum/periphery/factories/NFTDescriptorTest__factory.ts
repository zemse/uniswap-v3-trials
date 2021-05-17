/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { NFTDescriptorTest } from "../NFTDescriptorTest";

export class NFTDescriptorTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<NFTDescriptorTest> {
    return super.deploy(overrides || {}) as Promise<NFTDescriptorTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NFTDescriptorTest {
    return super.attach(address) as NFTDescriptorTest;
  }
  connect(signer: Signer): NFTDescriptorTest__factory {
    return super.connect(signer) as NFTDescriptorTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTDescriptorTest {
    return new Contract(address, _abi, signerOrProvider) as NFTDescriptorTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "addressToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "string",
            name: "token0Symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "token1Symbol",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "token0Decimals",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "token1Decimals",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "flipRatio",
            type: "bool",
          },
          {
            internalType: "int24",
            name: "tickLower",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "tickUpper",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "tickSpacing",
            type: "int24",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "uint256",
            name: "liquidity",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "poolAddress",
            type: "address",
          },
        ],
        internalType: "struct NFTDescriptor.ConstructTokenURIParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "constructTokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
    ],
    name: "feeToPercentString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtRatioX96",
        type: "uint160",
      },
      {
        internalType: "uint8",
        name: "token0Decimals",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "token1Decimals",
        type: "uint8",
      },
    ],
    name: "fixedPointToDecimalString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "string",
            name: "token0Symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "token1Symbol",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "token0Decimals",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "token1Decimals",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "flipRatio",
            type: "bool",
          },
          {
            internalType: "int24",
            name: "tickLower",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "tickUpper",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "tickSpacing",
            type: "int24",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "uint256",
            name: "liquidity",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "poolAddress",
            type: "address",
          },
        ],
        internalType: "struct NFTDescriptor.ConstructTokenURIParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "getGasCostOfConstructTokenURI",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
    ],
    name: "svgImage",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickSpacing",
        type: "int24",
      },
      {
        internalType: "uint8",
        name: "token0Decimals",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "token1Decimals",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "flipRatio",
        type: "bool",
      },
    ],
    name: "tickToDecimalString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "tokenToColorHex",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612e90806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063d5c0bdd81161005b578063d5c0bdd8146100ef578063e57f8d8a14610102578063ea4d3bcd14610122578063ecc1c7a01461013557610088565b80635e57966d1461008d5780637b6699b0146100b65780639288c218146100c9578063bac06a78146100dc575b600080fd5b6100a061009b36600461292a565b610148565b6040516100ad9190612a79565b60405180910390f35b6100a06100c436600461292a565b61015b565b6100a06100d736600461297e565b61017c565b6100a06100ea366004612946565b610197565b6100a06100fd366004612a1b565b6101ac565b6101156101103660046129e2565b6101c3565b6040516100ad9190612aea565b6100a0610130366004612a5f565b6101e4565b6100a06101433660046129e2565b6101ef565b6060610153826101fd565b90505b919050565b60606101538273ffffffffffffffffffffffffffffffffffffffff16610220565b606061018b86868686866102e4565b90505b95945050505050565b60606101a38383610423565b90505b92915050565b60606101b98484846107bd565b90505b9392505050565b6000805a90506101da6101d584612b17565b6109c9565b505a900392915050565b60606101538261134b565b60606101536101d583612b17565b606061015373ffffffffffffffffffffffffffffffffffffffff831660146115a6565b6060610231608883901c60036117ca565b60405160200180807f230000000000000000000000000000000000000000000000000000000000000081525060010182805190602001908083835b602083106102a957805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161026c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040529050919050565b606084600281900b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff276188161031457fe5b050260020b8660020b141561035d575060408051808201909152600381527f4d494e0000000000000000000000000000000000000000000000000000000000602082015261018e565b84600281900b620d89e88161036e57fe5b050260020b8660020b14156103b7575060408051808201909152600381527f4d41580000000000000000000000000000000000000000000000000000000000602082015261018e565b60006103c2876118bf565b9050821561041857610403780100000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff8316611c52565b90506104108185876107bd565b91505061018e565b6104108186866107bd565b606060006104468473ffffffffffffffffffffffffffffffffffffffff16610220565b905060006104698473ffffffffffffffffffffffffffffffffffffffff16610220565b9050818282846040516020018080612d93605f9139605f016024612e60823960240185805190602001908083835b602083106104d457805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610497565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990921691161790527f207374726f6b653d227768697465222f3e000000000000000000000000000000919093019081527f3c6720636c69702d706174683d75726c2823626574612d00000000000000000060118201528651602890910192870191508083835b602083106105a757805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161056a565b5181516020939093036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990911692169190911790527f293e0000000000000000000000000000000000000000000000000000000000009201918252506002016024612e60823960240183805190602001908083835b6020831061066057805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610623565b5181516020939093036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990911692169190911790527f207374726f6b653d227768697465222f3e3c2f673e0000000000000000000000920191825250601501604a612df28239604a0180612d49604a9139604a01807f3c646566733e3c636c6970506174682069643d626574612d000000000000000081525060180182805190602001908083835b6020831061074c57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161070f565b6001836020036101000a03801982511681845116808217855250505050505090500180612d1f602a91397f3c2f636c6970506174683e3c2f646566733e3c2f7376673e0000000000000000602a820152604080516022818403018152604290920190529a9950505050505050505050565b606060006107cc858585611cd3565b905060006107e4828368010000000000000000611ddd565b90506c01000000000000000000000000821080156108325761082b8272047bf19673df52e37f2410011d100000000000700100000000000000000000000000000000611ddd565b9150610854565b61085182620186a0700100000000000000000000000000000000611ddd565b91505b8160005b811561086c57600101600a82049150610858565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160008061089b8684611eaa565b9150915080156108ac576001909201915b6108b4612812565b8515610927576108d36108cb602b60ff8716611f34565b600790611fab565b60ff9081166020830152600260808301526108ff906001906108f990602b908816611f34565b90611fab565b60ff90811660a0830152602082015161091a91166001611f34565b60ff16604082015261099e565b60098460ff16106109705761094060ff85166004611f34565b60ff16602082018190526005608083015261095c906001611f34565b60ff1660a08201526004604082015261099e565b60066020820152600560408201819052610995906001906108f99060ff881690611f34565b60ff1660608201525b82815285151560c0820152600060e08201526109b98161201f565b9c9b505050505050505050505050565b606060006109db83610140015161134b565b8360c001516109ee5783606001516109f4565b83604001515b8460c00151610a07578460400151610a0d565b84606001515b610a2f8660e0015187610120015188608001518960a001518a60c001516102e4565b610a5287610100015188610120015189608001518a60a001518b60c001516102e4565b60405160200180807f556e6973776170205633202d2000000000000000000000000000000000000000815250600d0186805190602001908083835b60208310610aca57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610a8d565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990921691161790527f202d200000000000000000000000000000000000000000000000000000000000919093019081528751600390910192880191508083835b60208310610b7757805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610b3a565b6001836020036101000a038019825116818451168082178552505050505050905001807f2f0000000000000000000000000000000000000000000000000000000000000081525060010184805190602001908083835b60208310610c0a57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610bcd565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990921691161790527f202d200000000000000000000000000000000000000000000000000000000000919093019081528551600390910192860191508083835b60208310610cb757805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610c7a565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990921691161790527f3c3e000000000000000000000000000000000000000000000000000000000000919093019081528451600290910192850191508083835b60208310610d6457805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610d27565b6001836020036101000a0380198251168184511680821785525050505050509050019550505050505060405160208183030381529060405290506000610dae84610160015161234d565b610dbc8561018001516101fd565b610dc986602001516101fd565b8651610dd4906101fd565b604051602001806059612c658239605901807f5c6e6c69717569646974793a2000000000000000000000000000000000000000815250600d0185805190602001908083835b60208310610e5657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610e19565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990921691161790527f5c6e706f6f6c416464726573733a200000000000000000000000000000000000919093019081528651600f90910192870191508083835b60208310610f0357805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610ec6565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990921691161790527f5c6e746f6b656e30416464726573733a20000000000000000000000000000000919093019081528551601190910192860191508083835b60208310610fb057805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610f73565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990921691161790527f5c6e746f6b656e31416464726573733a20000000000000000000000000000000919093019081528451601190910192850191508083835b6020831061105d57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611020565b6001836020036101000a038019825116818451168082178552505050505050905001945050505050604051602081830303815290604052905081816110b26110ad87602001518860000151610423565b61247a565b60405160200180807f646174613a6170706c69636174696f6e2f6a736f6e2c7b226e616d65223a2200815250601f0184805190602001908083835b6020831061112a57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016110ed565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990921691161790527f222c20226465736372697074696f6e223a220000000000000000000000000000919093019081528551601290910192860191508083835b602083106111d757805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161119a565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990921691161790527f222c2022696d616765223a202200000000000000000000000000000000000000919093019081527f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000600d8201528451602790910192850191508083835b602083106112aa57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161126d565b5181516020939093036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990911692169190911790527f227d000000000000000000000000000000000000000000000000000000000000920191825250604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe20181526002909201905298975050505050505050565b606062ffffff8216611391575060408051808201909152600281527f30250000000000000000000000000000000000000000000000000000000000006020820152610156565b816000805b62ffffff8316156113e15760ff8116156113b2576001016113cb565b600a62ffffff84160662ffffff166000146113cb576001015b600190910190600a62ffffff8416049250611396565b6113e9612812565b6000600584106114d857600060046114048660ff8716611f34565b1015611411576001611414565b60005b60ff90811691506114289085166001611f34565b611433866005611f34565b1061145f5761145a61144960ff86166001611f34565b611454876005611f34565b90611f34565b611462565b60005b60ff851660808501819052909250611481906001906114549085611fab565b60ff90811660a085015260808401516114a29183916108f991166001611f34565b60ff90811660408501526114ca9082906108f9906114c39088166001611fab565b8590611fab565b60ff16602084015250611548565b6114e3600585611f34565b60026080840181905290915061150190600190611454908490611fab565b60ff90811660a08401526115239061151c9085166002611fab565b8290611fab565b60ff1660208301819052611538906002611f34565b60ff166040830152600160c08301525b6115676115588560ff8616611f34565b62ffffff891690600a0a611c52565b8252600160e08301526004841161157f57600061158a565b61158a846004611f34565b60ff16606083015261159b8261201f565b979650505050505050565b606060008260020260020167ffffffffffffffff811180156115c757600080fd5b506040519080825280601f01601f1916602001820160405280156115f2576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061162357fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061168057fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600160028402015b600181111561175c577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106116ef57fe5b1a60f81b8282815181106116ff57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016116b7565b5083156101a357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015290519081900360640190fd5b606060008260020267ffffffffffffffff811180156117e857600080fd5b506040519080825280601f01601f191660200182016040528015611813576020820181803683370190505b5080519091505b801561175c577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061184f57fe5b1a60f81b82600183038151811061186257fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161181a565b60008060008360020b126118d6578260020b6118de565b8260020b6000035b9050620d89e881111561195257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600160248201527f5400000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001821661197357700100000000000000000000000000000000611985565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff16905060028216156119b9576ffff97272373d413259a46990580e213a0260801c5b60048216156119d8576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b60088216156119f7576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615611a16576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615611a35576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615611a54576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615611a73576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615611a93576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615611ab3576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615611ad3576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615611af3576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615611b13576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615611b33576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615611b53576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615611b73576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615611b94576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615611bb4576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615611bd3576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615611bf0576b048a170391f7dc42444e8fa20260801c5b60008460020b1315611c2957807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81611c2557fe5b0490505b640100000000810615611c3d576001611c40565b60005b60ff16602082901c0192505050919050565b6000808211611cc257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381611ccb57fe5b049392505050565b600080611cee611ce960ff868116908616612709565b612788565b9050600081118015611d01575060128111155b15611dbb578260ff168460ff161115611d4957611d42611d22826002611c52565b73ffffffffffffffffffffffffffffffffffffffff871690600a0a61279f565b9150611d7a565b611d77611d57826002611c52565b73ffffffffffffffffffffffffffffffffffffffff871690600a0a611c52565b91505b6002810660011415611db657611db3827003298b075b4b6a5240945790619b37fd4a700100000000000000000000000000000000611ddd565b91505b611dd5565b8473ffffffffffffffffffffffffffffffffffffffff1691505b509392505050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85870986860292508281109083900303905080611e315760008411611e2657600080fd5b5082900490506101bc565b808411611e3d57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b600080600060058460ff161115611ef057611eed8560ff7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb870116600a0a611c52565b94505b60006004600a8706119050611f0686600a611c52565b95508015611f15578560010195505b85620186a01415611f2b57600a86049550600191505b50939492505050565b600082821115611fa557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000828201838110156101a357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60606000826020015160ff1667ffffffffffffffff8111801561204157600080fd5b506040519080825280601f01601f19166020018201604052801561206c576020820181803683370190505b5090508260e00151156120da577f2500000000000000000000000000000000000000000000000000000000000000816001835103815181106120aa57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b8260c001511561219f577f30000000000000000000000000000000000000000000000000000000000000008160008151811061211257fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f2e000000000000000000000000000000000000000000000000000000000000008160018151811061216f57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b608083015160ff165b60a08401516121bb9060ff166001611fab565b81101561220a57603060f81b8282815181106121d357fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506001016121a8565b505b825115610153576000836060015160ff161180156122375750826060015160ff16836040015160ff16145b156122cc5760408301805160ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8201811690925282517f2e000000000000000000000000000000000000000000000000000000000000009284921690811061229c57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b82516122de90603090600a9006611fab565b60f81b818460400180518091906001900360ff1660ff1681525060ff168151811061230557fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a836000018181518161234457fe5b0490525061220c565b60608161238e575060408051808201909152600181527f30000000000000000000000000000000000000000000000000000000000000006020820152610156565b8160005b81156123a657600101600a82049150612392565b60008167ffffffffffffffff811180156123bf57600080fd5b506040519080825280601f01601f1916602001820160405280156123ea576020820181803683370190505b5085935090507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82015b831561247157600a840660300160f81b8282806001900393508151811061243757fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84049350612414565b50949350505050565b80516060906008028061249d575050604080516020810190915260008152610156565b600060038451600402600201816124b057fe5b04905060048106156124c55760048106600403015b60008167ffffffffffffffff811180156124de57600080fd5b506040519080825280601f01601f191660200182016040528015612509576020820181803683370190505b50905060005b828110156124715760068102848110612583577f3d0000000000000000000000000000000000000000000000000000000000000083838151811061254f57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350612700565b6008810460078216600381101561262f57604051806060016040528060408152602001612cbe6040913960408260020360ff168b85815181106125c257fe5b016020015160f81c901c60ff16816125d657fe5b0660ff16815181106125e457fe5b602001015160f81c60f81b8585815181106125fb57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506126fd565b600060018a510383146126585789836001018151811061264b57fe5b016020015160f81c61265b565b60005b60088b858151811061266957fe5b016020015160f81c901b0190506000604061ffff838116600a86900360ff161c16069050604051806060016040528060408152602001612cbe604091398160ff16815181106126b457fe5b602001015160f81c60f81b8787815181106126cb57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535050505b50505b5060010161250f565b600081830381831280159061271e5750838113155b80612733575060008312801561273357508381135b6101a3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612e3c6024913960400191505060405180910390fd5b60008082121561279b5781600003610153565b5090565b6000826127ae575060006101a6565b828202828482816127bb57fe5b04146101a3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612cfe6021913960400191505060405180910390fd5b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b803561015681612c3f565b8035801515811461015657600080fd5b8035600281900b811461015657600080fd5b600082601f830112612893578081fd5b813567ffffffffffffffff8111156128a757fe5b6128d860207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601612af3565b8181528460208386010111156128ec578283fd5b816020850160208301379081016020019190915292915050565b803562ffffff8116811461015657600080fd5b803560ff8116811461015657600080fd5b60006020828403121561293b578081fd5b81356101a381612c3f565b60008060408385031215612958578081fd5b823561296381612c3f565b9150602083013561297381612c3f565b809150509250929050565b600080600080600060a08688031215612995578081fd5b61299e86612871565b94506129ac60208701612871565b93506129ba60408701612919565b92506129c860608701612919565b91506129d660808701612861565b90509295509295909350565b6000602082840312156129f3578081fd5b813567ffffffffffffffff811115612a09578182fd5b82016101a081850312156101a3578182fd5b600080600060608486031215612a2f578283fd5b8335612a3a81612c3f565b9250612a4860208501612919565b9150612a5660408501612919565b90509250925092565b600060208284031215612a70578081fd5b6101a382612906565b6000602080835283518082850152825b81811015612aa557858101830151858201604001528201612a89565b81811115612ab65783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b90815260200190565b60405181810167ffffffffffffffff81118282101715612b0f57fe5b604052919050565b60006101a0808336031215612b2a578182fd5b612b3381612af3565b9050612b3e83612856565b8152612b4c60208401612856565b6020820152604083013567ffffffffffffffff80821115612b6b578384fd5b612b7736838701612883565b60408401526060850135915080821115612b8f578384fd5b50612b9c36828601612883565b606083015250612bae60808401612919565b6080820152612bbf60a08401612919565b60a0820152612bd060c08401612861565b60c0820152612be160e08401612871565b60e0820152610100612bf4818501612871565b90820152610120612c06848201612871565b90820152610140612c18848201612906565b908201526101608381013590820152610180612c35818501612856565b9082015292915050565b73ffffffffffffffffffffffffffffffffffffffff81168114612c6157600080fd5b5056fe526570726573656e74732061206c697175696469747920706f736974696f6e20696e206120556e697377617020563320706f6f6c2e2052656465656d61626c6520666f72206f776564207265736572766520746f6b656e732e4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f773e3c726563742077696474683d3132206865696768743d223234222066696c6c3d227768697465222f3e3c636972636c652063783d223132222063793d2231322220723d223822207374796c653d6d69782d626c656e642d6d6f64653a6f7665726c61792066696c6c3d22776869746522202f3e3c7376672077696474683d22323422206865696768743d223234222076696577426f783d22302030203234203234222066696c6c3d226e6f6e652220786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323030302f737667223e3c636972636c652063783d223132222063793d2231322220723d223422207374796c653d6d69782d626c656e642d6d6f64653a6f7665726c61792066696c6c3d22776869746522202f3e5369676e6564536166654d6174683a207375627472616374696f6e206f766572666c6f773c636972636c652063783d223132222063793d2231322220723d223132222066696c6c3da164736f6c6343000706000a";
