import React, { useEffect, useState } from 'react';
import { coinApi } from '../api/coinApi';
import { ICoinsMarkets } from '../interfaces/interfaces';
import { transformCoinsMarkets } from '../utils/utils';

const useGetCoinsMarkets = () => {
  const [coins, setCoins] = useState<ICoinsMarkets[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    coinApi
      .getCoinsMarkets({
        vs_currency: 'EUR',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
      })
      .then(({ data }) => setCoins(transformCoinsMarkets(data)))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { coins, error, isLoading };
};

export default useGetCoinsMarkets;
