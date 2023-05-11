const MOCK_STATUS_CODE = 500

// we're modifying the fetch method to return these values
global.fetch = jest.fn(() => Promise.resolve({
  status: MOCK_STATUS_CODE,
  json: () => { }
}));

import { generateExchangeRate } from '../lib/exchange-rate.js'

test("Returns Message for Failed API Response", async () => {
  expect(await generateExchangeRate()).toBe("Failed to retrieve price");
});
