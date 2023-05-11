// export async function generateMYRTicker(currency) {
//    try{ 
//     let response = await fetch(`https://api.luno.com/api/1/ticker?pair=${currency}MYR`)
//     let data = await response.json();
//     let result = data.last_trade;
//     return result
//    }
//    catch(err){
//     return  "Failed to retrieve price"
//    }
// }

// for mock purpose - happy path
export async function generateMYRTicker(currency) {
   try{ 
       let response = await fetch(`https://api.luno.com/api/1/ticker?pair=XBTMYR`)
       let data = await response.json();
       let result = data.last_trade;
       return result
   }
   catch(err){
      return  "Failed to retrieve price"
   }
}
