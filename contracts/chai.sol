// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract chai {
    struct Memo {
        string name;
        string message;
        uint timeStamp;
        address from;
    }

    Memo[] memos;

    address payable owner;
    constructor () {
        owner = payable(msg.sender);
    }

    function buyChai(string calldata _name, string calldata _message) external payable {
        require(msg.value > 0, "Please pay more than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(_name, _message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns(Memo[] memory) {
        return memos;
    }
}