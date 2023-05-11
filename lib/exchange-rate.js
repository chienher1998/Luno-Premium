export async function generateExchangeRate(){
    try{
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEYS}/pair/USD/MYR`);
        const result = await response.json(); 
        return result.conversion_rate
    }
    catch(err){
        return  "Failed to retrieve price"
    }
}