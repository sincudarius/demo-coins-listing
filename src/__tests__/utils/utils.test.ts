import { transformCoinDetail, transformCoinsMarkets } from '../../utils/utils';

test('should return the expected strucured object for listing CoinsMarkets', () => {
  const dataCoinsMarkets = [
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
  ];

  expect(transformCoinsMarkets(dataCoinsMarkets)).toStrictEqual([
    {
      id: 'tether',
      symbol: 'usdt',
      name: 'Tether',
      image:
        'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
      current_price: '€822,847',
      high_24h: '€829,857',
      low_24h: '€820,177',
    },
  ]);
});

test('should return the expected strucured object for listing CoinDetail', () => {
  const dataCoinDetail = {
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
  };

  expect(transformCoinDetail(dataCoinDetail)).toStrictEqual({
    name: 'Bitcoin',
    symbol: 'btc',
    hashing_algorithm: 'test algorithm',
    description: dataCoinDetail.description.en,
    market_data: ' €2,398,472,394,729',
    links: dataCoinDetail.links.homepage,
    genesis_date: new Date('2009-01-03').toLocaleDateString(),
  });
});
