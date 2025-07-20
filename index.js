import { JsonRpcProvider, Wallet, Contract, parseEther } from 'ethers';

async function executeBatchTrade() {

    const provider = new JsonRpcProvider('https://mainnet.base.org');


    const privateKey = 'YOUR_PRIVATE_KEY'; // create a new wallet and use it for volume boost
    const wallet = new Wallet(privateKey, provider);


    const contractABI = [{
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "iterations",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "minAmountOut",
                "type": "uint256"
            }
        ],
        "name": "executeTrades",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
    ];
    const contractAddress = '0x027Ed9B84b95069C6f10eD1BE5dA0B4414804547';


    const contract = new Contract(contractAddress, contractABI, wallet);

    //trade parameters
    const token = '0x2f74f818e81685c8086Dd783837a4605a90474B8'; // nation token address
    const iterations = 50; // no. of trades per inside a single transaction
    const minAmountOut = 0; // put zero


    // Execute trade
    try {
        const tx = await contract.executeTrades(
            token,
            iterations,
            minAmountOut,
            { value: parseEther('0.01') }  //dont use dust eth amount as it wont get logged on dex screener 

        );

        console.log(tx.hash);
        const receipt = await tx.wait();
        console.log('Transaction confirmed in block:', receipt.blockNumber);
        /// test -transaction 
        // https://basescan.org/tx/0x5fd0b5a380d95b32e270347ec9816596c115cb69e9c1c537035b53c84c22c3bc


    } catch (error) {
        console.error('Trade execution failed:', error);
    }
}

executeBatchTrade();


