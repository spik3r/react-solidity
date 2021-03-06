pragma solidity ^0.4.24;

contract EtherTransferTo {
    function () public payable {
    }

    function getBalance() public returns (uint) {
        return address(this).balance;
    }
}

contract EtherTransferFrom {

    EtherTransferTo private _instance;

    function EtherTransferFrom() public {
        // _instance = EtherTransferTo(address(this));
        _instance = new EtherTransferTo();
    }

    function getBalance() public returns (uint) {
        return address(this).balance;
    }

    function getBalanceOfInstance() public returns (uint) {
        //return address(_instance).balance;
        return _instance.getBalance();
    }

    function () public payable {
        //msg.sender.send(msg.value);
        address(_instance).send(msg.value);
    }


}

contract Receiver {
    uint public balance = 0;

    function () payable {
        balance += msg.value;
    }
    function getBalance() public returns (uint) {
        return address(this).balance;
    }
}

