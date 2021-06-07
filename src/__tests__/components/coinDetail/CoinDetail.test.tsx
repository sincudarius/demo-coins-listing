import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import { mockApiCall } from '../../../__mocks__/mockApi';
import CoinDetail from '../../../components/coniDetail/CoinDetail';
import { Route, Router } from 'react-router-dom';
export function renderWithRouterMatch(
  ui: any,
  {
    path = '/',
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: any
) {
  return {
    ...render(
      <Router history={history}>
        <Route path={path} component={ui} />
      </Router>
    ),
  };
}

mockApiCall(
  'coins/bitcoin',
  {
    name: 'Bitcoin',
    symbol: 'btc',
    hashing_algorithm: 'test algorithm',
    description: { en: 'test ' },
    market_data: { market_cap: { eur: 2398472394729 } },
    links: { homepage: ['test', '', ''] },
    genesis_date: '2009-01-03',
    additionalProperty1: 'additionalProperty',
    additionalProperty2: 'additionalProperty',
    additionalProperty3: 'additionalProperty',
    additionalProperty4: 'additionalProperty',
  },
  'onGet'
);

describe('Coins List', () => {
  test.skip('should ', async () => {
    const { getByAltText } = renderWithRouterMatch(CoinDetail, {
      route: 'coins/bitcoin',
      path: '/coins/:coinId',
    });

    await waitFor(() => {
      expect(getByAltText('Hashing algorithm:')).toBeDefined();
      expect(getByAltText('Market cap in Euro:')).toBeDefined();
      expect(getByAltText('Genesis date:')).toBeDefined();
      expect(getByAltText('For more details check:')).toBeDefined();
      expect(getByAltText('Description:')).toBeDefined();
    });
  });
});
