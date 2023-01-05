// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;
pragma experimental ABIEncoderV2;

interface IERC20 {

    event Approval(address indexed owner, address indexed spender, uint value);

    event Transfer(address indexed from, address indexed to, uint value);



    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function decimals() external view returns (uint8);

    function totalSupply() external view returns (uint);

    function balanceOf(address owner) external view returns (uint);

    function allowance(address owner, address spender) external view returns (uint);



    function approve(address spender, uint value) external returns (bool);

    function transfer(address to, uint value) external returns (bool);

    function transferFrom(address from, address to, uint value) external returns (bool);



    function mint(address to, uint256 amount) external returns (bool);

}


struct BalanceInfo {
    address token;
    uint256 balance;
}

contract Utility {
    function getBalances(address owner, address[] calldata tokens) external view returns(BalanceInfo[] memory balances) {
        balances = new BalanceInfo[](tokens.length);
        for (uint256 i = 0; i < tokens.length; i++) {
            address token = tokens[i];
            uint256 b = IERC20(token).balanceOf(owner);
            balances[i].token = token;
            balances[i].balance = b;
        }
    }
}
