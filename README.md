
![Banner](https://github.com/onweb3/aerodome-trade-volume-booster/blob/main/banner.png)
# Aerodome - TradeVolumeBoosteer V1
Boost your tokens trade volume on Base.
## Run Locally  

Clone the project  

~~~bash  
  git clone https://github.com/aerodome-trade-volume-booster my-project
~~~

Go to the project directory  

~~~bash  
  cd my-project
~~~

Install dependencies  

~~~bash  
npm install
~~~

Start trade volume boost

~~~bash  
npm run start
~~~

## How to Configure?
open my-project , and find index.js 
~~~bash

async function executeBatchTrade() {

    const provider = new JsonRpcProvider('https://mainnet.base.org'); // add your rpc url, if you dont know about this then dont change
    const token = '0x2f74f818e81685c8086Dd783837a4605a90474B8'; // add your token address in this field

    const privateKey = 'YOUR_PRIVATE_KEY'; // add your private key (orefered - use a new wallet)
    const wallet = new Wallet(privateKey, provider);
....

    // Execute trade
    try {
        const tx = await contract.executeTrades(
            token,
            iterations,
            minAmountOut,
            { value: parseEther('0.01') }  // 0.001 above eth is prefered per trade

        );
....
    }
~~~
##### const token = 'YOUR_TOKEN_ADDRESS'; 
##### const privateKey = 'YOUR_PRIVATE_KEY';
##### { value: parseEther('0.01') }  // 0.001 above eth is prefered per trade


## Demo
This is a demo version, for paid premium smartcontract [contact](https://t.me/solapriv), There is a fee deduction on each and every trade in this demo.

#### Trade Transaction 

[https://basescan.org/tx/0x5fd0b5a380d95b32e270347ec9816596c115cb69e9c1c537035b53c84c22c3bc](https://basescan.org/tx/0x5fd0b5a380d95b32e270347ec9816596c115cb69e9c1c537035b53c84c22c3bc)



#### Buy premium
contact [@solapriv](https://t.me/solapriv)