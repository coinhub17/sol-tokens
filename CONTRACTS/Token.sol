// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.1;
import 'hardhat/console.sol';
contract Token{
    string public name="_________";
    string public symbol="___-_";
    uint public totalSupply=_________;
    address public owner;
    mapping(address=>uint)balances;

constructor() {
    balances[msg.sender]=totalSupply;
    owner=msg.sender;
}
function transfer (address to,uint amount)external {
    console.log("SENDER BALANCE IS %s tokens",balances[msg.sender]);
    console.log("Trying to send %s tokens to %s",amount,to);
    require(balances[msg.sender]>=amount,'Not enough tokens');
    balances[msg.sender]-=amount;
    balances[to]+=amount;

}

function  balanceOf(address account)external view returns(uint)
{return balances[account];}
}
