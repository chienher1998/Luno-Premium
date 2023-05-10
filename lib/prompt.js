import promptSync from 'prompt-sync';// import externally 
const prompt = promptSync();

export function inputCurrency(){
let currency = prompt("Input your currency:").toUpperCase();
return currency
}