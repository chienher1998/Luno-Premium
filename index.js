import dotenv from 'dotenv' 
dotenv.config()
 
import {inputCurrency} from './lib/prompt.js' //import module from another js file
import {generateMYRTicker} from './lib/luno.js'
import {generateExchangeRate} from './lib/exchange-rate.js'
import {getBinanceBTCPriceInUSD} from './lib/binance.js' 

let currency = inputCurrency()

async function displayPrice(){
    const myrLuno = await generateMYRTicker(currency);
    console.log(`${currency}MYR price on Luno: ${'MYR'.padStart(15)} ${parseFloat(myrLuno).toFixed(3)}`);

    const usdmyr = await generateExchangeRate();
    console.log(`USDMYR: ${'MYR'.padStart(29)} ${usdmyr}`);//converting usdmyr tostring

    const USDTickerLuno =  await (myrLuno / usdmyr);
    console.log(`${currency}USD price on Luno: ${'USD'.padStart(15)} ${USDTickerLuno}`);

    const binanceTicker = await getBinanceBTCPriceInUSD(currency); // Pass currency as argument
    console.log(`BTCUSD price on Binance: ${'USD'.padStart(12)} ${binanceTicker}`)

    const priceDiff = await (USDTickerLuno - binanceTicker);
    console.log(`Price Difference: ${'USD'.padStart(19)} ${priceDiff.toString()}`);

    const lunoPrem = (priceDiff/USDTickerLuno) * 100; 
    console.log(`Luno Premium: ${lunoPrem.toFixed(4).padStart(26)} %`)

    console.log(`________________________________________________________________`)
}

async function loop() {
    for (let i = 1; i < Infinity; i++) {
        await displayPrice();
        await new Promise(resolve => setTimeout(resolve, 5000));
        //promise to delay for another 5 sec before starting next loop
    }
}
loop();
