

  test('should display the correct prices and calculations', async () => {
    // Mock the return values of the functions used in displayPrice

    // Mock Luno Price
    const MOCK_LUNO_PRICE = 9
    // const { generateMYRTicker } = require('../lib/luno.js');
    jest.mock('../lib/luno.js', () => ({
        generateMYRTicker: jest.fn(() => {
          return new Promise((resolve) => {
            resolve(MOCK_LUNO_PRICE);
          });
        }),
      }));



    // Assert that the console output is correct
    console.log = jest.fn(() => undefined);
    expect(console.log).toHaveBeenNthCalledWith("XBTMYR price on Luno: ".padStart(15),"MYR",myrLunores);
}
  );
