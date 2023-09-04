// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

contract EmitWinner {
    function callAttempt(address eventWinner) external {
        (bool success, ) = eventWinner.call(abi.encodeWithSignature("attempt()"));
        require(success);
    }
}