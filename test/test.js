const { ethers } = require("ethers");
const UtilityContractJSON = require("../build/contracts/Utility.json");

const TBSCRPC = "https://data-seed-prebsc-1-s1.binance.org:8545/";   // your contract address
const ADDR = "0xb4a999e713C739c641C53533209051e0Af537303";   // your contract address
const ABI = UtilityContractJSON.abi;    // your contract ABI

const ADDRESS = "0x0483043B87B5B146DbEAdCfAeAb44604f7CfB5F1"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x001667842Cc59CAdB0A335bf7c7f77b3C75f41c2", // JNTR/B
	"0xF3C0d1a572792731c186972722c04a9E17E76FDf", // degen
	"0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684", // USDT
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = new ethers.providers.JsonRpcProvider(TBSCRPC, {
	name: 'TBNB',
	chainId: 97,
})

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);
	try {
		const balances = await contract.getBalances(ADDRESS, TOKENS);
		const balances2 = []
		balances.forEach((balance) => {
			const b = ethers.utils.formatUnits(balance.balance)
			balances2.push({
				token: balance.token,
				balance: b
			})
		})
		return balances2;
	} catch (error) {
		console.error('Something went wrong.\n', error)
	}
};

test().then(console.log);