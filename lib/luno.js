export async function generateMYRTicker(currency) {
    return await fetch(`https://api.luno.com/api/1/ticker?pair=${currency}MYR`)
        .then(response => response.json())
        .then(data => {
            const result = data.last_trade;
            return result;
        })
}