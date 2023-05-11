import Binance from 'node-binance-api';

export async function getBinanceBTCPriceInUSD(currency) { 
    try{     
    if (currency === "XBT"){ 
                currency = "BTC"
            }
        const binance = new Binance()
        const binanceTicker = await binance.prices();
        return await binanceTicker[`${currency}USDT`]
    }
    catch(err){
        return "Failed to return the price"
    }
}


// for mock test purpose

// export async function getBinanceBTCPriceInUSD() { 
//     try{
//         const binance = new Binance()
//         const binanceTicker = await binance.prices();
//         return await binanceTicker[`BTCUSDT`]
//     }
//     catch(err){
//         return "Failed to return the price"
//     }
// }

