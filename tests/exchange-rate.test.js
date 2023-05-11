const MOCK_PRICE = 99
const MOCK_JSON_RESP = { conversion_rate : MOCK_PRICE }

// we're modifying the fetch method to return these values
global.fetch = jest.fn(() => Promise.resolve({
  status: 200,
  json: () => Promise.resolve(MOCK_JSON_RESP)
}));

import { generateExchangeRate } from '../lib/exchange-rate.js'

test("Returns the Exchange Rate if successful", async () => {
  expect(await generateExchangeRate()).toBe(MOCK_PRICE);
});
