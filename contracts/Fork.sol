pragma solidity ^0.8.9;

contract Fork {
    address immutable public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    function test(uint a, uint b) public onlyOwner view returns(uint) {
        return a+b;
    }
}
`

作者已在 `goerli` 部署该合约，地址: 
```bash
0x1BC902734C51711301aee8D78a37CdAbF4123c57