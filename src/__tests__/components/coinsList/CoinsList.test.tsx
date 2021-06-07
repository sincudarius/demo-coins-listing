import React from 'react';
import { render, waitFor } from '@testing-library/react';

import { mockApiCall } from '../../../__mocks__/mockApi';
import CoinsList from '../../../components/conisList/CoinsList';

mockApiCall(
  'coins/markets',
  [
    {
      id: 'tether',
      symbol: 'usdt',
      name: 'Tether',
      image:
        'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
      current_price: 822847,
      high_24h: 829857,
      low_24h: 820177,
      additionalProperty1: 'additionalProperty',
      additionalProperty2: 'additionalProperty',
      additionalProperty3: 'additionalProperty',
      additionalProperty4: 'additionalProperty',
    },
  ],
  'onGet'
);

describe('Coins List', () => {
  test('should ', async () => {
    const { getByText } = render(<CoinsList />);
    await waitFor(() => {
      expect(getByText('Name')).toBeDefined();
      expect(getByText('Symbol')).toBeDefined();
      expect(getByText('Current Price')).toBeDefined();
      expect(getByText('High 24 hour Price')).toBeDefined();
      expect(getByText('Low 24 hour Price')).toBeDefined();
    });
  });
});
