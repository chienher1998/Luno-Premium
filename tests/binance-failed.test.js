beforeEach(() => {
    jest.resetModules(); // reset module mocks before each test to not affect other tests in this file
  });
  
  test("Returns message if Binance request failed", async () => {
    const getBinancePrice = require('../lib/binance.js').getBinanceBTCPriceInUSD// import the module(function)

    expect(await getBinancePrice()).toBe("Failed to return the price");
  });