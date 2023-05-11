beforeEach(() => {
  jest.resetModules(); // reset module mocks before each test to not affect other tests in this file
});

test("Returns price if Binance request succeeds", async () => {
  const getBinancePrice = require('../lib/binance.js').getBinanceBTCPriceInUSD// import the module(function)

  jest.mock('node-binance-api', () => {  // mocking the entire node-binance-api module
    return class Binance { // to stimulate the binance api without calling request
      // we use only the prices method for this particular test, so we'll mock just this method
      prices() {
        return new Promise(res => {
          res({
            BTCUSDT: 10 //Mock Price
          })
        })
      }
    }
  })
  expect(await getBinancePrice()).toBe(10);
});

















// This is not working bc
// it imports the modules first then run the function then only mock
// // so it will give u the value directly from api not the mock value

// import {getBinanceBTCPriceInUSD} from '../lib/binance.js'

// test("Returns price if Binance request succeeds", async () => {

//   jest.mock('node-binance-api', () => {  // mocking the entire node-binance-api module
//     return class Binance { // to stimulate the binance api without calling request
//       // we use only the prices method for this particular test, so we'll mock just this method
//       prices() {
//         return new Promise(res => {
//           res({
//             BTCUSDT: '10'
//           })
//         })
//       }
//     }
//   })

//   expect(await getBinanceBTCPriceInUSD()).toBe('10');
// })




//The correct sequence is import module > set mock > run function

// import {getBinanceBTCPriceInUSD} from '../lib/binance.js'

//   jest.mock('node-binance-api', () => {  // mocking the entire node-binance-api module
//     return class Binance { // to stimulate the binance api without calling request
//       // we use only the prices method for this particular test, so we'll mock just this method
//       prices() {
//         return new Promise(res => {
//           res({
//             BTCUSDT: '10'
//           })
//         })
//       }
//     }
//   })


// test("Returns price if Binance request succeeds", async () => {
//   expect(await getBinanceBTCPriceInUSD()).toBe('10');
// })