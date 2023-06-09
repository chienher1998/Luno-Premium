const MOCK_STATUS_CODE = 500

// we're modifying the fetch method to return these values
global.fetch = jest.fn(() => Promise.resolve({
  status: MOCK_STATUS_CODE,
  json: () => { }
}));

import { generateMYRTicker } from '../lib/luno.js'

test("Returns Message for Failed Luno Response", async () => {
  expect(await generateMYRTicker()).toBe("Failed to retrieve price");
});

