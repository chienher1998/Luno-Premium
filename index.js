import dotenv from 'dotenv' 
dotenv.config()
 
import {inputCurrency} from './lib/prompt.js' //import module from another js file
import {generateMYRTicker} from './lib/luno.js'
import {generateExchangeRate} from './lib/exchange-rate.js'
import {getBinanceBTCPriceInUSD} from './lib/binance.js' 

let currency = await inputCurrency()

async function displayPrice(){
    const myr = await generateMYRTicker(currency);
    console.log(`${currency}MYR price on Luno: ${'MYR'.padStart(15)} ${myr}`);

    const usdmyr = await generateExchangeRate();
    console.log(`USDMYR: ${JSON.stringify(usdmyr).padStart(32)}`)

    const USDTicker =  myr / usdmyr;
    console.log(`${currency}USD price on Luno: ${'USD'.padStart(15)} ${USDTicker}`);

    const binanceTicker = await getBinanceBTCPriceInUSD(currency); // Pass currency as argument
    console.log(`BTCUSD price on Binance: ${'USD'.padStart(12)} ${binanceTicker}`)

    const priceDiff = USDTicker - binanceTicker;
    console.log(`Price Difference: ${'USD'.padStart(19)} ${priceDiff.toString()}`);

    const lunoPrem = (priceDiff) * 100; 
    console.log(`Luno Premium: ${lunoPrem.toFixed(4).padStart(30)} %`)

    console.log(`________________________________________________________________`)
}

async function run() {
    for (let i = 1; i <= Infinity; i++) {
        await displayPrice();
        await new Promise(resolve => setTimeout(resolve, 5000));
        //promise to delay for another 5 sec before starting next loop
    }
}
run();




