/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OracleTest, OracleTestInterface } from "../OracleTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "by",
        type: "uint32",
      },
    ],
    name: "advanceTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "advanceTimeBy",
            type: "uint32",
          },
          {
            internalType: "int24",
            name: "tick",
            type: "int24",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
        ],
        internalType: "struct OracleTest.UpdateParams[]",
        name: "params",
        type: "tuple[]",
      },
    ],
    name: "batchUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cardinality",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cardinalityNext",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "secondsAgos",
        type: "uint32[]",
      },
    ],
    name: "getGasCostOfObserve",
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
        internalType: "uint16",
        name: "_cardinalityNext",
        type: "uint16",
      },
    ],
    name: "grow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "index",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "time",
            type: "uint32",
          },
          {
            internalType: "int24",
            name: "tick",
            type: "int24",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
        ],
        internalType: "struct OracleTest.InitializeParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidity",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "observations",
    outputs: [
      {
        internalType: "uint32",
        name: "blockTimestamp",
        type: "uint32",
      },
      {
        internalType: "int56",
        name: "tickCumulative",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "liquidityCumulative",
        type: "uint160",
      },
      {
        internalType: "bool",
        name: "initialized",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "secondsAgos",
        type: "uint32[]",
      },
    ],
    name: "observe",
    outputs: [
      {
        internalType: "int56[]",
        name: "tickCumulatives",
        type: "int56[]",
      },
      {
        internalType: "uint160[]",
        name: "liquidityCumulatives",
        type: "uint160[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tick",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "time",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "advanceTimeBy",
            type: "uint32",
          },
          {
            internalType: "int24",
            name: "tick",
            type: "int24",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
        ],
        internalType: "struct OracleTest.UpdateParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061158e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063761eb23e1161008c578063daf50f6b11610066578063daf50f6b146101eb578063dbffe9ad146101fe578063dd158c1814610206578063f7fd2cfa1461020e576100ea565b8063761eb23e146101a4578063883bdbfd146101b7578063d81740db146101d8576100ea565b80632986c0e5116100c85780632986c0e5146101455780633eaf5d9f1461015a57806365829dc51461016f57806374e69cef14610184576100ea565b806316ada547146100ef5780631a6865021461010d578063252c09d714610122575b600080fd5b6100f7610221565b604051610104919061153f565b60405180910390f35b61011561022e565b6040516101049190611513565b61013561013036600461140c565b610245565b6040516101049493929190611550565b61014d61028b565b6040516101049190611527565b61016261029b565b60405161010491906114ce565b61018261017d3660046113a8565b6102ad565b005b61019761019236600461132a565b6103bd565b6040516101049190611536565b6101826101b23660046113ea565b610458565b6101ca6101c536600461132a565b610493565b604051610104929190611448565b6101826101e63660046112ba565b610527565b6101826101f93660046113a8565b6106ad565b61014d6107db565b61014d6107eb565b61018261021c366004611424565b6107fb565b61ffff5463ffffffff1681565b61ffff54600160381b90046001600160801b031681565b60008161ffff811061025657600080fd5b015463ffffffff81169150640100000000810460060b90600160581b81046001600160a01b031690600160f81b900460ff1684565b61ffff8054600160b81b90041681565b61ffff54640100000000900460020b81565b6102bd61021c6020830183611424565b61ffff805461031491600091600160b81b810482169163ffffffff80831692640100000000810460020b926001600160801b03600160381b83041692600160c81b8304821692600160d81b90049091169061081d16565b61ffff8054928116600160b81b0261ffff60b81b19928216600160c81b0261ffff60c81b19909416939093179190911691909117905561035a6040820160208301611387565b61ffff805460029290920b62ffffff166401000000000266ffffff000000001990921691909117905561039360608201604083016113c3565b61ffff60076101000a8154816001600160801b0302191690836001600160801b0316021790555050565b61ffff805460009163ffffffff821691640100000000810460020b916001600160801b03600160381b83041691600160b81b900416845a905061044885898980806020026020016040519081016040528093929190818152602001838360200280828437600092018290525061ffff805491969594508b93508992508a91600160c81b9004166109d3565b50505a9003979650505050505050565b61ffff805461047291600091600160d81b90041683610b2d565b61ffff8054918116600160d81b0261ffff60d81b1990921691909117905550565b60608061051c61ffff60009054906101000a900463ffffffff16858580806020026020016040519081016040528093929190818152602001838360200280828437600092018290525061ffff80549196959450640100000000820460020b9350600160b81b8204811692506001600160801b03600160381b83041691600160c81b9004166109d3565b915091509250929050565b61ffff8054640100000000810460020b916001600160801b03600160381b83041691600160b81b8104821691600160c81b8204811691600160d81b81049091169063ffffffff1660005b878110156106085788888281811061058557fe5b61059b9260206060909202019081019150611424565b909101906105af600086848a8a898961081d565b90955093508888828181106105c057fe5b90506060020160200160208101906105d89190611387565b96508888828181106105e657fe5b90506060020160400160208101906105fe91906113c3565b9550600101610571565b5061ffff805463ffffffff90921663ffffffff19948216600160c81b0261ffff60c81b19968316600160b81b0261ffff60b81b196001600160801b03909916600160381b0276ffffffffffffffffffffffffffffffff000000000000001960029b909b0b62ffffff166401000000000266ffffff0000000019909616959095179990991693909317969096169690961793909316929092171691909117909155505050565b61ffff8054600160c81b900416156106e05760405162461bcd60e51b81526004016106d7906114dc565b60405180910390fd5b6106ed6020820182611424565b61ffff805463ffffffff191663ffffffff929092169190911790556107186040820160208301611387565b61ffff805460029290920b62ffffff166401000000000266ffffff000000001990921691909117905561075160608201604083016113c3565b61ffff80546001600160801b0392909216600160381b0276ffffffffffffffffffffffffffffffff00000000000000199092169190911790556107a261079a6020830183611424565b600090610bd3565b61ffff8054928116600160c81b0261ffff60c81b19928216600160d81b0261ffff60d81b19909416939093179190911691909117905550565b61ffff8054600160c81b90041681565b61ffff8054600160d81b90041681565b61ffff805463ffffffff19811663ffffffff9182169390930116919091179055565b6000806000898961ffff1661ffff811061083357fe5b60408051608081018252919092015463ffffffff8082168084526401000000008304600690810b810b900b6020850152600160581b83046001600160a01b031694840194909452600160f81b90910460ff1615156060830152909250891614156108a357888592509250506109c7565b8461ffff168461ffff161180156108c457506001850361ffff168961ffff16145b156108d1578391506108d5565b8491505b8161ffff168960010161ffff16816108e957fe5b0692506108f881898989610c1f565b8a8461ffff1661ffff811061090957fe5b825191018054602084015160408501516060909501511515600160f81b027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6001600160a01b03909616600160581b027fff0000000000000000000000000000000000000000ffffffffffffffffffffff60069390930b66ffffffffffffff16640100000000026affffffffffffff000000001963ffffffff90971663ffffffff19909516949094179590951692909217169290921792909216179055505b97509795505050505050565b60608060008361ffff1611610a13576040805162461bcd60e51b81526020600482015260016024820152604960f81b604482015290519081900360640190fd5b865167ffffffffffffffff81118015610a2b57600080fd5b50604051908082528060200260200182016040528015610a55578160200160208202803683370190505b509150865167ffffffffffffffff81118015610a7057600080fd5b50604051908082528060200260200182016040528015610a9a578160200160208202803683370190505b50905060005b8751811015610b2057610acb8a8a8a8481518110610aba57fe5b60200260200101518a8a8a8a610c9b565b848381518110610ad757fe5b60200260200101848481518110610aea57fe5b60200260200101826001600160a01b03166001600160a01b03168152508260060b60060b81525050508080600101915050610aa0565b5097509795505050505050565b6000808361ffff1611610b6b576040805162461bcd60e51b81526020600482015260016024820152604960f81b604482015290519081900360640190fd5b8261ffff168261ffff1611610b81575081610bcc565b825b8261ffff168161ffff161015610bc7576001858261ffff1661ffff8110610ba657fe5b01805463ffffffff191663ffffffff92909216919091179055600101610b83565b508190505b9392505050565b6040805160808101825263ffffffff9283168082526000602083018190529282019290925260016060909101819052835463ffffffff1916909117909116600160f81b17909155908190565b610c2761127c565b600085600001518503905060405180608001604052808663ffffffff1681526020018263ffffffff168660020b0288602001510160060b81526020018263ffffffff16856001600160801b0316028860400151016001600160a01b0316815260200160011515815250915050949350505050565b60008063ffffffff8716610d42576000898661ffff1661ffff8110610cbc57fe5b60408051608081018252919092015463ffffffff8082168084526401000000008304600690810b810b900b6020850152600160581b83046001600160a01b031694840194909452600160f81b90910460ff16151560608301529092508a1614610d2e57610d2b818a8988610c1f565b90505b8060200151816040015192509250506109c7565b868803600080610d578c8c858c8c8c8c610e1c565b91509150610d6361127c565b825163ffffffff85811691161415610d7c575081610dfe565b815163ffffffff85811691161415610d95575080610dfe565b60008360000151836000015103905060008163ffffffff16856020015185602001510360060b81610dc257fe5b05905060008263ffffffff1686604001518660400151036001600160a01b031681610de957fe5b049050610df886888484610c1f565b93505050505b80602001518160400151955095505050505097509795505050505050565b610e2461127c565b610e2c61127c565b888561ffff1661ffff8110610e3d57fe5b60408051608081018252919092015463ffffffff81168083526401000000008204600690810b810b900b6020840152600160581b82046001600160a01b031693830193909352600160f81b900460ff16151560608201529250610ea290899089611019565b15610eda578663ffffffff16826000015163ffffffff161415610ec4576109c7565b81610ed183898988610c1f565b915091506109c7565b888361ffff168660010161ffff1681610eef57fe5b0661ffff1661ffff8110610eff57fe5b60408051608081018252929091015463ffffffff811683526401000000008104600690810b810b900b60208401526001600160a01b03600160581b8204169183019190915260ff600160f81b90910416151560608201819052909250610fb657604080516080810182528a5463ffffffff811682526401000000008104600690810b810b900b6020830152600160581b81046001600160a01b031692820192909252600160f81b90910460ff161515606082015291505b610fc588836000015189611019565b610ffc576040805162461bcd60e51b815260206004820152600360248201526213d31160ea1b604482015290519081900360640190fd5b61100989898988876110dc565b9150915097509795505050505050565b60008363ffffffff168363ffffffff161115801561104357508363ffffffff168263ffffffff1611155b1561105f578163ffffffff168363ffffffff1611159050610bcc565b60008463ffffffff168463ffffffff1611611087578363ffffffff166401000000000161108f565b8363ffffffff165b64ffffffffff16905060008563ffffffff168463ffffffff16116110c0578363ffffffff16640100000000016110c8565b8363ffffffff165b64ffffffffff169091111595945050505050565b6110e461127c565b6110ec61127c565b60008361ffff168560010161ffff168161110257fe5b0661ffff169050600060018561ffff16830103905060005b506002818301048961ffff8716828161112f57fe5b0661ffff811061113b57fe5b60408051608081018252929091015463ffffffff811683526401000000008104600690810b810b900b60208401526001600160a01b03600160581b8204169183019190915260ff600160f81b909104161515606082018190529095506111a65780600101925061111a565b898661ffff1682600101816111b757fe5b0661ffff81106111c357fe5b60408051608081018252929091015463ffffffff811683526401000000008104600690810b810b900b60208401526001600160a01b03600160581b8204169183019190915260ff600160f81b9091041615156060820152855190945060009061122e908b908b611019565b905080801561124757506112478a8a8760000151611019565b15611252575061126f565b8061126257600182039250611269565b8160010193505b5061111a565b5050509550959350505050565b60408051608081018252600080825260208201819052918101829052606081019190915290565b6000606082840312156112b4578081fd5b50919050565b600080602083850312156112cc578182fd5b823567ffffffffffffffff808211156112e3578384fd5b818501915085601f8301126112f6578384fd5b813581811115611304578485fd5b866020606083028501011115611318578485fd5b60209290920196919550909350505050565b6000806020838503121561133c578182fd5b823567ffffffffffffffff80821115611353578384fd5b818501915085601f830112611366578384fd5b813581811115611374578485fd5b8660208083028501011115611318578485fd5b600060208284031215611398578081fd5b81358060020b8114610bcc578182fd5b6000606082840312156113b9578081fd5b610bcc83836112a3565b6000602082840312156113d4578081fd5b81356001600160801b0381168114610bcc578182fd5b6000602082840312156113fb578081fd5b813561ffff81168114610bcc578182fd5b60006020828403121561141d578081fd5b5035919050565b600060208284031215611435578081fd5b813563ffffffff81168114610bcc578182fd5b604080825283519082018190526000906020906060840190828701845b8281101561148457815160060b84529284019290840190600101611465565b50505083810382850152845180825285830191830190845b818110156114c15783516001600160a01b03168352928401929184019160010161149c565b5090979650505050505050565b60029190910b815260200190565b60208082526013908201527f616c726561647920696e697469616c697a656400000000000000000000000000604082015260600190565b6001600160801b0391909116815260200190565b61ffff91909116815260200190565b90815260200190565b63ffffffff91909116815260200190565b63ffffffff94909416845260069290920b60208401526001600160a01b03166040830152151560608201526080019056fea164736f6c6343000706000a";

export class OracleTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OracleTest> {
    return super.deploy(overrides || {}) as Promise<OracleTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OracleTest {
    return super.attach(address) as OracleTest;
  }
  connect(signer: Signer): OracleTest__factory {
    return super.connect(signer) as OracleTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleTestInterface {
    return new utils.Interface(_abi) as OracleTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleTest {
    return new Contract(address, _abi, signerOrProvider) as OracleTest;
  }
}
