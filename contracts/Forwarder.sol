    pragma solidity ^0.4.24;

    contract Forwarder {

        address public destinationAddress;
        address constant public otherAddress = 0xf17f52151EbEF6C7334FAD080c5704D77216b732;
        address constant public otherAddress2 = 0x821aEa9a577a9b44299B9c15c88cf3087F3b5544;
        address constant public otherAddress3 = 0x0d1d4e623D10F9FBA5Db95830F7d3839406C6AF2;

        event LogForwarded(address indexed sender, uint amount);
        event LogFlushed(address indexed sender, uint amount);

        function Forwarder() public {
            destinationAddress = msg.sender;
        }

        function() payable public {
            emit LogForwarded(msg.sender, msg.value);
            otherAddress2.transfer(msg.value /3);        // 17
            otherAddress3.transfer(msg.value /3);  // 18
//                handleRefund(otherAddress);
//                handleRefund(destinationAddress);
        }

        function flush() public {
            emit LogFlushed(msg.sender, address(this).balance);
            destinationAddress.transfer(address(this).balance);
        }

        function sendForwarderMoney() payable public {
            address(this).balance += msg.value;
        }


        function handleRefund(address someAddress) payable public {
            otherAddress2.transfer(msg.value /3);
            otherAddress3.transfer(msg.value /3);
        }
    }