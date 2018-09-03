pragma solidity ^0.4.24;

contract  AcceptEth {
    address public owner;
    uint public price;
    mapping (address => uint) balance;

    function AcceptEth() {
        // set owner as the address of the one who created the contract
        owner = msg.sender;
        // set the price to 2 ether
        price = 2 ether;
    }

    function accept() payable {
        // Error out if anything other than 2 ether is sent
        require(msg.value == price);

        // Track that calling account deposited ether
        balance[msg.sender] += msg.value;
    }
}

    inpage.js:1
    MetaMask - RPC Error: Error: Error: [ethjs-rpc] rpc error with payload
    {
    "id": 8476063269707,
    "jsonrpc": "2.0",
    "params": ["0xf87182011a85174876e80083035b609406c1939f6cbb68d42333f140cae815cc36d341b0880de0b6b3a764000080822d46a011d708c9d53a5e7e9195c32fab4f6f3cad259887436eadd521d93ac853541455a0176061761d6d14c063eb2b0c359457dec982d72d52f19bdf33fa8f5be20ed939"],
    "method": "eth_sendRawTransaction"
    } Error: VM Exception while processing transaction: revert

Uncaught (in promise) Error: Error: Error: [ethjs-rpc] rpc error with payload  Error: VM Exception while processing transaction: revert