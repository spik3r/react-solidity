pragma solidity ^0.4.24;

contract Sender {
    uint256 public balance;

    function sendMoney(address _receiver) payable {
        _receiver.transfer(msg.value);
    }

    function getBalance() public returns (uint) {
        return address(this).balance;
    }

    function () public payable{
    }
}
