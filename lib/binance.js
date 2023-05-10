import Binance from 'node-binance-api';

// default meaning export this function by default
export async function getBinanceBTCPriceInUSD(currency) { // notice export keyword here. this is called a NAMED export
            if (currency === "XBT"){ 
                currency = "BTC"
            }
        const binance = new Binance()
        const binanceTicker = await binance.prices();
        return await binanceTicker[`${currency}USDT`]
}

// separate import modules from the main file