export async function generateExchangeRate(){
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEYS}/latest/USD`);
    const result = await response.json(); // wait for it to parse into json
    return result.conversion_rates.MYR;
}