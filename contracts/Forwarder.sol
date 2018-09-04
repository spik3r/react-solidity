pragma solidity ^0.4.2;
/**
 * Contract that will forward any incoming Ether to its creator
 */
contract Forwarder {
    // Address to which any funds sent to this contract will be forwarded
    address public destinationAddress;

    /**
     * Create the contract, and set the destination address to that of the creator
     */
    function Forwarder() {
        destinationAddress = msg.sender;
    }

    function sendForwarderMoney(address _receiver) payable {
        _receiver.transfer(1);
        destinationAddress.transfer(2);
    }

    /**
     * Default function; Gets called when Ether is deposited, and forwards it to the destination address
     */
    function() payable {
//        if (msg.value > 0) {
//            if (!destinationAddress.send(2)) throw;
//            // also reverts the transfer.
//        }
    }
}